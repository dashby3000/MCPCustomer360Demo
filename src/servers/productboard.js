import {
  buildCommonPrompts,
  bulletListResult,
  connectStdio,
  createServer,
  demoCompany,
  isDirectRun,
  registerOverviewResource,
  resourceResult,
  startStreamingServer,
  toolResult,
  z
} from "./server-utils.js";

export function createProductboardServer() {
  const server = createServer("productboard-mcp");

  registerOverviewResource(server, "productboard", {
    featureRequests: demoCompany.featureRequests,
    roadmapSummary: demoCompany.roadmapSummary
  });

  for (const roadmapItem of demoCompany.roadmapSummary) {
  const uri = `productboard://themes/${roadmapItem.theme}`;
  server.registerResource(
    `productboard-theme-${roadmapItem.theme}`,
    uri,
    {
      title: `Productboard theme ${roadmapItem.theme}`,
      description: `Aggregated feedback for ${roadmapItem.themeLabel}.`,
      mimeType: "application/json"
    },
    async () =>
      resourceResult(uri, {
        summary: roadmapItem,
        requests: demoCompany.featureRequests.filter((request) => request.theme === roadmapItem.theme)
      })
  );
  }

  server.registerTool(
  "list_feature_requests",
  {
    description: "List Productboard-style feature requests with optional filters.",
    inputSchema: {
      accountId: z.string().optional(),
      theme: z.string().optional()
    }
  },
  async ({ accountId, theme }) => {
    const requests = demoCompany.featureRequests.filter((request) => {
      if (accountId && request.accountId !== accountId) return false;
      if (theme && request.theme !== theme) return false;
      return true;
    });
    return bulletListResult(
      `Returned ${requests.length} feature requests:`,
      requests.slice(0, 20).map(
        (request) => `${request.accountName}: ${request.themeLabel} (${request.priority}, ${request.impact})`
      ),
      { requests }
    );
  }
);

  server.registerTool(
  "summarize_feature_themes",
  {
    description: "Summarize the most common product themes across customers.",
    inputSchema: {}
  },
  async () => {
    return bulletListResult(
      "Summarized feature themes across all Productboard requests:",
      demoCompany.roadmapSummary.map(
        (item) =>
          `${item.themeLabel}: ${item.requestCount} requests across ${item.impactedAccounts} accounts (${item.impactedArrFormatted})`
      ),
      {
        roadmapSummary: demoCompany.roadmapSummary
      }
    );
  }
);

  server.registerTool(
  "build_roadmap_hypothesis",
  {
    description: "Build a roadmap recommendation based on request frequency, ARR impact, and churn risk.",
    inputSchema: {
      topN: z.number().int().min(1).max(6).default(4)
    }
  },
  async ({ topN }) => {
    const initiatives = demoCompany.roadmapSummary.slice(0, topN).map((item, index) => ({
      rank: index + 1,
      theme: item.theme,
      themeLabel: item.themeLabel,
      rationale: `${item.requestCount} requests across ${item.impactedAccounts} accounts with ${item.criticalCount} critical asks and ${item.impactedArrFormatted} of influenced ARR.`,
      proposedInitiative: item.roadmapCandidate
    }));
    return bulletListResult(
      `Built a ${initiatives.length}-item roadmap hypothesis:`,
      initiatives.map((initiative) => `${initiative.rank}. ${initiative.themeLabel}: ${initiative.rationale}`),
      { initiatives }
    );
  }
);

  buildCommonPrompts(server, "productboard", "customer requests, recurring themes, and roadmap prioritization");

  return server;
}

if (isDirectRun(import.meta.url)) {
  if (process.argv.includes("--http")) {
    await startStreamingServer({
      name: "productboard-mcp",
      createServer: createProductboardServer,
      port: Number(process.env.PORT || 4104)
    });
  } else {
    await connectStdio(createProductboardServer());
  }
}
