import {
  buildCommonPrompts,
  bulletListResult,
  connectStdio,
  createServer,
  demoCompany,
  getEmployeeById,
  isDirectRun,
  registerOverviewResource,
  startStreamingServer,
  toolResult,
  z
} from "./server-utils.js";

export function createPeopleServer() {
  const server = createServer("people-mcp");

  registerOverviewResource(server, "people", {
    employees: demoCompany.employees,
    benchmarks: demoCompany.peopleBenchmarks
  });

  server.registerTool(
  "list_employees",
  {
    description: "List employees with optional role filter.",
    inputSchema: {
      department: z.enum(["Sales", "Customer Success", "Support"]).optional()
    }
  },
  async ({ department }) => {
    const employees = demoCompany.employees.filter((employee) => {
      return department ? employee.department === department : true;
    });
    return bulletListResult(
      `Returned ${employees.length} employees:`,
      employees.map((employee) => `${employee.name} (${employee.role})`),
      { employees }
    );
  }
);

  server.registerTool(
  "benchmark_employees",
  {
    description: "Benchmark employees by role family.",
    inputSchema: {
      roleFamily: z.enum(["sales", "customer_success", "support"]),
      topN: z.number().int().min(1).max(6).default(3)
    }
  },
  async ({ roleFamily, topN }) => {
    const employees = demoCompany.peopleBenchmarks[roleFamily].slice(0, topN);
    return bulletListResult(
      `Benchmarked the top ${employees.length} ${roleFamily} employees:`,
      employees.map((employee) => `${employee.name}: ${JSON.stringify(employee.metrics)}`),
      {
        roleFamily,
        employees
      }
    );
  }
);

  server.registerTool(
  "explain_top_performer_patterns",
  {
    description: "Explain what top performers do differently for sales, success, or support.",
    inputSchema: {
      roleFamily: z.enum(["sales", "customer_success", "support"])
    }
  },
  async ({ roleFamily }) => {
    const employees = demoCompany.peopleBenchmarks[roleFamily].slice(0, 3).map((employee) => ({
      employeeId: employee.id,
      name: employee.name,
      role: employee.role,
      differentiators: employee.differentiators,
      habits: employee.habits,
      metrics: employee.metrics
    }));
    return bulletListResult(
      `Explained what the best ${roleFamily} employees do differently:`,
      employees.map(
        (employee) => `${employee.name}: ${employee.differentiators.join("; ")}`
      ),
      {
        roleFamily,
        employees
      }
    );
  }
);

  server.registerTool(
  "get_employee_context",
  {
    description: "Return one employee profile plus related account ownership.",
    inputSchema: {
      employeeId: z.string()
    }
  },
  async ({ employeeId }) => {
    const employee = getEmployeeById(employeeId);
    const relatedAccounts = demoCompany.salesforceAccounts.filter((account) => {
      return account.ownerId === employeeId || account.csmId === employeeId;
    });
    return bulletListResult(
      `Loaded people context for ${employeeId}:`,
      [
        `Employee: ${employee?.name ?? "Unknown"}`,
        `Role: ${employee?.role ?? "Unknown"}`,
        `Accounts: ${relatedAccounts.map((account) => account.accountName).join(", ") || "None"}`
      ],
      {
        employee,
        relatedAccounts
      }
    );
  }
);

  buildCommonPrompts(server, "people", "employee habits, performance, and benchmark patterns");

  return server;
}

if (isDirectRun(import.meta.url)) {
  if (process.argv.includes("--http")) {
    await startStreamingServer({
      name: "people-mcp",
      createServer: createPeopleServer,
      port: Number(process.env.PORT || 4107)
    });
  } else {
    await connectStdio(createPeopleServer());
  }
}
