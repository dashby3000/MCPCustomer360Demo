import {
  createStreamingApp,
  mountStreamableHttpServer
} from "../servers/server-utils.js";
import { createSalesforceServer } from "../servers/salesforce.js";
import { createGainsightServer } from "../servers/gainsight.js";
import { createZendeskServer } from "../servers/zendesk.js";
import { createProductboardServer } from "../servers/productboard.js";
import { createGongServer } from "../servers/gong.js";
import { createUsageServer } from "../servers/usage.js";
import { createPeopleServer } from "../servers/people.js";
import { createCustomer360Server } from "../servers/customer360.js";

const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT || 4200);

const app = createStreamingApp({ host });

const routes = [
  ["/salesforce/mcp", createSalesforceServer],
  ["/gainsight/mcp", createGainsightServer],
  ["/zendesk/mcp", createZendeskServer],
  ["/productboard/mcp", createProductboardServer],
  ["/gong/mcp", createGongServer],
  ["/usage/mcp", createUsageServer],
  ["/people/mcp", createPeopleServer],
  ["/customer360/mcp", createCustomer360Server]
];

for (const [routePath, createServer] of routes) {
  mountStreamableHttpServer(app, routePath, createServer, { sessionMode: "stateful" });
}

app.get("/", (_req, res) => {
  res.json({
    name: "amaro-demo-streaming-mcp-host",
    transport: "streamable-http",
    routes: routes.map(([routePath]) => routePath)
  });
});

app.listen(port, host, (error) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }

  console.log(`Streaming MCP host listening on http://${host}:${port}`);
  for (const [routePath] of routes) {
    console.log(`- http://${host}:${port}${routePath}`);
  }
});
