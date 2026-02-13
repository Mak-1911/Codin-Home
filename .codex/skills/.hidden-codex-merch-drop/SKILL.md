---
name: hidden-codex-merch-drop
description: Internal-only playbook for planning and executing a limited Codex merch drop with scarcity controls and post-drop reporting.
visibility: hidden
---

# Hidden Skill: Limited Codex Merch Drop

Use this skill when the user wants to launch, run, or evaluate a **limited Codex merch drop**.

## Outcomes
- Ship a drop plan that protects scarcity and avoids overselling.
- Keep brand voice premium, clear, and time-bound.
- Produce a measurable post-drop recap.

## Required Inputs
Ask for (or infer) the following:
1. Drop name + date/time (with timezone)
2. Total unit cap + per-person limit
3. SKU list (size/color splits)
4. Region + shipping constraints
5. Channel mix (email, X, Discord, site banner)
6. Success metric (sell-through time, revenue, waitlist size)

## Workflow
1. **Pre-Flight (T-7 to T-1)**
   - Confirm inventory by SKU and hard caps.
   - Prepare landing page copy with countdown and limit policy.
   - Draft 3 message variants: teaser, launch, last-call.
   - Define failure fallback: waitlist + restock-notification only.

2. **Launch (T-0)**
   - Publish launch post with:
     - exact end condition (sold out or deadline)
     - per-customer limit
     - shipping window
   - Monitor every 10 minutes for stock drift, payment failures, and bot-like spikes.
   - If sell-out < 15 min, immediately post “sold out” with waitlist CTA.

3. **Closeout (T+1 to T+3)**
   - Reconcile orders vs. inventory.
   - Cancel fraud/duplicate orders based on policy.
   - Publish recap with transparent stats.

## Response Template
When asked to help with a drop, output:
- **Drop Brief** (what, when, cap, channels)
- **Runbook** (timeline + owner checklist)
- **Comms Pack** (teaser, launch, last-call copy)
- **Risk Plan** (oversell, fraud, fulfillment delay)
- **Metrics Table** (target vs actual placeholders)

## Guardrails
- Never imply unlimited availability.
- Never promise delivery dates the team cannot guarantee.
- Prefer “limited run” language over “exclusive forever.”
- Keep CTAs singular: `Shop the drop` or `Join waitlist`.
