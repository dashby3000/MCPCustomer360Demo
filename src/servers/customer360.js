import {
  buildCommonPrompts,
  bulletListResult,
  connectStdio,
  createServer,
  demoCompany,
  getAccountById,
  isDirectRun,
  registerOverviewResource,
  resourceResult,
  startStreamingServer,
  toolResult,
  z
} from "./server-utils.js";

function buildEvidenceBundle(accountId) {
  const account360 = getAccountById(accountId);
  const salesforce = demoCompany.salesforceAccounts.find((item) => item.accountId === accountId);
  const opportunity = demoCompany.opportunities.find((item) => item.accountId === accountId);
  const gainsight = demoCompany.healthProfiles.find((item) => item.accountId === accountId);
  const tickets = demoCompany.tickets.filter((item) => item.accountId === accountId);
  const calls = demoCompany.calls.filter((item) => item.accountId === accountId);
  const featureRequests = demoCompany.featureRequests.filter((item) => item.accountId === accountId);
  const usageSnapshots = demoCompany.usageSnapshots.filter((item) => item.accountId === accountId);
  const revenueHistory = demoCompany.revenueHistory.filter((item) => item.accountId === accountId);
  const healthHistory = demoCompany.healthHistory.filter((item) => item.accountId === accountId);
  const ticketHistory = demoCompany.ticketHistory.filter((item) => item.accountId === accountId);
  const latestUsage = usageSnapshots.at(-1);

  return {
    accountId,
    accountName: account360?.name,
    account360,
    salesforce,
    opportunity,
    gainsight,
    tickets,
    calls,
    featureRequests,
    usageSnapshots,
    revenueHistory,
    healthHistory,
    ticketHistory,
    facts: {
      riskLevel: account360?.riskLevel,
      healthScore: gainsight?.healthScore,
      healthDelta: gainsight?.healthDelta,
      renewalDate: salesforce?.renewalDate,
      daysToRenewal: salesforce?.daysToRenewal,
      renewalStage: salesforce?.renewalStage,
      championStatus: salesforce?.championStatus,
      sponsorStatus: salesforce?.sponsorStatus,
      openTickets: tickets.filter((ticket) => ticket.status === "Open").length,
      totalTickets: tickets.length,
      sev1Tickets: tickets.filter((ticket) => ticket.severity === "sev1").length,
      recentCalls: calls.length,
      latestActiveSeatPct: latestUsage?.activeSeatPct ?? null,
      featureThemes: featureRequests.map((request) => request.themeLabel),
      revenueHistoryPoints: revenueHistory.length,
      healthHistoryPoints: healthHistory.length,
      ticketHistoryPoints: ticketHistory.length
    }
  };
}

function evidenceSummaryLines(bundle) {
  return [
    `Account: ${bundle.accountName}`,
    `Risk level: ${bundle.facts.riskLevel}`,
    `Health score: ${bundle.facts.healthScore} (${bundle.facts.healthDelta >= 0 ? "+" : ""}${bundle.facts.healthDelta})`,
    `Renewal: ${bundle.facts.renewalDate} (${bundle.facts.daysToRenewal} days, ${bundle.facts.renewalStage})`,
    `Champion status: ${bundle.facts.championStatus}`,
    `Sponsor status: ${bundle.facts.sponsorStatus}`,
    `Tickets: ${bundle.facts.totalTickets} total, ${bundle.facts.openTickets} open, ${bundle.facts.sev1Tickets} sev1`,
    `Calls: ${bundle.facts.recentCalls}`,
    `Latest active seat pct: ${bundle.facts.latestActiveSeatPct}%`,
    `Feature themes: ${bundle.facts.featureThemes.join(", ") || "None"}`,
    `History coverage: revenue ${bundle.facts.revenueHistoryPoints} months, health ${bundle.facts.healthHistoryPoints} months, tickets ${bundle.facts.ticketHistoryPoints} months`
  ];
}

export function createCustomer360Server() {
  const server = createServer("customer360-mcp");

  registerOverviewResource(server, "customer360", {
    accounts: demoCompany.account360,
    narratives: demoCompany.demoNarratives
  });

  for (const account of demoCompany.account360) {
    const uri = `customer360://accounts/${account.accountId}`;
    server.registerResource(
      `customer360-${account.accountId}`,
      uri,
      {
        title: `Customer 360 bundle for ${account.accountId}`,
        description: `Cross-source account evidence bundle for ${account.accountId}.`,
        mimeType: "application/json"
      },
      async () => resourceResult(uri, buildEvidenceBundle(account.accountId))
    );
  }

  server.registerTool(
    "list_accounts",
    {
      description: "List customer 360 accounts with risk and health facts.",
      inputSchema: {
        riskLevel: z.enum(["low", "medium", "high"]).optional()
      }
    },
    async ({ riskLevel }) => {
      const accounts = demoCompany.account360.filter((account) => {
        return riskLevel ? account.riskLevel === riskLevel : true;
      });

      return bulletListResult(
        `Returned ${accounts.length} customer360 accounts:`,
        accounts.map(
          (account) =>
            `${account.name}: risk ${account.riskLevel}, health ${account.healthScore}, renewal ${account.renewalDate}`
        ),
        { accounts }
      );
    }
  );

  server.registerTool(
    "get_account_evidence_bundle",
    {
      description: "Get a grounded cross-source evidence bundle for one account.",
      inputSchema: {
        accountId: z.string()
      }
    },
    async ({ accountId }) => {
      const bundle = buildEvidenceBundle(accountId);
      return bulletListResult(
        `Cross-source evidence for ${accountId}:`,
        evidenceSummaryLines(bundle),
        { bundle }
      );
    }
  );

  server.registerTool(
    "get_account_chart_readiness",
    {
      description: "Explain which chartable histories exist for an account.",
      inputSchema: {
        accountId: z.string()
      }
    },
    async ({ accountId }) => {
      const bundle = buildEvidenceBundle(accountId);
      return bulletListResult(
        `Chart readiness for ${accountId}:`,
        [
          `Account: ${bundle.accountName}`,
          `Revenue history points: ${bundle.facts.revenueHistoryPoints}`,
          `Health history points: ${bundle.facts.healthHistoryPoints}`,
          `Ticket history points: ${bundle.facts.ticketHistoryPoints}`,
          `Usage history points: ${bundle.usageSnapshots.length}`
        ],
        {
          accountId,
          readiness: {
            revenueHistory: bundle.revenueHistory,
            healthHistory: bundle.healthHistory,
            ticketHistory: bundle.ticketHistory,
            usageSnapshots: bundle.usageSnapshots
          }
        }
      );
    }
  );

  server.registerTool(
    "get_risk_account_summary",
    {
      description: "Return grounded risk summaries for high and medium risk accounts.",
      inputSchema: {
        limit: z.number().int().min(1).max(10).default(6)
      }
    },
    async ({ limit }) => {
      const accounts = demoCompany.account360
        .filter((account) => account.riskLevel !== "low")
        .sort((left, right) => left.healthScore - right.healthScore || left.supportOpenTickets - right.supportOpenTickets)
        .slice(0, limit)
        .map((account) => {
          const bundle = buildEvidenceBundle(account.accountId);
          return {
            accountId: account.accountId,
            accountName: account.name,
            summary: {
              riskLevel: bundle.facts.riskLevel,
              healthScore: bundle.facts.healthScore,
              renewalDate: bundle.facts.renewalDate,
              daysToRenewal: bundle.facts.daysToRenewal,
              championStatus: bundle.facts.championStatus,
              sponsorStatus: bundle.facts.sponsorStatus,
              openTickets: bundle.facts.openTickets,
              recentCalls: bundle.facts.recentCalls,
              latestActiveSeatPct: bundle.facts.latestActiveSeatPct,
              riskReasons: bundle.account360?.riskReasons ?? []
            }
          };
        });

      return bulletListResult(
        `Grounded risk summary for ${accounts.length} accounts:`,
        accounts.map(
          (account) =>
            `${account.accountName}: health ${account.summary.healthScore}, renewal in ${account.summary.daysToRenewal} days, champion ${account.summary.championStatus}, sponsor ${account.summary.sponsorStatus}, ${account.summary.openTickets} open tickets, ${account.summary.recentCalls} calls`
        ),
        { accounts }
      );
    }
  );

  server.registerTool(
    "compare_accounts",
    {
      description: "Compare two accounts using explicit cross-source facts.",
      inputSchema: {
        leftAccountId: z.string(),
        rightAccountId: z.string()
      }
    },
    async ({ leftAccountId, rightAccountId }) => {
      const left = buildEvidenceBundle(leftAccountId);
      const right = buildEvidenceBundle(rightAccountId);

      return toolResult(
        `Compared ${left.accountName} and ${right.accountName} across risk, renewal, support, calls, and usage.`,
        {
          left,
          right
        }
      );
    }
  );

  buildCommonPrompts(
    server,
    "customer360",
    "cross-source risk evidence including health, renewals, support, calls, product requests, and usage"
  );

  return server;
}

if (isDirectRun(import.meta.url)) {
  if (process.argv.includes("--http")) {
    await startStreamingServer({
      name: "customer360-mcp",
      createServer: createCustomer360Server,
      port: Number(process.env.PORT || 4108)
    });
  } else {
    await connectStdio(createCustomer360Server());
  }
}
