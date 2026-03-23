import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import { spawn } from "node:child_process";

const root = process.cwd();
const port = 4299;
const baseUrl = `http://127.0.0.1:${port}`;

const servers = [
  ["salesforce", "/salesforce/mcp", { name: "get_top_accounts_by_arr", arguments: { limit: 2 } }],
  ["gainsight", "/gainsight/mcp", { name: "identify_churn_risk_accounts", arguments: { limit: 2 } }],
  ["zendesk", "/zendesk/mcp", { name: "summarize_support_burden", arguments: { limit: 2 } }],
  ["productboard", "/productboard/mcp", { name: "build_roadmap_hypothesis", arguments: { topN: 2 } }],
  ["gong", "/gong/mcp", { name: "analyze_tangent_patterns", arguments: { audience: "customer" } }],
  ["usage", "/usage/mcp", { name: "low_adoption_accounts", arguments: { limit: 2 } }],
  ["people", "/people/mcp", { name: "explain_top_performer_patterns", arguments: { roleFamily: "sales" } }],
  ["customer360", "/customer360/mcp", { name: "get_risk_account_summary", arguments: { limit: 2 } }]
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function testServer(name, path, sampleTool) {
  const client = new Client({
    name: "amaro-demo-http-smoke-client",
    version: "1.0.0"
  });
  const transport = new StreamableHTTPClientTransport(new URL(`${baseUrl}${path}`));

  try {
    await client.connect(transport);
    const tools = await client.listTools();
    const resources = await client.listResources();
    const toolCall = await client.callTool(sampleTool);

    if (!tools.tools.length) {
      throw new Error(`No tools exposed by ${name}`);
    }
    if (!resources.resources.length) {
      throw new Error(`No resources exposed by ${name}`);
    }
    if (toolCall.isError) {
      throw new Error(`Sample tool failed for ${name}`);
    }

    return {
      name,
      toolCount: tools.tools.length,
      resourceCount: resources.resources.length,
      sampleTool: sampleTool.name
    };
  } finally {
    await client.close();
    await transport.close();
  }
}

async function main() {
  const child = spawn("node", ["src/scripts/serve-streaming.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      HOST: "127.0.0.1"
    },
    stdio: ["ignore", "pipe", "pipe"]
  });

  let stderr = "";
  child.stderr.on("data", (chunk) => {
    stderr += chunk.toString();
  });

  try {
    await sleep(1000);
    const results = [];
    for (const [name, path, sampleTool] of servers) {
      results.push(await testServer(name, path, sampleTool));
    }
    console.log(JSON.stringify({ ok: true, transport: "streamable-http", results }, null, 2));
  } catch (error) {
    throw new Error(`${error.message}\n${stderr}`.trim());
  } finally {
    child.kill("SIGTERM");
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
