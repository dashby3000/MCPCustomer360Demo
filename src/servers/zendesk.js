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

export function createZendeskServer() {
  const server = createServer("zendesk-mcp");

  registerOverviewResource(server, "zendesk", {
    tickets: demoCompany.tickets
  });

  for (const account of demoCompany.account360) {
  const uri = `zendesk://accounts/${account.accountId}/tickets`;
  server.registerResource(
    `zendesk-${account.accountId}-tickets`,
    uri,
    {
      title: `Zendesk tickets for ${account.accountId}`,
      description: `Support ticket history for ${account.accountId}.`,
      mimeType: "application/json"
    },
    async () =>
      resourceResult(
        uri,
        demoCompany.tickets.filter((ticket) => ticket.accountId === account.accountId)
      )
  );
  }

  server.registerTool(
  "list_tickets",
  {
    description: "List support tickets with optional account, severity, or status filters.",
    inputSchema: {
      accountId: z.string().optional(),
      severity: z.enum(["sev1", "sev2", "sev3"]).optional(),
      status: z.enum(["Open", "Closed"]).optional()
    }
  },
  async ({ accountId, severity, status }) => {
    const tickets = demoCompany.tickets.filter((ticket) => {
      if (accountId && ticket.accountId !== accountId) return false;
      if (severity && ticket.severity !== severity) return false;
      if (status && ticket.status !== status) return false;
      return true;
    });
    return bulletListResult(
      `Returned ${tickets.length} Zendesk tickets:`,
      tickets.slice(0, 20).map(
        (ticket) => `${ticket.accountName}: ${ticket.subject} (${ticket.severity}, ${ticket.status})`
      ),
      { tickets }
    );
  }
);

  server.registerTool(
  "summarize_support_burden",
  {
    description: "Rank accounts by ticket volume and severity.",
    inputSchema: {
      limit: z.number().int().min(1).max(10).default(5)
    }
  },
  async ({ limit }) => {
    const byAccount = demoCompany.account360
      .map((account) => {
        const tickets = demoCompany.tickets.filter((ticket) => ticket.accountId === account.accountId);
        return {
          accountId: account.accountId,
          accountName: account.name,
          ticketCount: tickets.length,
          openTicketCount: tickets.filter((ticket) => ticket.status === "Open").length,
          sev1Count: tickets.filter((ticket) => ticket.severity === "sev1").length,
          sev2Count: tickets.filter((ticket) => ticket.severity === "sev2").length
        };
      })
      .sort((left, right) => {
        return (
          right.ticketCount - left.ticketCount ||
          right.sev1Count - left.sev1Count ||
          right.openTicketCount - left.openTicketCount
        );
      })
      .slice(0, limit);
    return bulletListResult(
      `Top ${byAccount.length} accounts by support burden:`,
      byAccount.map(
        (account) =>
          `${account.accountName}: ${account.ticketCount} tickets, ${account.openTicketCount} open, ${account.sev1Count} sev1`
      ),
      { accounts: byAccount }
    );
  }
);

  server.registerTool(
  "customers_calling_support_most",
  {
    description: "Return the customers that contact support the most.",
    inputSchema: {
      limit: z.number().int().min(1).max(10).default(5)
    }
  },
  async ({ limit }) => {
    const customers = demoCompany.account360
      .map((account) => ({
        accountId: account.accountId,
        accountName: account.name,
        ticketCount: demoCompany.tickets.filter((ticket) => ticket.accountId === account.accountId).length
      }))
      .sort((left, right) => right.ticketCount - left.ticketCount)
      .slice(0, limit);
    return bulletListResult(
      `Top ${customers.length} customers by support volume:`,
      customers.map((customer) => `${customer.accountName}: ${customer.ticketCount} tickets`),
      { customers }
    );
  }
);

  buildCommonPrompts(server, "zendesk", "support volume, severity, customer tone, and escalation patterns");

  return server;
}

if (isDirectRun(import.meta.url)) {
  if (process.argv.includes("--http")) {
    await startStreamingServer({
      name: "zendesk-mcp",
      createServer: createZendeskServer,
      port: Number(process.env.PORT || 4103)
    });
  } else {
    await connectStdio(createZendeskServer());
  }
}
