import fs from "node:fs/promises";
import path from "node:path";
import { demoCompany } from "../data/demo-company.js";

const root = process.cwd();
const exportsDir = path.join(root, "exports");

async function ensureDir(target) {
  await fs.mkdir(target, { recursive: true });
}

async function writeJson(relativePath, value) {
  const outputPath = path.join(exportsDir, relativePath);
  await ensureDir(path.dirname(outputPath));
  await fs.writeFile(outputPath, JSON.stringify(value, null, 2));
}

async function main() {
  await ensureDir(exportsDir);

  await writeJson("master/demo-company.json", demoCompany);
  await writeJson("salesforce/accounts.json", demoCompany.salesforceAccounts);
  await writeJson("salesforce/opportunities.json", demoCompany.opportunities);
  await writeJson("gainsight/health-profiles.json", demoCompany.healthProfiles);
  await writeJson("zendesk/tickets.json", demoCompany.tickets);
  await writeJson("productboard/feature-requests.json", demoCompany.featureRequests);
  await writeJson("productboard/roadmap-summary.json", demoCompany.roadmapSummary);
  await writeJson("gong/calls.json", demoCompany.calls);
  await writeJson(
    "gong/transcripts.json",
    demoCompany.calls.map((call) => ({
      callId: call.callId,
      accountId: call.accountId,
      accountName: call.accountName,
      date: call.date,
      transcript: call.transcript,
      transcriptSegments: call.transcriptSegments
    }))
  );
  await writeJson("usage/usage-snapshots.json", demoCompany.usageSnapshots);
  await writeJson("people/employees.json", demoCompany.employees);
  await writeJson("people/benchmarks.json", demoCompany.peopleBenchmarks);

  for (const account of demoCompany.account360) {
    await writeJson(`account-360/${account.accountId}.json`, account);
  }

  console.log(`Wrote synthetic demo data exports to ${exportsDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
