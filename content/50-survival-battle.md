---
id: survival-battle
title: Survival Battle
category: solo
summary: Six 4-hour rounds a day against 12 to 20 players your size. Clear the stage rewards for Survival Medals, and spend on the round whose theme matches the Alliance Duel day so one burn scores twice.
tags: survival battle, survival medals, stage rewards, themes, speedups, alliance duel, brackets
updated: 2026-09-13
---

```kma-event
{
  "kind": "Personal event",
  "icon": "solo",
  "art": "img/shots/screenshot-production.jpg",
  "headline": "Every 4 hours a new theme. Spend on the **matching round** and your items score here and in the Alliance Duel.",
  "facts": [
    ["Opens", "Sanctuary 7 · from server day 2"],
    ["When", "Every day, 6 rounds"],
    ["Duration", "4 hours per round"],
    ["Who", "12 to 20 players of similar Sanctuary level"]
  ],
  "rewards": ["UR and SSR Hero Omni Shards", "Recruit Tickets", "Diamonds", "Level Supplies", "Curio Chests"]
}
```

Survival Battle never stops. It runs every day for the rest of the game, and it pays some of the easiest Omni Shards you will ever get. Nobody wins it by working harder. You win it by **timing**: holding speedups, stamina and recruits until the round that counts them, and lining that round up with the Alliance Duel day.

## How it works

The day is split into **six rounds of 4 hours**. Each round has one theme, and only that theme's actions score. A construction speedup used during a Train round earns nothing here. The game's own quiz confirms the 4-hour length.

```kma-tiles
{
  "tiles": [
    ["6", "rounds a day", "each with its own theme"],
    ["4 h", "per round", "a new theme starts when the timer ends"],
    ["12 to 20", "players per group", "matched by Sanctuary level"],
    ["3", "daily chests", "at 2, 8 and 18 Survival Medals"]
  ]
}
```

```kma-steps
{
  "title": "One round, start to finish",
  "steps": [
    { "label": "Check the theme", "text": "Open the event and read the current theme and the timer. Plan your spending around what is live **now**." },
    { "label": "Score points", "text": "Only the current theme's actions count. Diamond packs count in every theme." },
    { "label": "Claim stage rewards", "text": "Each round has **4 stage rewards**. Claim each one as you pass its points line." },
    { "label": "Collect medals", "text": "Stage rewards also give **Survival Medals**. Medals from all six rounds add up across the day." },
    { "label": "Open daily chests", "text": "Chests open at **2, 8 and 18 medals**, once per day. Rank rewards for the round arrive separately." }
  ]
}
```

### What scores in each theme

| Theme | Action | Points |
|---|---|---|
| Build Territory | 1 minute of construction speedup | 10 |
| Build Territory | +1 Building Power | 1 |
| Train Soldiers | 1 minute of training speedup | 10 |
| Train Soldiers | Train 1 level 9 soldier | 28 |
| Research Technology | 1 minute of research speedup | 10 |
| Research Technology | +1 Tech Power | 1 |
| Enhance Raven | Use 1 stamina | 100 |
| Enhance Raven | Use 10 Raven Fruit | 1 |
| Enhance Heroes | Recruit a hero once | 400 |
| Enhance Heroes | Use 1,950 Antitoxin | 1 |
| Every theme | Buy a pack, per diamond in it | 30 |

The biggest single actions are a hero recruit (400) and a point of stamina (100). Speedups look small, but they score in three of the five themes.

### The theme calendar

The themes rotate on a 7-day cycle. Each theme shows up eight or nine times a week.

| Day | Round 1 | Round 2 | Round 3 | Round 4 | Round 5 | Round 6 |
|---|---|---|---|---|---|---|
| 1 | Build | Train | Research | Raven | Heroes | Build |
| 2 | Heroes | Build | Train | Research | Raven | Heroes |
| 3 | Build | Train | Research | Raven | Heroes | Build |
| 4 | Train | Research | Raven | Heroes | Build | Train |
| 5 | Research | Raven | Heroes | Build | Train | Research |
| 6 | Raven | Heroes | Build | Train | Research | Raven |
| 7 | Heroes | Build | Train | Research | Raven | Heroes |

> **Unverified:** this calendar comes from one guide site, and no source says which weekday is "Day 1" on your server. Trust the theme and timer shown in the event over this table.

## Rewards

Each round has four stage rewards. One in-game screenshot, published by a guide site, shows the lines below. Yours may be different if the lines scale with Sanctuary level.

```kma-bars
{
  "title": "Stage reward lines in one round",
  "unit": "points",
  "rows": [
    ["Phase 1", 3750, "1 medal · 2 SR Grain and Timber supplies"],
    ["Phase 2", 7500, "1 medal · 3 of each supply"],
    ["Phase 3", 12750, "2 medals · 4 of each supply"],
    ["Phase 4", 18000, "2 medals · 7 of each supply"]
  ],
  "highlight": "Phase 4",
  "note": "Values read from one in-game screenshot on a guide site. The medal item in the first slot is not labelled there, so the medal counts are a best reading. Each phase also pays a badge-style item and Herb supplies."
}
```

Medals from every round add up toward three **daily chests**. If each full round gives 6 medals, three full rounds reach the gold chest.

| Medals | Chest | Contents (from in-game screenshots) |
|---|---|---|
| 2 | Blue | 2 SSR Hero Omni Shards, 1 Recruit Ticket, 50 Diamonds |
| 8 | Purple | 5 SSR Hero Omni Shards, 3 Recruit Tickets, 100 Diamonds |
| 18 | Gold | 2 UR Hero Omni Shards, 6 Recruit Tickets, 2 × 100 Diamonds |

Each round also ranks your group. The rewards are the same in every theme:

| Place | Reward |
|---|---|
| 1 | UR Hero Omni Shard, SSR Curio Chest, 24 SR Grain Level Supplies |
| 2 | SSR Curio Chest, 18 SR Grain and 18 SR Timber Level Supplies |
| 3 | SR Curio Chest, 12 SR Grain and 12 SR Timber Level Supplies |
| 4 to 5 | 6 SR Grain, Timber and Herb Level Supplies |
| 6 to 20 | 3 SR Grain, Timber and Herb Level Supplies |

A first place also adds **2,200 Kingdom Points** during [Kingdom War](#/kingdom-war) (one guide site).

## The KMA plan: stack it on the Duel

Survival Battle and the [Alliance Duel](#/alliance-duel) run at the same time. Most Duel days have a matching Survival theme. If you spend inside that round, the **same item scores in both events**. Spend outside it and you only get the Duel points.

```kma-map
{
  "title": "Which Survival round to wait for on each Duel day",
  "w": 640, "h": 320,
  "nodes": [
    { "id": "mon", "label": "Mon: Raven", "x": 60, "y": 70, "kind": "base", "short": "D1" },
    { "id": "tue", "label": "Tue: Construction", "x": 170, "y": 70, "kind": "base", "short": "D2" },
    { "id": "wed", "label": "Wed: Tech", "x": 280, "y": 70, "kind": "base", "short": "D3" },
    { "id": "thu", "label": "Thu: Hero", "x": 390, "y": 70, "kind": "base", "short": "D4" },
    { "id": "fri", "label": "Fri: Preparation", "x": 500, "y": 70, "kind": "base", "short": "D5" },
    { "id": "sat", "label": "Sat: Raid", "x": 590, "y": 190, "kind": "node", "short": "D6" },
    { "id": "rav", "label": "Enhance Raven", "sub": "stamina", "x": 60, "y": 240, "kind": "safe", "short": "SB" },
    { "id": "bld", "label": "Build Territory", "sub": "construction", "x": 170, "y": 240, "kind": "safe", "short": "SB" },
    { "id": "res", "label": "Research Tech", "sub": "research", "x": 280, "y": 240, "kind": "safe", "short": "SB" },
    { "id": "her", "label": "Enhance Heroes", "sub": "recruits", "x": 390, "y": 240, "kind": "safe", "short": "SB" },
    { "id": "trn", "label": "Train Soldiers", "sub": "training", "x": 500, "y": 240, "kind": "safe", "short": "SB" }
  ],
  "links": [["mon","rav"],["tue","bld"],["wed","res"],["thu","her"],["fri","trn"],["sat","trn","","dashed"]],
  "legend": [["base","Alliance Duel day"],["safe","Matching Survival Battle theme"],["node","No clean match"]],
  "caption": "Saturday scores any speedup in the Duel, so burn each speedup type in its own Survival round (training in Train, research in Research, construction in Build)."
}
```

| Duel day | Spend in this round | Duel points | Survival points |
|---|---|---|---|
| Mon, Raven | Enhance Raven | 150 per stamina | 100 per stamina |
| Tue, Construction | Build Territory | 50 per speedup minute, 10 per Building Power | 10 per minute, 1 per Power |
| Wed, Tech | Research Technology | 50 per speedup minute, 10 per Tech Power | 10 per minute, 1 per Power |
| Thu, Hero | Enhance Heroes | 1,500 per recruit | 400 per recruit |
| Fri, Preparation | Train Soldiers | 50 per speedup minute, 100 per level 9 soldier | 10 per minute, 28 per level 9 soldier |

> **KMA:** The recommended alliance habit is simple. On each Duel day, check when the matching Survival theme is live and do your big spending inside that 4-hour window. If the window lands while you sleep, spend on the Duel anyway. **The Duel is worth more to the alliance**; Survival Battle is the bonus.

Duel days roll at **00:00 server time (UTC-2)**, not your midnight. See [Timezones](#/time-zones).

```kma-dodont
{
  "do": [
    "Look at the **current theme and timer** before you tap any speedup.",
    "Hold hero recruits for an Enhance Heroes round, ideally on Duel day 4.",
    "Claim all 4 stage rewards in as many rounds as you can. Medals decide the daily chests.",
    "Finish builds and research early, then tap the completion hammer inside the matching round.",
    "Keep stamina for an Enhance Raven round on Monday."
  ],
  "dont": [
    "Burn a whole stack of speedups in the wrong theme. It scores zero here.",
    "Chase first place with diamond packs. 30 points a diamond is the worst rate in the event.",
    "Skip the Duel just to wait for a Survival round. The Duel pays the alliance.",
    "Assume Day 1 of the calendar is Monday. Check the event screen."
  ]
}
```

## Quick answers

**Who am I competing against?** A group of 12 to 20 players with a similar Sanctuary level, not the whole server.

**Why did my speedups score nothing?** The live theme did not match. Build Territory counts only construction speedups, Research only research speedups, Train only training speedups.

**Is it worth playing if I cannot rank?** Yes. The stage rewards and the three daily chests do not depend on rank, and the gold chest alone pays 2 UR Omni Shards.

**Does it ever end?** No. It is a daily event for the life of the server, so a missed round is only a small loss.

Related: [Alliance Duel](#/alliance-duel) · [Duel planner](#/duel-planner) · [Top Healer](#/top-healer) · [Kingdom War](#/kingdom-war)
