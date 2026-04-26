# Lec 6: Customer Discovery — The Art of Asking the Right Questions

*February 6, 2025*

> Build-measure-learn only works if you know what you're measuring. Customer discovery is how you figure that out before you burn your runway.

## The Big Picture

Most engineering founders build products they would want to use. That's a great starting point and a terrible ending point. The gap between "I would use this" and "enough people will pay for this to build a business" is exactly what customer discovery is designed to close.

This lecture covers the frameworks from Harvard's *Customer Discovery and Validation for Entrepreneurs* — a toolkit for figuring out whether your idea has a market before you've committed three years of your life to it.

---

## 3 Facts That Hit Different

- **Lead users are already solving the problem themselves** — with duct tape, workarounds, and hacked-together tools. Finding these people is gold. They've already validated that the problem is painful enough to spend time on, and their DIY solutions tell you exactly what features matter.

- **Focus groups are better at *disproving* demand than proving it.** Participants tend to say "yes" to hypothetical product ideas to be polite. The real signal comes when you ask them to pre-order or commit in writing. A Letter of Intent (LOI) from a potential customer is worth more than a hundred "I'd definitely buy that" responses.

- **Conjoint analysis** — a quantitative method where customers make explicit trade-offs between product configurations — produces hard data on willingness to pay and feature priority. Unlike surveys, it forces real choices: "Would you pay $199 for Feature A, or $99 without it?" That trade-off reveals true preference, not stated preference.

---

## Q&A

**Q: What do you actually need to learn from a potential customer?**

Five things:
1. **What problem do they have?** (Don't assume — listen)
2. **Do they know they have it?** (If not, you have an education problem)
3. **What are they using now?** (Your real competition is the status quo)
4. **How do they discover and buy solutions?** (Your go-to-market is hidden here)
5. **Will they pay?** (And how much — this is non-negotiable to learn early)

The ordering matters. If you skip to question 5 before you've answered 1–4, you'll get garbage data.

Question 3 deserves more depth. Understanding the status quo means mapping the **perceived losses** a customer would face by switching from it. These losses are: direct monetary cost, time and learning-curve investment, uncertainty that the new solution actually works, brand loyalty to an existing vendor, psychological affinity with familiar tools, and network viability (whether colleagues, partners, and integrations support the new thing). Customers don't just need a better product — they need a product good enough to overcome the aggregate of these losses. Knowing which losses are highest for your target segment shapes how you price (offset switching cost with a lower entry price), how you onboard (invest in a concierge setup to neutralize the learning curve), and what proof points you lead with in the pitch.

**Q: Who are "lead users" and why should you find them first?**

Lead users are early adopters who face the problem you're solving more intensely than average users. They've often built their own partial solutions. They have a budget or authority to adopt something better. And critically — they're *willing to share feedback* because they actually want the problem solved.

Geoffrey Moore would call these your first beachhead. Win them completely before thinking about the mainstream. Lead users give you the highest-signal feedback and often become your earliest evangelists.

**Q: B2B or B2C — does customer discovery work the same way?**

Not quite. In **B2C**, you're usually dealing with one or two decision-makers (the buyer and the user, often the same person). The path from awareness to purchase follows a Hierarchy of Effects: Unaware → Aware → Trial → Repeat.

In **B2B**, there's a full **Buying Center** with distinct roles: Initiator, Gatekeeper, Influencer, Decider, Purchaser, User. Getting to the Decider without understanding who the Gatekeeper is will kill your deal. Enterprise sales is an exercise in organizational mapping as much as product selling.

---

## My Take

Customer discovery is the part of entrepreneurship that feels most like doing science correctly. You form a hypothesis ("this customer segment has this problem"), design an experiment (customer interview, LOI, MVP), and update your beliefs based on evidence.

The cognitive biases from the Lean Startup reading apply directly here: **optimism bias** makes you interpret weak signals as strong ones; **confirmation bias** makes you remember the customer who said "yes" and forget the five who hesitated. The fix is the same as it is in good research: pre-register your hypotheses, look for disconfirming evidence, and treat a customer who tells you "no" as more valuable than one who nods politely.

One methodological note on conjoint analysis: when testing price sensitivity, **never present multiple price options to the same respondent in a list** (e.g., "A: $50, B: $100, C: $150"). People reliably choose the middle option — it's a psychological anchor artifact, not a demand signal. Instead, vary price only when at least one other attribute varies, and test price points across different respondents with matched demographic and business profiles. Then run a sensitivity test (p < 0.05) to understand which attributes actually move willingness to pay. Stated preferences are cheap; revealed trade-offs are expensive to collect but are the only data worth building strategy on.

On AI-assisted discovery: LLM-based simulation tools (such as SimUser for mobile usability and USimAgent for search behavior) can generate usability feedback at scale without recruiting real users, covering roughly 60–80% of basic signal in early-stage prototyping. This is genuinely useful for moving fast. But AI simulation consistently misses the qualitative depth that drives real insight — the frustrated pause, the unexpected workaround, the thing the user does that no one on your team predicted. Use AI to iterate quickly; use real interviews to iterate correctly.

In my own experience: the hardest part isn't asking questions — it's resisting the urge to pitch while you're supposed to be listening. The discovery interview is not a sales meeting. The moment you start selling, you stop learning.
