import {
  buildCommonPrompts,
  bulletListResult,
  connectStdio,
  createServer,
  demoCompany,
  isDirectRun,
  registerAccountResources,
  registerOverviewResource,
  startStreamingServer,
  toolResult,
  z
} from "./server-utils.js";

export function createGainsightServer() {
  const server = createServer("gainsight-mcp");

  registerOverviewResource(server, "gainsight", {
    healthProfiles: demoCompany.healthProfiles,
    healthHistory: demoCompany.healthHistory,
    narratives: demoCompany.demoNarratives
  });

  registerAccountResources(server, "gainsight", demoCompany.healthProfiles, (profile) => profile);

  server.registerTool(
  "list_health_scores",
  {
    description: "List account health scores with optional risk filter.",
    inputSchema: {
      riskLevel: z.enum(["low", "medium", "high"]).optional()
    }
  },
  async ({ riskLevel }) => {
    const healthProfiles = demoCompany.healthProfiles.filter((profile) => {
      return riskLevel ? profile.riskLevel === riskLevel : true;
    });
    return bulletListResult(
      `Returned ${healthProfiles.length} health score records:`,
      healthProfiles.map(
        (profile) =>
          `${profile.accountName}: health ${profile.healthScore} (${profile.riskLevel}, renewal in ${profile.daysToRenewal} days)`
      ),
      { healthProfiles }
    );
  }
);

  server.registerTool(
  "get_health_profile",
  {
    description: "Get detailed health profile and CTA data for one account.",
    inputSchema: {
      accountId: z.string()
    }
  },
  async ({ accountId }) => {
    const profile = demoCompany.healthProfiles.find((item) => item.accountId === accountId);
    return bulletListResult(
      `Loaded Gainsight profile for ${accountId}:`,
      [
        `Account: ${profile?.accountName ?? "Unknown"}`,
        `Health score: ${profile?.healthScore ?? "Unknown"}`,
        `Health delta: ${profile?.healthDelta ?? "Unknown"}`,
        `Risk level: ${profile?.riskLevel ?? "Unknown"}`,
        `Open CTAs: ${profile?.ctas?.length ?? 0}`
      ],
      { profile }
    );
  }
);

  server.registerTool(
  "identify_churn_risk_accounts",
  {
    description: "Return the highest-risk churn accounts ranked by health and renewal pressure.",
    inputSchema: {
      limit: z.number().int().min(1).max(10).default(5)
    }
  },
  async ({ limit }) => {
    const accounts = demoCompany.healthProfiles
      .filter((profile) => profile.riskLevel !== "low")
      .sort((left, right) => left.healthScore - right.healthScore || left.daysToRenewal - right.daysToRenewal)
      .slice(0, limit);
    return bulletListResult(
      `Identified ${accounts.length} risky accounts:`,
      accounts.map(
        (account) => `${account.accountName}: health ${account.healthScore}, renewal in ${account.daysToRenewal} days`
      ),
      { accounts }
    );
  }
);

  server.registerTool(
  "get_health_history",
  {
    description: "Return monthly health history for one account or the top N accounts by ARR.",
    inputSchema: {
      accountId: z.string().optional(),
      topNByArr: z.number().int().min(1).max(10).optional()
    }
  },
  async ({ accountId, topNByArr }) => {
    const selectedAccountIds = accountId
      ? [accountId]
      : demoCompany.salesforceAccounts
          .slice()
          .sort((left, right) => right.arr - left.arr)
          .slice(0, topNByArr || 3)
          .map((account) => account.accountId);
    const history = demoCompany.healthHistory.filter((point) => selectedAccountIds.includes(point.accountId));
    return bulletListResult(
      `Returned ${history.length} health history points:`,
      history.slice(0, 36).map(
        (point) =>
          `${point.accountName} ${point.month}: health ${point.healthScore}, adoption ${point.adoptionScore}, support ${point.supportScore}`
      ),
      { history }
    );
  }
);

  server.registerTool(
  "get_success_plan",
  {
    description: "Return the success plan and open CTAs for an account.",
    inputSchema: {
      accountId: z.string()
    }
  },
  async ({ accountId }) => {
    const profile = demoCompany.healthProfiles.find((item) => item.accountId === accountId);
    return bulletListResult(
      `Loaded success plan for ${accountId}:`,
      [
        `Objective: ${profile?.successPlan?.objective ?? "Unknown"}`,
        ...((profile?.successPlan?.nextMilestones ?? []).map((milestone) => `Milestone: ${milestone}`))
      ],
      {
        accountId,
        successPlan: profile?.successPlan,
        ctas: profile?.ctas || []
      }
    );
  }
);

  buildCommonPrompts(server, "gainsight", "health scores, CTAs, sponsor changes, and success plans");

  return server;
}

if (isDirectRun(import.meta.url)) {
  if (process.argv.includes("--http")) {
    await startStreamingServer({
      name: "gainsight-mcp",
      createServer: createGainsightServer,
      port: Number(process.env.PORT || 4102)
    });
  } else {
    await connectStdio(createGainsightServer());
  }
}
