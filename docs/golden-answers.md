# Golden Answers

These are example high-quality responses for a few of the most important demo prompts. They are not the only valid answers, but they reflect the main cross-source story embedded in the synthetic dataset.

## 1. Which accounts are at risk for churn, and why?

Strong answer:

`Redwood Bank`, `Harbor Hotels`, `Cedar Public Schools`, and `Vanta Freight` are the clearest churn-risk accounts.

`Redwood Bank` is the most acute case. Customer360 and Gainsight show a low and declining health score, Salesforce shows a renewal coming up soon, and the sponsor recently changed. Zendesk tickets cluster around audit logs, permissions, and reporting friction, and the calls make the commercial risk explicit: their team says those gaps are now part of the renewal conversation.

`Harbor Hotels` has a different but equally serious pattern. Usage is falling sharply, the original champion is gone, sponsorship is weak, and both support and call transcripts show repeated frustration with the mobile experience and rollout drag at the property level.

`Cedar Public Schools` looks like a stalled rollout. The account is not just low on adoption, it is blocked by reporting, permissions, and automation setup problems, with reactive customer-success coverage instead of a strong recovery motion.

`Vanta Freight` is the trust-risk account. Support volume is high, calls repeatedly return to unreliable integrations, and the customer explicitly says workflow trust is breaking down when dispatch teams have to build manual safety nets outside the platform.

## 2. Show me everything going on with Redwood Bank.

Strong answer:

`Redwood Bank` is a high-ARR, high-risk renewal account with evidence of risk across every major source. Customer360 is the fastest way to confirm the core facts: high risk, health score 47, renewal in 99 days, mixed champion status, changed sponsor, 14 total tickets, 3 sev1 tickets, 7 calls, and declining usage.

In Salesforce, it is a large enterprise account with renewal pressure and a shaky commercial outlook. Gainsight shows a low health score, a sharp negative trend, open CTAs, and sponsor instability after an internal reorg.

In Zendesk, the ticket pattern is not random. The account keeps escalating around audit logs, role-based permissions, and reporting exports. Those are not cosmetic asks; they tie directly to how the bank operates under compliance scrutiny.

The Gong-style calls are the clearest signal. The champion says the team still sees value, but the sponsor and admin both frame the issue as operational trust. They explicitly connect deeper audit logs and more granular permissions to whether they can continue rollout and keep the renewal conversation constructive.

Usage confirms the story. Active-seat percentage has declined steadily over time, which means this is not just a loud customer with healthy adoption underneath. The commercial, product, support, and behavioral signals all point in the same direction.

## 3. What do my best customers have in common?

Strong answer:

The strongest customers are accounts like `Alturas Health`, `Oakwell Capital`, `Meridian BioLabs`, and `Northstar Retail Group`.

Across sources, they share a few repeatable traits. First, adoption is broad rather than concentrated in one admin or one team. Second, executive sponsors are engaged and stable. Third, their feature requests sound like expansion levers instead of rescue asks.

`Alturas Health` is a good example. The account is healthy, the rollout is broad, and even their product feedback is framed positively: better exports would help leaders move faster, not fix a broken deployment. `Northstar Retail Group` shows the same pattern. They are asking for mobile and permissions improvements because they want to scale to more stores, not because they distrust the platform.

The calls also reveal something important: in the best customers, leaders participate directly in the workflow conversation. They do not push the whole relationship down to a single admin. That same pattern lines up with stronger health scores, better usage, and better expansion posture.

## 4. What are my best reps, CSMs, and support employees doing differently from everyone else?

Strong answer:

The top performers are not just “better” in the abstract; they are more disciplined in a few specific ways.

For sales, `Maya Chen` and `Priya Shah` stand out because they follow up quickly, multi-thread accounts earlier, and tie the deal to business outcomes instead of relying only on relationship energy. Their books also contain more healthy or expansion-ready accounts.

For customer success, `Olivia Grant` and `Serena Patel` stand out because they build success plans early, maintain stronger QBR cadence, and keep executive sponsors involved. The difference is visible in the portfolio: their accounts tend to have better health, clearer next steps, and fewer “reactive only” recovery situations.

For support, `Ava Nguyen` and `Daniel Cho` are differentiated by speed plus quality. They respond quickly, but they also document root causes well and translate issues back to product and CS in a way that helps the rest of the account team act.

The broader pattern is that top employees reduce ambiguity. They leave clearer next steps, capture better signal, and make it easier for the organization to respond before friction turns into churn risk.

## 5. What features do customers complain about or request the most? Build a roadmap for me.

Strong answer:

The strongest roadmap themes are `role-based permissions`, `reporting and exports`, `integrations`, `mobile experience`, `workflow automation`, and `audit logs and compliance`.

The best way to prioritize them is to separate churn blockers from expansion levers.

The churn blockers are `audit logs`, `permissions`, and `integration reliability`. Those themes show up in risky accounts like `Redwood Bank`, `Vanta Freight`, `Harbor Hotels`, and `Cedar Public Schools`, and they are tied directly to renewal pressure, support escalation, and falling trust.

The expansion levers are `mobile experience`, `reporting polish`, and `workflow automation`. Those show up in healthier accounts like `Northstar Retail Group` and `Alturas Health`, where customers already see value and are asking for improvements that would let them broaden usage.

A strong roadmap hypothesis would be:

1. Improve audit logs and compliance workflows.
2. Ship more practical role-based permissions and templates.
3. Stabilize and deepen key integrations.
4. Improve mobile approval speed and frontline usability.
5. Expand no-code workflow automation and export flexibility.

That roadmap balances defensive retention work with the features most likely to unlock broader adoption in healthy accounts.
