import { createCustomer360Server } from "../servers/customer360.js";

const server = createCustomer360Server();
const result = await server._registeredTools.get_account_evidence_bundle.handler(
  { accountId: "redwood-bank" },
  {}
);

console.log(result.content?.[0]?.text ?? "no-text");
