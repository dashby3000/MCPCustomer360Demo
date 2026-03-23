# Demo Playbook

This playbook gives you ready-to-run Customer 360 demo prompts, the sources that should light up, and the answer patterns the synthetic data is designed to support.

## Best demo flow

1. Start with broad portfolio risk
2. Drill into one high-risk account
3. Contrast that with a strong account
4. Shift into employee-pattern questions
5. Finish with roadmap synthesis from voice of customer

## Question 1

Prompt:

`Which accounts are at risk for churn, and why?`

Best MCPs:

- `customer360`
- `gainsight`
- `salesforce`
- `zendesk`
- `usage`
- `gong`

Expected strong answer:

- `Redwood Bank`
  - Health is low and declining
  - Renewal is approaching
  - Sponsor changed
  - Support pain clusters around audit logs, permissions, and exports
  - Calls explicitly tie those gaps to renewal pressure
- `Harbor Hotels`
  - Sharp usage decline
  - Champion loss and weak sponsorship
  - Mobile friction appears across sources
- `Cedar Public Schools`
  - Weak adoption and reactive success coverage
  - Reporting and permissions issues are stalling rollout
- `Vanta Freight`
  - Integration pain shows up in calls, support, and feature feedback
  - Renewal risk is tied to trust in core workflows

## Question 2

Prompt:

`What is the health score of my top 5 accounts, and what should I know about them?`

Best MCPs:

- `customer360`
- `salesforce`
- `gainsight`
- `usage`

Expected strong answer:

- Top ARR accounts should include names like `Redwood Bank`, `Polaris Telecom`, `Alturas Health`, `Nimbus Insurance`, and `Northstar Retail Group`
- The answer should not stop at numeric health
- It should distinguish:
  - healthy expansion accounts like `Alturas Health` and `Northstar Retail Group`
  - stable lighthouse accounts like `Nimbus Insurance`
  - misleading high-ARR risk like `Redwood Bank`

## Question 3

Prompt:

`What are my best reps, CSMs, and support employees doing differently from everyone else?`

Best MCPs:

- `customer360`
- `people`
- `salesforce`
- `gainsight`
- `zendesk`
- `gong`

Expected strong answer:

- Best reps:
  - `Maya Chen`
  - `Priya Shah`
  - fast follow-up
  - stronger multi-threading
  - tighter next-step discipline
- Best CSMs:
  - `Olivia Grant`
  - `Serena Patel`
  - earlier success plans
  - stronger QBR cadence
  - better executive alignment
- Best support:
  - `Ava Nguyen`
  - `Daniel Cho`
  - faster responses
  - better root-cause documentation
  - stronger translation of issues back to product and CS

## Question 4

Prompt:

`What do my best customers have in common?`

Best MCPs:

- `customer360`
- `usage`
- `gainsight`
- `salesforce`
- `gong`

Expected strong answer:

- Common anchors should include accounts like `Alturas Health`, `Oakwell Capital`, `Meridian BioLabs`, and `Northstar Retail Group`
- Shared traits:
  - broad adoption
  - executive sponsor engagement
  - strong champion stability
  - lower-severity support burden
  - product requests framed as expansion levers, not rescue asks
- Calls should show leaders engaged in the workflow rather than delegating everything to admins

## Question 5

Prompt:

`What do customers like about the product?`

Best MCPs:

- `customer360`
- `gong`
- `productboard`
- `zendesk`

Expected strong answer:

- recurring positives around:
  - visibility across teams
  - workflow coordination
  - accountability
  - support responsiveness
  - easier handoffs
- the best answers should quote or paraphrase both call language and support sentiment

## Question 6

Prompt:

`Which customers call the most, and are they actually at risk?`

Best MCPs:

- `customer360`
- `gong`
- `zendesk`
- `gainsight`

Expected strong answer:

- `Vanta Freight`, `Harbor Hotels`, `Solstice Media`, `Redwood Bank`, and `Cedar Public Schools` should rank highly
- the nuanced point:
  - high call volume is often correlated with risk
  - but not every high-touch account is a churn case
  - `Solstice Media` is noisy and support-heavy without being the worst account

## Question 7

Prompt:

`Who mentions things they wish they could do in the product?`

Best MCPs:

- `customer360`
- `gong`
- `productboard`
- `zendesk`

Expected strong answer:

- customers should repeatedly mention:
  - better role-based permissions
  - better reporting and exports
  - deeper audit logs
  - better integrations
  - mobile improvements
  - workflow automation
- the answer should connect spoken requests in calls to formal Productboard requests and recurring support themes

## Question 8

Prompt:

`What tangents do our reps go on during calls? What tangents do our customers go on?`

Best MCPs:

- `gong`
- `people`
- `customer360`

Expected strong answer:

- rep tangents:
  - benchmarks
  - rollout playbooks
  - regulatory comparisons
  - peer-company operating patterns
- customer tangents:
  - staffing pressure
  - seasonal planning
  - board prep
  - audit cycles
  - dispatch realities
- the demo should show that tangents reveal context, buying friction, and change-management constraints

## Question 9

Prompt:

`What features do customers complain about or request the most? Build a roadmap for me.`

Best MCPs:

- `customer360`
- `productboard`
- `gong`
- `zendesk`
- `salesforce`
- `gainsight`

Expected strong answer:

- Top themes should include:
  - role-based permissions
  - reporting and exports
  - integrations
  - mobile experience
  - workflow automation
  - audit logs and compliance
- Best roadmap framing:
  - churn blockers
    - audit logs
    - permissions
    - integration reliability
  - expansion levers
    - mobile experience
    - reporting polish
    - workflow automation
- Strong accounts to mention:
  - `Redwood Bank`
  - `Vanta Freight`
  - `Harbor Hotels`
  - `Northstar Retail Group`
  - `Alturas Health`

## Hero account drill-downs

Use these when you want to make the demo memorable.

- `Redwood Bank`
  - Best for churn-risk and renewal-pressure storytelling
  - Strongest transcript for compliance, permissions, and executive-risk language
- `Vanta Freight`
  - Best for integration pain and support-heavy operational friction
  - Strongest transcript for trust and workflow reliability
- `Alturas Health`
  - Best for strong-customer commonality and expansion-ready language
  - Strongest transcript for positive roadmap signals
- `Northstar Retail Group`
  - Best for roadmap and healthy expansion discussion
  - Strongest transcript for mobile and permissions as scale enablers

## Good sequencing for a live demo

- Start:
  - `Which accounts are at risk for churn, and why?`
- Drill in:
  - `Use customer360 first. Show me everything going on with Redwood Bank`
- Contrast:
  - `Use customer360 first. Now show me what Alturas Health is doing differently`
- Patterns:
  - `What do the best customers and best CSMs have in common?`
- Product finish:
  - `What do customers request most often, and what roadmap should we build?`

## Anti-patterns

Avoid questions that only exercise a single source when you want the platform to look intelligent.

- weaker:
  - `What is Redwood Bank's health score?`
- stronger:
  - `Why is Redwood Bank at risk, and what evidence do we have across systems?`

- weaker:
  - `List feature requests`
- stronger:
  - `Which requests are causing churn risk versus unlocking expansion?`
