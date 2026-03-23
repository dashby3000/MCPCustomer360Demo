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
  summarizeCommonalities,
  toolResult,
  z
} from "./server-utils.js";

export function createUsageServer() {
  const server = createServer("usage-mcp");

  registerOverviewResource(server, "usage", {
    usageSnapshots: demoCompany.usageSnapshots
  });

  for (const account of demoCompany.account360) {
  const uri = `usage://accounts/${account.accountId}/timeline`;
  server.registerResource(
    `usage-${account.accountId}-timeline`,
    uri,
    {
      title: `Usage timeline for ${account.accountId}`,
      description: `Monthly adoption timeline for ${account.accountId}.`,
      mimeType: "application/json"
    },
    async () =>
      resourceResult(
        uri,
        demoCompany.usageSnapshots.filter((snapshot) => snapshot.accountId === account.accountId)
      )
  );
  }

  server.registerTool(
  "get_usage_trends",
  {
    description: "Get usage trends for one account or all accounts.",
    inputSchema: {
      accountId: z.string().optional()
    }
  },
  async ({ accountId }) => {
    const usageSnapshots = demoCompany.usageSnapshots.filter((snapshot) => {
      return accountId ? snapshot.accountId === accountId : true;
    });
    return bulletListResult(
      `Returned ${usageSnapshots.length} usage snapshots:`,
      usageSnapshots.slice(0, 24).map(
        (snapshot) => `${snapshot.accountId}: ${snapshot.month} active seat pct ${snapshot.activeSeatPct}%`
      ),
      { usageSnapshots }
    );
  }
);

  server.registerTool(
  "low_adoption_accounts",
  {
    description: "Find low-adoption accounts based on most recent active seat percentage.",
    inputSchema: {
      limit: z.number().int().min(1).max(10).default(5)
    }
  },
  async ({ limit }) => {
    const latestByAccount = demoCompany.account360
      .map((account) => {
        const snapshots = demoCompany.usageSnapshots.filter((snapshot) => snapshot.accountId === account.accountId);
        return {
          accountId: account.accountId,
          accountName: account.name,
          latestActiveSeatPct: snapshots.at(-1)?.activeSeatPct ?? 0,
          trend: snapshots.map((snapshot) => snapshot.activeSeatPct)
        };
      })
      .sort((left, right) => left.latestActiveSeatPct - right.latestActiveSeatPct)
      .slice(0, limit);
    return bulletListResult(
      `Found ${latestByAccount.length} low-adoption accounts:`,
      latestByAccount.map(
        (account) => `${account.accountName}: ${account.latestActiveSeatPct}% active seats`
      ),
      { accounts: latestByAccount }
    );
  }
);

  server.registerTool(
  "best_customer_commonalities",
  {
    description: "Summarize what the best customers have in common.",
    inputSchema: {
      topN: z.number().int().min(2).max(8).default(4)
    }
  },
  async ({ topN }) => {
    const bestCustomers = demoCompany.demoNarratives.bestCustomers.slice(0, topN);
    const commonalities = summarizeCommonalities(bestCustomers.map((account) => account.accountId));
    return bulletListResult(
      `Summarized common patterns across ${bestCustomers.length} strong customers:`,
      [
        `Accounts: ${bestCustomers.map((account) => account.name).join(", ")}`,
        `Common themes: ${commonalities.mostCommonThemes.map((item) => item.label).join(", ") || "None"}`,
        `Common likes: ${commonalities.mostCommonLikes.map((item) => item.label).join(", ") || "None"}`
      ],
      {
        accounts: bestCustomers,
        commonalities
      }
    );
  }
);

  buildCommonPrompts(server, "usage", "adoption trends, breadth of usage, and healthy customer patterns");

  return server;
}

if (isDirectRun(import.meta.url)) {
  if (process.argv.includes("--http")) {
    await startStreamingServer({
      name: "usage-mcp",
      createServer: createUsageServer,
      port: Number(process.env.PORT || 4106)
    });
  } else {
    await connectStdio(createUsageServer());
  }
}
