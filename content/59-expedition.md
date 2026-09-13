---
id: expedition
title: Expedition (Warrior, Ranger, Warlock Arenas)
category: solo
summary: Sixty difficulties across three faction arenas, each opening in turn and refreshing Sunday, Tuesday and Thursday. Start Warrior, never miss a window, and spend medals on the Gearstone deal then UR Hero Omni Shards.
tags: expedition, expedition medals, expedition shop, watchtower, warrior arena, ranger arena, warlock arena, gearstones
updated: 2026-09-13
---

```kma-event
{
  "kind": "Solo mode",
  "icon": "solo",
  "art": "img/shots/screenshot-ruins.jpg",
  "headline": "Three faction arenas, sixty difficulties, and **windows that never come back**. Schedule beats free time here.",
  "facts": [
    ["Opens", "Sanctuary 16, Warrior arena first"],
    ["Where", "The Watchtower"],
    ["When", "Arenas refresh Sunday, Tuesday and Thursday"],
    ["Duration", "Each arena window lasts 48 hours"],
    ["Format", "3 arenas × 20 levels per difficulty, 60 difficulties, each cleared once"]
  ],
  "rewards": ["Expedition Medals", "Gearstone", "UR Hero Omni Shards", "Raven Essence"]
}
```

The Expedition is a long PvE ladder that pays **Expedition Medals**, the only currency for the Expedition Shop. Each level is cleared once, and entry to each difficulty is gated by squad Power. Two things decide how much you get: **how much Power your squad has**, and whether you **show up in every refresh window**, because a missed window is never made up.

## How it works

Every difficulty has three branches, one per faction arena: Warrior, Ranger and Warlock. Each branch is 20 levels. There are 60 difficulties, and enemy troops climb from T3 at the start to T10 from difficulty 40.

The arenas do not open together. You unlock them by clearing the Warrior arena.

```kma-steps
{
  "title": "How the three arenas unlock",
  "steps": [
    { "label": "Sanctuary 16", "text": "The Expedition appears. Only the **Warrior arena** is open, so medals come in at one third of the full rate." },
    { "label": "Warrior difficulty 8", "text": "Clearing it opens the **Ranger arena**." },
    { "label": "Warrior difficulty 12", "text": "Clearing it opens the **Warlock arena**. Now all three branches pay." },
    { "label": "Every window", "when": "Sun, Tue, Thu", "text": "Each arena runs **48 hours** and refreshes three times a week. Push as far as your Power allows before it closes." }
  ],
  "note": "Clear Warrior 8 and 12 as early as you can. Until you do, two thirds of the Expedition's medals are locked away."
}
```

> **Unverified:** Sources agree the windows refresh Sunday, Tuesday and Thursday and that a missed window is lost, but none explains exactly what a refresh resets, given that each level is cleared only once. Sources also do not say whether each arena only accepts, or only rewards, heroes of its own faction. Read the rule text on the arena screen and tell an officer what it says.

### Why you start with Warrior

The three arenas ask for very different Power at the start. The gap closes by difficulty 30, but early on Ranger is three times harder.

```kma-bars
{
  "title": "Squad Power needed for difficulty 1",
  "unit": "Power",
  "rows": [
    ["Warrior", 350938, "opens first"],
    ["Warlock", 355200, "opens after Warrior 12"],
    ["Ranger", 1151340, "opens after Warrior 8"]
  ],
  "highlight": "Warrior",
  "note": "At difficulty 30 the three are within 1M of each other: 16.0M, 16.7M and 16.9M."
}
```

### Early server bonus

On a young server the Expedition buffs two heroes: **Arthur +50% HP** and **Marlena +25% ATK**. It lasts only the server's first two weeks, so it only helps if you reach Sanctuary 16 inside that time.

## Power requirements and medals

Medals are per arena. Clearing the same difficulty in all three arenas pays three times the figure below.

| Difficulty | Warrior | Ranger | Warlock | Enemy tier | Medals per arena |
|---|---|---|---|---|---|
| 1 | 351k | 1.15M | 355k | T3 | 260 |
| 5 | 2.0M | 2.9M | 2.1M | T5 | 1,300 |
| 10 | 5.1M | 5.8M | 5.3M | T6 | 2,600 |
| 20 | 11.1M | 11.8M | 11.6M | T8 | 7,800 |
| 30 | 16.0M | 16.9M | 16.7M | T9 | 13,000 |
| 40 | 21.3M | 22.8M | 22.2M | T10 | 26,000 |
| 50 | 28.0M | 29.4M | 29.1M | T10 | 39,000 |
| 60 | 46.5M | 48.9M | 48.7M | T10 | 41,600 |

<div data-widget="gate-check" data-gate="expedition"></div>

```kma-bars
{
  "title": "Medals for clearing one arena at each difficulty",
  "unit": "medals",
  "rows": [
    ["Difficulty 1", 260],
    ["Difficulty 10", 2600],
    ["Difficulty 20", 7800],
    ["Difficulty 30", 13000],
    ["Difficulty 40", 26000, "enemies reach T10"],
    ["Difficulty 50", 39000],
    ["Difficulty 60", 41600, "needs about 46.5M Power"]
  ],
  "highlight": "Difficulty 40",
  "note": "Medals double between difficulty 30 and 40, while the Power needed rises only about a third. That stretch is where Power investment pays back fastest."
}
```

## Expedition Shop

| Item | Price | Why |
|---|---|---|
| Gearstone ×1,000 | 300 medals, limit 10 | The best rate in the shop, and the whole limit costs only 3,000 medals |
| UR Hero Omni Shards | Not published | Two player shop guides rank these first |
| Expedition Chest | Not published | One player video ranks it second |
| Raven Essence | Not published | Ranked high by a shop guide |
| Universal awakening fragment | 300 medals | Same price as 1,000 Gearstone; lower priority for most |

> **Note:** Sources disagree on the top buy. The datamine calls the Gearstone deal the best value per medal. A player video ("Expedition Shop: hero omni shard #1, expedition chest #2") and a shop guide put UR Hero Omni Shards first. Both can be right: the Gearstone deal is capped at 3,000 medals, so buy it out first and put everything after that into Omni Shards.

## The KMA plan

> **KMA:** Put Sunday, Tuesday and Thursday in your routine and push every open arena as far as your Power allows. Clear Warrior difficulties 8 and 12 early so all three arenas pay. In the shop, buy out the Gearstone deal, then UR Hero Omni Shards.

The Expedition is gated by squad Power, not by one hero. Your strongest **single-faction, tank-heavy** squad does best, because five heroes of one faction add +20% HP, ATK and DEF.

```kma-lineup
{
  "title": "Warrior arena squad",
  "heroes": [
    ["arthur", "Tank", "The anchor, and +50% HP here on a young server."],
    ["daskal", "Tank", "Team-wide shields that scale with DEF keep the squad alive through long fights."],
    ["marlena", "Damage", "Top burst damage, and +25% ATK here on a young server."],
    ["harper", "Support", "All Warriors +16.5% ATK. The best buffer for a Warrior team."],
    ["bella", "Tank", "The strongest SSR tank, and farmable from the Alliance Shop."]
  ],
  "alts": [["zoya", "extra damage, but her faction is disputed; check her card"], ["claire", "farmable Warrior damage"], ["lucius", "filler to keep all five Warrior"]],
  "note": "All five are Warrior for the full +20% faction bonus. For the Ranger and Warlock arenas, build from those factions' heroes in the tier list."
}
```

```kma-dodont
{
  "do": [
    "Check the Expedition every **Sunday, Tuesday and Thursday**.",
    "Clear Warrior difficulty 8 and 12 early to open Ranger and Warlock.",
    "Use your strongest single-faction squad for the +20% bonus.",
    "Buy out the Gearstone deal before anything else in the shop."
  ],
  "dont": [
    "Start with Ranger. Its first difficulty needs three times Warrior's Power.",
    "Skip a window because you are busy. It does not come back.",
    "Mix factions for one favourite hero and lose the faction bonus.",
    "Spend medals on awakening fragments before Gearstone and Omni Shards."
  ]
}
```

## Quick answers

**I am Sanctuary 15. Can I prepare?** Yes. Build Power in one faction's squad now; Warrior difficulty 1 needs about 351k squad Power.

**Why can I not see the Ranger arena?** It opens only after you clear Warrior difficulty 8. Warlock needs Warrior difficulty 12.

**I missed Tuesday. Can I catch up on Thursday?** No. Each window stands alone. Push as far as you can in the next one.

**Where do I find it?** At the Watchtower in your city.

Related: [Daily checklist](#/daily-checklist) · [Team comps](#/team-comps) · [Hero tier list](#/hero-tier-list) · [Every event at a glance](#/events-calendar)
