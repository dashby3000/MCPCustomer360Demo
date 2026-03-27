import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const root = process.cwd();

const servers = [
  ["salesforce", ["src/servers/salesforce.js"], { name: "get_revenue_history", arguments: { topNByArr: 2 } }],
  ["gainsight", ["src/servers/gainsight.js"], { name: "get_health_history", arguments: { topNByArr: 2 } }],
  ["zendesk", ["src/servers/zendesk.js"], { name: "get_ticket_history", arguments: {} }],
  ["productboard", ["src/servers/productboard.js"], { name: "build_roadmap_hypothesis", arguments: { topN: 2 } }],
  ["gong", ["src/servers/gong.js"], { name: "analyze_tangent_patterns", arguments: { audience: "customer" } }],
  ["usage", ["src/servers/usage.js"], { name: "low_adoption_accounts", arguments: { limit: 2 } }],
  ["people", ["src/servers/people.js"], { name: "explain_top_performer_patterns", arguments: { roleFamily: "sales" } }],
  ["customer360", ["src/servers/customer360.js"], { name: "get_account_chart_readiness", arguments: { accountId: "redwood-bank" } }]
];

async function testServer(name, args, sampleTool) {
  const transport = new StdioClientTransport({
    command: "node",
    args,
    cwd: root,
    stderr: "pipe"
  });

  const client = new Client({
    name: "amaro-demo-smoke-client",
    version: "1.0.0"
  });

  let stderrText = "";
  transport.stderr?.on("data", (chunk) => {
    stderrText += chunk.toString();
  });

  try {
    await client.connect(transport);
    const tools = await client.listTools();
    const resources = await client.listResources();
    if (!tools.tools.length) {
      throw new Error(`No tools exposed by ${name}`);
    }
    if (!resources.resources.length) {
      throw new Error(`No resources exposed by ${name}`);
    }
    const toolCall = await client.callTool(sampleTool);
    if (toolCall.isError) {
      throw new Error(`Sample tool failed for ${name}`);
    }
    return {
      name,
      toolCount: tools.tools.length,
      resourceCount: resources.resources.length,
      sampleTool: sampleTool.name
    };
  } catch (error) {
    throw new Error(`${name} smoke test failed: ${error.message}\n${stderrText}`.trim());
  } finally {
    await client.close();
    await transport.close();
  }
}

async function main() {
  const results = [];
  for (const [name, args, sampleTool] of servers) {
    results.push(await testServer(name, args, sampleTool));
  }

  console.log(JSON.stringify({ ok: true, results }, null, 2));
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
