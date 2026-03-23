import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { createMcpExpressApp } from "@modelcontextprotocol/sdk/server/express.js";
import { z } from "zod";
import { demoCompany, getAccountById, getEmployeeById, summarizeCommonalities } from "../data/demo-company.js";
import { bulletListResult, resourceResult, toolResult, sortByNumber } from "../lib/mcp-helpers.js";

export { z, demoCompany, getAccountById, getEmployeeById, summarizeCommonalities, bulletListResult, resourceResult, toolResult, sortByNumber };

export function createServer(name, version = "1.0.0") {
  return new McpServer({
    name,
    version
  });
}

export async function connectStdio(server) {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

export function isDirectRun(importMetaUrl) {
  return process.argv[1] && new URL(importMetaUrl).pathname === process.argv[1];
}

export function mountStreamableHttpServer(app, routePath, createServer, options = {}) {
  const transports = new Map();
  const {
    sessionMode = "stateful"
  } = options;

  async function createTransport() {
    const server = createServer();
    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: sessionMode === "stateful" ? () => crypto.randomUUID() : undefined,
      onsessioninitialized: (sessionId) => {
        transports.set(sessionId, { transport, server });
      }
    });

    transport.onclose = async () => {
      const sessionId = transport.sessionId;
      if (sessionId) {
        transports.delete(sessionId);
      }
      await server.close();
    };

    await server.connect(transport);
    return { server, transport };
  }

  app.post(routePath, async (req, res) => {
    const sessionId = req.headers["mcp-session-id"];

    try {
      if (sessionMode === "stateless") {
        const { server, transport } = await createTransport();
        try {
          await transport.handleRequest(req, res, req.body);
        } finally {
          await transport.close();
          await server.close();
        }
        return;
      }

      let entry = sessionId ? transports.get(sessionId) : undefined;
      if (!entry) {
        entry = await createTransport();
      }

      await entry.transport.handleRequest(req, res, req.body);
    } catch (error) {
      if (!res.headersSent) {
        res.status(500).json({
          jsonrpc: "2.0",
          error: {
            code: -32603,
            message: error instanceof Error ? error.message : "Internal server error"
          },
          id: null
        });
      }
    }
  });

  app.get(routePath, async (req, res) => {
    const sessionId = req.headers["mcp-session-id"];
    const entry = sessionId ? transports.get(sessionId) : undefined;

    if (!entry) {
      res.status(400).json({
        jsonrpc: "2.0",
        error: {
          code: -32000,
          message: "Invalid or missing session ID"
        },
        id: null
      });
      return;
    }

    await entry.transport.handleRequest(req, res);
  });

  app.delete(routePath, async (req, res) => {
    const sessionId = req.headers["mcp-session-id"];
    const entry = sessionId ? transports.get(sessionId) : undefined;

    if (!entry) {
      res.status(400).json({
        jsonrpc: "2.0",
        error: {
          code: -32000,
          message: "Invalid or missing session ID"
        },
        id: null
      });
      return;
    }

    await entry.transport.handleRequest(req, res);
  });
}

export function createStreamingApp(options = {}) {
  return createMcpExpressApp(options);
}

export async function startStreamingServer({
  name,
  createServer,
  port,
  host = "127.0.0.1",
  routePath = "/mcp",
  sessionMode = "stateful"
}) {
  const app = createStreamingApp({ host });
  mountStreamableHttpServer(app, routePath, createServer, { sessionMode });

  app.get("/", (_req, res) => {
    res.json({
      name,
      transport: "streamable-http",
      routePath,
      sessionMode
    });
  });

  await new Promise((resolve, reject) => {
    const server = app.listen(port, host, (error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(server);
    });
  });

  console.log(`${name} listening on http://${host}:${port}${routePath}`);
}

export function registerOverviewResource(server, sourceName, payload) {
  server.registerResource(
    `${sourceName}-overview`,
    `${sourceName}://overview`,
    {
      title: `${sourceName} overview`,
      description: `Overview data for the ${sourceName} synthetic MCP.`,
      mimeType: "application/json"
    },
    async () => resourceResult(`${sourceName}://overview`, payload)
  );
}

export function registerAccountResources(server, sourceName, items, mapper) {
  for (const item of items) {
    const uri = `${sourceName}://accounts/${item.accountId}`;
    server.registerResource(
      `${sourceName}-${item.accountId}`,
      uri,
      {
        title: `${sourceName} account ${item.accountId}`,
        description: `Account-scoped record for ${item.accountId}.`,
        mimeType: "application/json"
      },
      async () => resourceResult(uri, mapper(item))
    );
  }
}

export function buildCommonPrompts(server, sourceName, dataDescription) {
  server.registerPrompt(
    "explain-account",
    {
      title: `Explain account in ${sourceName}`,
      description: `Build a short analysis prompt for an account using ${sourceName} data.`,
      argsSchema: {
        accountId: z.string().describe("Account identifier")
      }
    },
    async ({ accountId }) => ({
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: `Use ${sourceName} data to explain the current state of account ${accountId}. Focus on ${dataDescription}.`
          }
        }
      ]
    })
  );
}
