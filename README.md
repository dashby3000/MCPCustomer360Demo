# Amaro Demo Data

Synthetic Customer 360 demo data and mock MCP servers for a fictional Amaro customer base.

This repo gives you:

- a coherent synthetic company universe with 15 accounts
- separate MCPs for `salesforce`, `gainsight`, `zendesk`, `productboard`, `gong`, `usage`, and `people`
- separate MCPs for `salesforce`, `gainsight`, `zendesk`, `productboard`, `gong`, `usage`, `people`, and `customer360`
- exported JSON snapshots for each source
- richer synthetic call transcripts, including hero-account examples
- demo prompts, golden answers, and rehearsal docs
- both `stdio` and Streamable HTTP support

## What This Supports

The dataset is designed to answer questions like:

- Which accounts are at risk for churn?
- What is the health score of my top accounts?
- What do the best reps, CSMs, and support agents do differently?
- What do the best customers have in common?
- What do customers like about the product?
- Which customers call the most?
- Who keeps mentioning things they wish they could do?
- What tangents do reps and customers go on during calls?
- What features are requested most often, and what roadmap should we build?

## Quick Start

From `/Users/dashby/Workarea/AmaroDemoData`:

```bash
npm install
npm run export:data
npm run smoke
npm run smoke:http
```

What those do:

- `npm run export:data`
  - writes the synthetic dataset into `/Users/dashby/Workarea/AmaroDemoData/exports`
- `npm run smoke`
  - verifies all MCPs over `stdio`
- `npm run smoke:http`
  - verifies all MCPs over Streamable HTTP

## Data Included

The synthetic environment models one fictional B2B SaaS company selling an operations platform to a portfolio of 15 customers.

Each account has a consistent story across:

- commercial truth
- customer health
- support behavior
- feature feedback
- call summaries and full synthetic transcripts
- product usage trends
- employee ownership and performance

## Account Patterns

The data intentionally includes:

- high-risk accounts with declining health, renewal pressure, support friction, and negative transcript signals
- healthy expansion accounts whose requests sound like scale enablers rather than rescue asks
- support-heavy accounts that are noisy but not necessarily churn risks
- recurring roadmap themes across calls, support, and Productboard

The main roadmap themes are:

- role-based permissions
- reporting and exports
- audit logs and compliance
- workflow automation
- integrations
- mobile experience

## Hero Accounts

These are the best accounts to use in live demos:

- `Redwood Bank`
  - best for churn-risk and renewal-pressure storytelling
- `Vanta Freight`
  - best for integration pain and support-heavy operational friction
- `Alturas Health`
  - best for healthy-customer and expansion-ready behavior
- `Northstar Retail Group`
  - best for roadmap and expansion storytelling

See [account-roster.md](/Users/dashby/Workarea/AmaroDemoData/docs/account-roster.md) for the full synthetic portfolio design.

## Running The MCPs

### Stdio

Run any individual MCP over `stdio`:

```bash
npm run server:salesforce
npm run server:gainsight
npm run server:zendesk
npm run server:productboard
npm run server:gong
npm run server:usage
npm run server:people
npm run server:customer360
```

Use [mcp-servers.json](/Users/dashby/Workarea/AmaroDemoData/config/mcp-servers.json) for command-based MCP clients.

### Streamable HTTP

Run all streaming MCPs on one host:

```bash
npm run server:http:all
```

Default endpoints:

- `http://127.0.0.1:4200/salesforce/mcp`
- `http://127.0.0.1:4200/gainsight/mcp`
- `http://127.0.0.1:4200/zendesk/mcp`
- `http://127.0.0.1:4200/productboard/mcp`
- `http://127.0.0.1:4200/gong/mcp`
- `http://127.0.0.1:4200/usage/mcp`
- `http://127.0.0.1:4200/people/mcp`
- `http://127.0.0.1:4200/customer360/mcp`

Run one streaming MCP by itself:

```bash
npm run server:http:salesforce
npm run server:http:gainsight
npm run server:http:zendesk
npm run server:http:productboard
npm run server:http:gong
npm run server:http:usage
npm run server:http:people
npm run server:http:customer360
```

Use [mcp-servers-streaming.json](/Users/dashby/Workarea/AmaroDemoData/config/mcp-servers-streaming.json) for URL-based MCP clients.

## Exported Data

After `npm run export:data`, inspect:

- [demo-company.json](/Users/dashby/Workarea/AmaroDemoData/exports/master/demo-company.json)
- [accounts.json](/Users/dashby/Workarea/AmaroDemoData/exports/salesforce/accounts.json)
- [health-profiles.json](/Users/dashby/Workarea/AmaroDemoData/exports/gainsight/health-profiles.json)
- [tickets.json](/Users/dashby/Workarea/AmaroDemoData/exports/zendesk/tickets.json)
- [feature-requests.json](/Users/dashby/Workarea/AmaroDemoData/exports/productboard/feature-requests.json)
- [calls.json](/Users/dashby/Workarea/AmaroDemoData/exports/gong/calls.json)
- [transcripts.json](/Users/dashby/Workarea/AmaroDemoData/exports/gong/transcripts.json)
- [usage-snapshots.json](/Users/dashby/Workarea/AmaroDemoData/exports/usage/usage-snapshots.json)
- [employees.json](/Users/dashby/Workarea/AmaroDemoData/exports/people/employees.json)

## Demo Docs

These are the most useful files for rehearsal:

- [demo-playbook.md](/Users/dashby/Workarea/AmaroDemoData/docs/demo-playbook.md)
  - suggested live-demo prompts and expected answer patterns
- [demo-questions.txt](/Users/dashby/Workarea/AmaroDemoData/docs/demo-questions.txt)
  - quick copy/paste questions
- [golden-answers.md](/Users/dashby/Workarea/AmaroDemoData/docs/golden-answers.md)
  - example strong answers for key demo prompts
- [rehearsal-checklist.md](/Users/dashby/Workarea/AmaroDemoData/docs/rehearsal-checklist.md)
  - suggested run-of-show and troubleshooting prompts

## Skills

Example demo skills are included here:

- [churn-risk-investigator.md](/Users/dashby/Workarea/AmaroDemoData/skills/churn-risk-investigator.md)
- [customer-pattern-finder.md](/Users/dashby/Workarea/AmaroDemoData/skills/customer-pattern-finder.md)
- [roadmap-builder.md](/Users/dashby/Workarea/AmaroDemoData/skills/roadmap-builder.md)

## Important Source Files

- [demo-company.js](/Users/dashby/Workarea/AmaroDemoData/src/data/demo-company.js)
  - canonical synthetic company generator
- [export-data.js](/Users/dashby/Workarea/AmaroDemoData/src/scripts/export-data.js)
  - writes JSON snapshots
- [smoke-test.js](/Users/dashby/Workarea/AmaroDemoData/src/scripts/smoke-test.js)
  - verifies `stdio` MCPs
- [smoke-test-http.js](/Users/dashby/Workarea/AmaroDemoData/src/scripts/smoke-test-http.js)
  - verifies Streamable HTTP MCPs
- [serve-streaming.js](/Users/dashby/Workarea/AmaroDemoData/src/scripts/serve-streaming.js)
  - combined Streamable HTTP host

## Suggested Live Demo Path

If you want a simple run-of-show:

1. Ask: `Which accounts are at risk for churn, and why?`
2. Drill into: `Show me everything going on with Redwood Bank.`
3. Contrast with: `Now show me what Alturas Health is doing differently.`
4. Ask: `What do my best reps, CSMs, and support employees do differently from everyone else?`
5. Finish with: `What features do customers complain about or request the most? Build a roadmap for me.`
