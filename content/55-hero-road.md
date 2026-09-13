---
id: hero-road
title: Hero Road
category: solo
summary: A single-squad ladder gated by squad Power, with an alliance-assisted boss at the end of each difficulty. It pays 33,000 Skill Badges and 6,300 diamonds in total, and it follows your hero upgrades rather than leading them.
tags: hero road, boss, skill badges, diamonds, squad power, alliance help
updated: 2026-09-13
---

> **Unverified name:** **Hero Road** appears on one site only, with no player or official corroboration. It may be the same thing as **Hero Growth Tasks**, which is better attested. The milestone values below come from that single source.

```kma-event
{
  "kind": "Personal ladder",
  "icon": "shield",
  "art": "img/shots/screenshot-hero-team.jpg",
  "headline": "One squad climbs, the **alliance helps with the boss**. Your squad Power opens each difficulty.",
  "facts": [
    ["Needs", "Squad Power from 770k (difficulty 1) to 40M (difficulty 11)"],
    ["Fight", "One squad through each difficulty, then a boss"],
    ["Format", "2 boss attempts, 5 free help calls per difficulty"],
    ["Cost", "Free; extra help calls cost diamonds"]
  ],
  "rewards": ["Skill Badges", "Diamonds", "Resources", "Hero XP"]
}
```

Hero Road is a slow, steady ladder. You cannot rush it, because every difficulty is locked behind a **squad Power** requirement. What decides progress is how strong your best squad is, plus whether allies are online to help when you reach a boss. That is why it follows your hero upgrades: you clear new difficulties after you grow, not before.

## How it works

Each difficulty is cleared with **one squad** and ends with a boss. You get **2 attempts** at each boss, and you can call allies for help.

```kma-steps
{
  "title": "Clearing one difficulty",
  "steps": [
    { "label": "Meet the gate", "text": "Your squad Power must reach the difficulty's requirement. Check it with the gate checker below." },
    { "label": "Clear the stages", "text": "Push through with your strongest squad. No help is needed here." },
    { "label": "Call for help", "text": "At the boss, use your **5 free help calls** to bring allies in." },
    { "label": "Hit the boss", "text": "You have **2 attempts**. Boss HP climbs from 60,000 to 1.6 billion." },
    { "label": "Collect", "text": "Clearing pays Skill Badges and diamonds. The boss also drops resources and hero XP." }
  ]
}
```

<div data-widget="gate-check" data-gate="heroroad"></div>

```kma-bars
{
  "title": "Squad Power needed per difficulty",
  "unit": "Power",
  "rows": [
    ["Difficulty 1", 770000], ["Difficulty 2", 2800000], ["Difficulty 3", 6800000], ["Difficulty 4", 8600000],
    ["Difficulty 5", 11600000], ["Difficulty 6", 16400000], ["Difficulty 7", 21500000], ["Difficulty 8", 25500000],
    ["Difficulty 9", 30000000], ["Difficulty 10", 35000000], ["Difficulty 11", 40000000]
  ],
  "highlight": "Difficulty 2",
  "note": "Difficulty 2 is highlighted because it is the steepest jump: from 770,000 to 2.8 million, more than three times the Power."
}
```

### Help calls

| | |
|---|---|
| Boss attempts | 2 per difficulty |
| Free help calls | 5 per difficulty, up to 20 helps in total |
| Extra help calls | 50 diamonds each for the first 5, then 100 each |
| Does more help pay more? | No. The reward is the same however many helps you use |

## Rewards

| Difficulty | Squad Power | Boss HP | Skill Badges | Diamonds |
|---|---|---|---|---|
| 1 | 770k | 60,000 | 500 | 100 |
| 2 | 2.8M | 300,000 | 1,000 | 200 |
| 3 | 6.8M | 2M | 1,500 | 300 |
| 4 | 8.6M | 15M | 2,000 | 400 |
| 5 | 11.6M | 50M | 2,500 | 500 |
| 6 | 16.4M | 100M | 3,000 | 600 |
| 7 | 21.5M | 200M | 3,500 | 700 |
| 8 | 25.5M | 400M | 4,000 | 800 |
| 9 | 30M | 800M | 4,500 | 900 |
| 10 | 35M | 1.2B | 5,000 | 900 |
| 11 | 40M | 1.6B | 5,500 | 900 |

Bosses also drop resources by the million and hero XP. The source text says nine difficulties; its table lists eleven, so two were probably added later.

```kma-tiles
{
  "tiles": [
    ["33,000", "Skill Badges", "all 11 difficulties"],
    ["6,300", "diamonds", "all 11 difficulties"],
    ["2", "boss attempts", "per difficulty"],
    ["5", "free helps", "per difficulty"]
  ]
}
```

Skill Badges are the main prize. For scale, taking **one** skill on a UR or SSR hero to its cap costs 436,700 badges, so Hero Road is a useful top-up, not a solution. See [Hero building](#/hero-building).

## The KMA plan

1. **Grow first, climb second.** When a difficulty's gate is out of reach, stop and upgrade heroes. The gate will open on its own.
2. **Use your strongest mono-faction, tank-heavy squad.** Progress is gated by squad Power, not one hero. See [Squads and Team Comps](#/team-comps).
3. **Save help calls for the boss.** The stages do not need them.
4. **Call when allies are online.** A help call is only as good as the members who answer it.

> **KMA:** When you call for help on a Hero Road boss, say so in alliance chat so members know to answer. Helping each other through bosses is exactly what an active alliance is for.

```kma-dodont
{
  "do": [
    "Check the gate with the checker before you start a new difficulty.",
    "Spend your 5 free help calls on the boss.",
    "Post in alliance chat when you call, so helpers are ready.",
    "Come back after a hero upgrade. New Power often opens the next gate."
  ],
  "dont": [
    "Pay 50 or 100 diamonds for extra helps when a Power bump next week clears it free.",
    "Waste help calls on the stages before the boss.",
    "Expect more reward for more helps. The payout does not change."
  ]
}
```

## Quick answers

**Why can I not start the next difficulty?** Your squad Power is below its gate. The table and the checker above show the number.

**Should I buy extra helps?** Only if a difficulty cannot be cleared any other way. The reward does not grow with more helps, and a Power upgrade later makes it free.

**How much does the whole ladder pay?** 33,000 Skill Badges and 6,300 diamonds, plus boss resources and hero XP.

**Is this the same as Hero Growth Tasks?** The datamine lists them as two separate systems: Growth Tasks count hero stars and pay per track, while Hero Road is a boss ladder. The in-game name is still unconfirmed. See [Trials and Hero Growth Tasks](#/trials-growth).

Related: [Trials and Hero Growth Tasks](#/trials-growth) · [Hero building](#/hero-building) · [Squads and Team Comps](#/team-comps) · [Expedition](#/expedition)
