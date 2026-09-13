---
id: spending-vip
title: Spending and VIP
category: codes
summary: What is worth real money and in what order, what to never buy, how VIP Level and VIP Status differ, the verified VIP thresholds and perks, and how free players should spend diamonds.
tags: spending, packs, VIP, VIP status, diamonds, monthly pass, development contract, build queue, era covenant, free to play
updated: 2026-09-13
---

```kma-event
{
  "kind": "Spending guide",
  "icon": "star",
  "headline": "Nobody in KMA has to spend. If you do, buy **permanent** things first and let VIP stop at **5**.",
  "facts": [
    ["Cost", "About 100 diamonds per $1, no bulk discount"],
    ["Format", "VIP Level is permanent; VIP Status runs on a timer"],
    ["Needs", "VIP 5 = 11,000 VIP points"],
    ["Who", "Free players and spenders alike"]
  ],
  "rewards": ["Build queues", "Monthly pass", "VIP 5", "Development Contract"]
}
```

This page exists so that anyone who spends gets the most out of it, and so free players know where their diamonds should go. The rule that decides almost everything: **things that keep working every day** (a build queue, a pass bonus, VIP Status) beat things you use once (speedups, resource packs).

## How the money works

```kma-tiles
{
  "tiles": [
    ["100", "diamonds per $1", "same rate at every price; first purchase doubles"],
    ["1,195", "of 1,446 bundles", "contain the full diamond value of their price, plus goods"],
    ["398", "diamonds per Recruit Ticket", "19,900 for a guaranteed UR"],
    ["25x", "Development Contract return", "50,000 diamonds for $19.99"]
  ]
}
```

A paid bundle almost always holds as many diamonds as the plain diamond pack at the same price, and the goods come on top. So **plain diamond packs are almost always the worst buy**. Compare bundles by what else is inside.

## The order for a low spender ($5 to $30 a month)

```kma-steps
{
  "title": "Buy in this order",
  "steps": [
    { "label": "2nd build queue", "when": "$1.99", "text": "Permanent. Comes with 200 diamonds, 10 five-minute speedups, VIP points and supplies. The single best purchase in the game." },
    { "label": "Marlena first top-up", "when": "about $1", "text": "The best-value hero purchase in the game." },
    { "label": "Premium Monthly Pass", "when": "$24.99 / 30 days", "text": "An extra squad, +15% gathering, +5% build speed, and 100 diamonds plus 2 Recruit Tickets **every day**." },
    { "label": "Development Contract", "when": "$19.99", "text": "50,000 diamonds as your Sanctuary grows. Only if you will reach Sanctuary 30." },
    { "label": "One UR banner", "text": "Arthur for new accounts, Marlena for established ones. Reach the 50-pull guarantee before switching." },
    { "label": "Event packs", "text": "Only during the Alliance Duel or Survival Battle phase they score in." }
  ],
  "note": "More build queues: the 3rd is $9.99 (1,000 diamonds and 100 speedups inside), the 4th $19.99 (2,000 diamonds, 190 speedups). Both permanent."
}
```

> **Note:** You do **not** buy a second research queue. It comes free with the **2nd Workbench** building at Sanctuary 9.

### What the passes really give

**Premium Monthly Pass ($24.99, 30 days):** a fourth squad that only works while the pass is active, +15% gathering speed, +5% build speed, -5% damage from monsters, and every day 100 diamonds, 2 Recruit Tickets, 100 Stamina and 62 five-minute speedups. Over 30 days that is 3,000 diamonds (the plain pack at that price gives 2,500) and 60 Recruit Tickets. It also adds **two Covert Ops dispatches**, because dispatches are counted two per squad.

**Weekly pass ($4.99, 7 days):** +250 Resistance, +5% march speed, and daily 100 diamonds, 20,000 Lord Specialty XP, 50 Stamina and 80 speedups.

> **Unverified name:** The weekly pass has been listed as the "Weekly Diamond Pass" and under other names. Check the shop label. It is also unclear whether the "monthly card" that VIP data says brings 30 days of VIP Status and 2,500 VIP points is the same product as the Premium Monthly Pass.

### Development Contract payouts

```kma-bars
{
  "title": "Development Contract, diamonds by Sanctuary level",
  "unit": "diamonds",
  "rows": [
    ["Sanctuary 6", 1200], ["Sanctuary 8", 1200], ["Sanctuary 10", 1200],
    ["Sanctuary 12", 1400], ["Sanctuary 14", 1400], ["Sanctuary 16", 1600],
    ["Sanctuary 18", 2000], ["Sanctuary 21", 3000], ["Sanctuary 23", 4000],
    ["Sanctuary 25", 6000], ["Sanctuary 28", 9000], ["Sanctuary 30", 18000]
  ],
  "highlight": "Sanctuary 30",
  "note": "50,000 in total, one contract per account. **27,000** of it arrives at Sanctuary 28 and 30, so it only pays off if you will get there."
}
```

## Never buy

- **Raw resource packs.**
- **VIP points bought with diamonds**, except during rebate windows.
- **Diamond speedups outside events.** Small ones cost the most: a 1-minute speedup works out at 300 diamonds an hour, a 1-week one at 108.
- **Extra arena battles.** Each costs more than the last (100, 200, 300, 400, then 500 diamonds) and the reward stays the same.
- **Spreading money across many heroes.** Scattered shards unlock nobody.
- **Third-party top-up shops or accounts.** Ban risk. Your call, but KMA does not recommend it.

> **Unverified:** Skins. The game's skin data lists bonuses on 36 of 58 skins (for example Hero ATK +5%), but another KMA guide notes skins had no stats before the Era of Revival, and many skins last only 7, 15 or 30 days. Read the bonus and the duration on the item before paying for one.

## VIP

VIP has two layers:

- **VIP Level** is permanent and comes from cumulative VIP points (inside bundles, passes and VIP packs).
- **VIP Status** is time-gated. If Status lapses, the Level stays but **the bonuses switch off**. Status costs **3,000 diamonds for 7 days or 10,000 for 30 days**, with no purchase limit, so 30 days is cheaper than four weeks (12,000).

```kma-bars
{
  "title": "VIP points needed",
  "unit": "VIP points",
  "rows": [
    ["VIP 3", 1050],
    ["VIP 5", 11000, "where most players should stop"],
    ["VIP 8", 55000],
    ["VIP 10", 155000, "first UR fragment in the level gift"],
    ["VIP 12", 550000, "first hero combat stats"]
  ],
  "highlight": "VIP 5",
  "note": "VIP 20 needs **50,000,000** points, about 90 times VIP 12, so it is left off the chart. VIP 11's threshold is not published."
}
```

| VIP | Points | What switches on (bonuses stack upward) |
|---|---|---|
| 1 | 0 | +3% grain output |
| 3 | 1,050 | +8% grain, timber and herb output, +10% build speed, VIP level shown in chat |
| 5 | 11,000 | Auto-dispatch for Covert Operations (disputed, see below), +13% production, +15% build speed, +25% gear forging speed, +5% march speed |
| 8 | 55,000 | Expedition Quick Challenge, +20% production, +30% build, +8% research, +8% march, +5% barracks capacity |
| 11 | not published | Universal UR hero fragments in the Diamond Shop (298 diamonds each, limit 10) |
| 12 | 550,000 | **First combat stats**: +4% hero HP, ATK and DEF; +10% healing speed, +18% research, +50% build, +13% march, +25% production, Covert Ops super mode |
| 20 | 50,000,000 | +13% hero HP, ATK and DEF, +20% march, +25% research, +15% training, +30% healing, +50% gear forging, +10% barracks capacity |

> **Unverified:** Two sets of game data disagree on Covert Ops **Auto Dispatch**. The VIP perk table lists it from **VIP 5**. The Quiz of Wisdom's own question data says Auto Dispatch unlocks at **VIP 10** and Super Mode at **VIP 12**. Both agree on Super Mode at 12. Open the VIP screen in-game and read the level where Auto Dispatch appears before you buy VIP points for it.

**VIP 5 is where everyone should stop** unless they are a serious spender: it is the cheapest level that carries most of the production and build bonus (+13% production, +15% build speed), and it may also bring Covert Ops auto-dispatch (see the callout above). Combat percentages only start at VIP 12, which costs 50 times as many points. Each VIP level also pays a one-time gift; across all 20 levels those gifts hold 27 UR, 12 SSR and 3 SR universal hero fragments, and the first UR fragment is at VIP 10.

VIP Shop priorities: Raven Essence, Universal Curio Shards, UR Hero Omni Shards, Direct Relocate.

## Free-to-play diamond order

1. Keep **VIP Status** active.
2. VIP points to level 5.
3. VIP Shop: Raven Essence, Universal Curio Shards, UR Omni Shards.
4. Direct Relocate to get into the alliance core.
5. A 24-hour shield in an emergency (5,000 diamonds; use Alliance Coins when you can).

Skip the rest of the Diamond Shop. **Free diamonds** come from the Quiz of Wisdom (75 to 150 a run plus up to 100 from answer milestones), arena season rewards (lower arenas pay 85 to 1,010 by rank), Thief Leader rallies (20 each), Golden Eggs when alliance members hit Sanctuary milestones, Cheese Trap personal rewards, diamond mines on the world map, Dawn Breakout and Hero Road.

## Era Covenant (the season pass)

Each era is 56 days. The pass has 50 levels and can be finished in about 26 days by doing the 7 daily tasks. See [Era Covenant and the Era of Revival](#/era).

| Track | Recruit Tickets | UR Omni Shards | Diamonds |
|---|---|---|---|
| Free | 4 | 5 | none |
| Pass | 45 | 17 | 2,450 (5 packs of 100, 39 of 50) |
| Large Pass | 70 | 34 | 3,900 (39 packs of 100) |

Recruit Tickets are the headline reward. The free track pays no diamonds.

## The KMA plan

> **KMA:** Spend nothing until you have decided you enjoy the game for months. Then: 2nd build queue, the monthly pass, and VIP Status kept running. Save event packs for the Duel day they score on. Free players keep VIP Status up with diamonds and never spend them on speedups.

```kma-dodont
{
  "do": [
    "Buy **permanent** upgrades first: build queues, then passes.",
    "Keep VIP Status running; a lapsed Status turns all VIP bonuses off.",
    "Finish one UR banner to its 50-pull guarantee before starting another.",
    "Buy the 30-day VIP Status, not four 7-day ones."
  ],
  "dont": [
    "Buy plain diamond packs when a bundle at the same price holds the same diamonds plus goods.",
    "Buy the Development Contract on an account you will not take to Sanctuary 30.",
    "Chase VIP past 5 for combat stats; they start at VIP 12.",
    "Pay for a second research queue. It is a free building at Sanctuary 9."
  ]
}
```

## Quick answers

**Is the monthly pass worth it?** For anyone spending monthly, yes: 3,000 diamonds and 60 Recruit Tickets over 30 days for $24.99, plus a fourth squad and two more Covert Ops dispatches.

**My VIP bonuses vanished. Did I lose my level?** No. Your VIP Status ran out. The level stays; renew Status to switch the bonuses back on.

**What does VIP 5 actually change?** While Status is active: +13% production, +15% build speed, +25% gear forging and +5% march speed. Whether Covert Ops auto-dispatch comes at VIP 5 or VIP 10 is disputed; check the VIP screen.

**I am free-to-play. What is the one thing to buy with diamonds?** VIP Status. Its build speed and production bonuses work on everything you do, every day.

Related: [Resources, Stars and Shields](#/resources) · [Era Covenant and the Era of Revival](#/era) · [Covert Operations and Falcon Quests](#/covert-falcon) · [Hero tier list](#/hero-tier-list)
