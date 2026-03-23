import {
  buildCommonPrompts,
  bulletListResult,
  connectStdio,
  createServer,
  demoCompany,
  getEmployeeById,
  isDirectRun,
  registerOverviewResource,
  resourceResult,
  startStreamingServer,
  toolResult,
  z
} from "./server-utils.js";

export function createGongServer() {
  const server = createServer("gong-mcp");

  registerOverviewResource(server, "gong", {
    calls: demoCompany.calls
  });

  for (const account of demoCompany.account360) {
  const uri = `gong://accounts/${account.accountId}/calls`;
  server.registerResource(
    `gong-${account.accountId}-calls`,
    uri,
    {
      title: `Calls for ${account.accountId}`,
      description: `Call records and summaries for ${account.accountId}.`,
      mimeType: "application/json"
    },
    async () =>
      resourceResult(
        uri,
        demoCompany.calls.filter((call) => call.accountId === account.accountId)
      )
  );
  }

  server.registerTool(
  "list_calls",
  {
    description: "List Gong-style call summaries with optional account or employee filter.",
    inputSchema: {
      accountId: z.string().optional(),
      employeeId: z.string().optional()
    }
  },
  async ({ accountId, employeeId }) => {
    const calls = demoCompany.calls.filter((call) => {
      if (accountId && call.accountId !== accountId) return false;
      if (employeeId && call.employeeId !== employeeId) return false;
      return true;
    });
    return bulletListResult(
      `Returned ${calls.length} calls:`,
      calls.slice(0, 20).map(
        (call) => `${call.accountName}: ${call.date} (${call.sentiment}, ${call.durationMinutes} min)`
      ),
      { calls }
    );
  }
);

  server.registerTool(
  "summarize_account_conversations",
  {
    description: "Summarize conversation themes for a single account.",
    inputSchema: {
      accountId: z.string()
    }
  },
  async ({ accountId }) => {
    const calls = demoCompany.calls.filter((call) => call.accountId === accountId);
    const summary = {
      accountId,
      callCount: calls.length,
      sentimentMix: calls.map((call) => call.sentiment),
      repTangents: [...new Set(calls.flatMap((call) => call.repTangents))],
      customerTangents: [...new Set(calls.flatMap((call) => call.customerTangents))],
      topics: [...new Set(calls.flatMap((call) => call.customerTopics))]
    };
    return bulletListResult(
      `Summarized conversations for ${accountId}:`,
      [
        `Call count: ${summary.callCount}`,
        `Rep tangents: ${summary.repTangents.join(", ") || "None"}`,
        `Customer tangents: ${summary.customerTangents.join(", ") || "None"}`,
        `Topics: ${summary.topics.join(", ") || "None"}`
      ],
      summary
    );
  }
);

  server.registerTool(
  "analyze_tangent_patterns",
  {
    description: "Analyze common tangent themes from reps or customers across calls.",
    inputSchema: {
      audience: z.enum(["rep", "customer"])
    }
  },
  async ({ audience }) => {
    const map = new Map();
    for (const call of demoCompany.calls) {
      const themes = audience === "rep" ? call.repTangents : call.customerTangents;
      for (const theme of themes) {
        map.set(theme, (map.get(theme) || 0) + 1);
      }
    }
    const patterns = [...map.entries()]
      .sort((left, right) => right[1] - left[1])
      .map(([theme, mentions]) => ({ theme, mentions }));
    return bulletListResult(
      `Analyzed ${audience} tangent themes across calls:`,
      patterns.map((pattern) => `${pattern.theme}: ${pattern.mentions} mentions`),
      { audience, patterns }
    );
  }
);

  server.registerTool(
  "mine_product_feedback",
  {
    description: "Extract product feedback signals from call summaries.",
    inputSchema: {
      limit: z.number().int().min(1).max(15).default(8)
    }
  },
  async ({ limit }) => {
    const feedback = demoCompany.calls.slice(0, limit).map((call) => ({
      callId: call.callId,
      accountId: call.accountId,
      accountName: call.accountName,
      ownerName: getEmployeeById(call.employeeId)?.name,
      summary: call.summary,
      notableQuotes: call.notableQuotes
    }));
    return bulletListResult(
      `Extracted product feedback from ${feedback.length} calls:`,
      feedback.map((item) => `${item.accountName}: ${item.summary}`),
      { feedback }
    );
  }
);

  buildCommonPrompts(server, "gong", "call sentiment, spoken feedback, and conversational tangents");

  return server;
}

if (isDirectRun(import.meta.url)) {
  if (process.argv.includes("--http")) {
    await startStreamingServer({
      name: "gong-mcp",
      createServer: createGongServer,
      port: Number(process.env.PORT || 4105)
    });
  } else {
    await connectStdio(createGongServer());
  }
}
