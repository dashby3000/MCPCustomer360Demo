import {
  buildCommonPrompts,
  connectStdio,
  createServer,
  demoCompany,
  bulletListResult,
  getAccountById,
  isDirectRun,
  registerAccountResources,
  registerOverviewResource,
  startStreamingServer,
  toolResult,
  z
} from "./server-utils.js";

export function createSalesforceServer() {
  const server = createServer("salesforce-mcp");

  registerOverviewResource(server, "salesforce", {
    accounts: demoCompany.salesforceAccounts,
    opportunities: demoCompany.opportunities
  });

  registerAccountResources(server, "salesforce", demoCompany.salesforceAccounts, (account) => ({
    account,
    opportunity: demoCompany.opportunities.find((item) => item.accountId === account.accountId),
    contacts: demoCompany.contacts.filter((contact) => contact.accountId === account.accountId)
  }));

  server.registerTool(
    "list_accounts",
    {
      description: "List Salesforce-style account records with optional filters.",
      inputSchema: {
        segment: z.enum(["Enterprise", "Mid-Market"]).optional(),
        riskLevel: z.enum(["low", "medium", "high"]).optional()
      }
    },
    async ({ segment, riskLevel }) => {
      const accounts = demoCompany.salesforceAccounts.filter((account) => {
        if (segment && account.segment !== segment) return false;
        if (riskLevel && account.riskLevel !== riskLevel) return false;
        return true;
      });
      return bulletListResult(
        `Returned ${accounts.length} Salesforce accounts:`,
        accounts.map((account) => `${account.accountName} (${account.accountId})`),
        { accounts }
      );
    }
  );

  server.registerTool(
    "get_account",
    {
      description: "Get the Salesforce account and renewal record for one account.",
      inputSchema: {
        accountId: z.string()
      }
    },
    async ({ accountId }) => {
      const account = demoCompany.salesforceAccounts.find((item) => item.accountId === accountId);
      const opportunity = demoCompany.opportunities.find((item) => item.accountId === accountId);
      const account360 = getAccountById(accountId);
      return bulletListResult(
        `Loaded Salesforce context for ${accountId}:`,
        [
          `Account: ${account?.accountName ?? "Unknown"}`,
          `ARR: ${account?.arrFormatted ?? "Unknown"}`,
          `Renewal date: ${account?.renewalDate ?? "Unknown"}`,
          `Renewal stage: ${account?.renewalStage ?? "Unknown"}`,
          `Risk level: ${account?.riskLevel ?? "Unknown"}`
        ],
        {
          account,
          opportunity,
          account360
        }
      );
    }
  );

  server.registerTool(
    "get_top_accounts_by_arr",
    {
      description: "Return the top N accounts by ARR.",
      inputSchema: {
        limit: z.number().int().min(1).max(15).default(5)
      }
    },
    async ({ limit }) => {
      const accounts = demoCompany.salesforceAccounts
        .slice()
        .sort((left, right) => right.arr - left.arr)
        .slice(0, limit);
      return bulletListResult(
        `Top ${accounts.length} accounts by ARR:`,
        accounts.map((account) => `${account.accountName}: ${account.arrFormatted}`),
        { accounts }
      );
    }
  );

  server.registerTool(
    "get_renewals",
    {
      description: "List renewals happening within a given number of days.",
      inputSchema: {
        daysAhead: z.number().int().min(1).max(365).default(120),
        riskOnly: z.boolean().default(false)
      }
    },
    async ({ daysAhead, riskOnly }) => {
      const renewals = demoCompany.salesforceAccounts.filter((account) => {
        if (account.daysToRenewal > daysAhead) return false;
        if (riskOnly && account.riskLevel === "low") return false;
        return true;
      });
      return bulletListResult(
        `Found ${renewals.length} renewals inside ${daysAhead} days:`,
        renewals.map(
          (account) =>
            `${account.accountName}: ${account.renewalDate} (${account.daysToRenewal} days, ${account.renewalStage})`
        ),
        { renewals }
      );
    }
  );

  buildCommonPrompts(server, "salesforce", "ARR, renewals, account ownership, and commercial risk");

  return server;
}

if (isDirectRun(import.meta.url)) {
  if (process.argv.includes("--http")) {
    await startStreamingServer({
      name: "salesforce-mcp",
      createServer: createSalesforceServer,
      port: Number(process.env.PORT || 4101)
    });
  } else {
    await connectStdio(createSalesforceServer());
  }
}
