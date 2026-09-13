---
id: troops
title: Troops and Training
category: city
summary: Troop tiers by Training Grounds level, why the top tier always wins, the four-ground promotion trick, the T10 gate, and how the Infirmary decides what a lost fight costs.
tags: troops, training grounds, T10, promotion, infirmary, healing, leadership, soldier's rest, alliance duel day 5
updated: 2026-09-13
---

Troops are the part of your Power that actually marches. Heroes lead them, the **Training Grounds** decide which tier you can recruit, and the **Infirmary** decides how many you get back after a bad fight. Get those three right and a smaller army beats a bigger one.

## How troops work here

- Troops are **one pool with tiers T1 to T10**. There is no infantry, cavalry and archer split, so there is no troop counter to plan around. Datamined data shows every soldier you can recruit is the same type and differs only by tier.
- **Factions** (Warrior, Ranger, Warlock) and the 20% counter belong to **heroes**, not troops. See [Squads and Team Comps](#/team-comps).
- Each hero's **leadership** decides how many soldiers march with it, up to **490 per hero** at full investment. **Hero level** gives 350 of that, the faction statue up to 100, and research only 20. Levelling heroes is how you march more troops.

```kma-tiles
{
  "tiles": [
    ["10", "troop tiers", "one type, no troop counters"],
    ["490", "soldiers per hero", "350 of it from hero level"],
    ["12x", "Power per minute", "T10 against T1"],
    ["30%", "cost to heal", "of recruiting, in resources and time"]
  ]
}
```

## Tier unlocks

<div data-widget="troop-ladder"></div>

| Training Grounds | Tier | Power per soldier | Training time | Load | Recruit cost (grain and timber each) |
|---|---|---|---|---|---|
| 1 | T1 | 25 | 40 s | 400 | 97 |
| 3 | T2 | 37 | 60 s | 600 | 145 |
| 6 | T3 | 80 | 80 s | 800 | 349 |
| 10 | T4 | 210 | 100 s | 1,000 | 903 |
| 14 | T5 | 412 | 120 s | 1,200 | 1,746 |
| 17 | T6 | 579 | 140 s | 1,400 | 2,464 |
| 20 | T7 | 781 | 160 s | 1,600 | 3,320 |
| 24 | T8 | 1,065 | 180 s | 1,800 | 4,535 |
| 27 | T9 | 1,350 | 200 s | 2,000 | 5,770 |
| 30 | T10 | 1,650 | 220 s | 2,200 | 7,027 |

Times are base values per soldier before research and VIP. **Load** is how much a soldier carries home when gathering.

### Why the top tier always wins

Compare tiers by **Power per minute of training**, not Power per soldier. The resource cost per point of Power is about the same at every tier, but a higher tier packs far more Power into the same queue time and the same place in a march.

```kma-bars
{
  "title": "Power per minute of training, by tier",
  "unit": "Power a minute",
  "rows": [
    ["T1", 38], ["T2", 37], ["T3", 60], ["T4", 126], ["T5", 206],
    ["T6", 248], ["T7", 293], ["T8", 355], ["T9", 405], ["T10", 450]
  ],
  "highlight": "T10",
  "note": "Worked out from the datamined tier table: Power per soldier divided by base training time. Train the highest tier you have."
}
```

### The Training Grounds and the T10 gate

- Opens at **Sanctuary 6**, max level 30. Batch size grows from **33** at level 1 to **371** at level 10, **475** at 20 and **573** at 30, before research and VIP.
- Up to **3** can be built. A fourth comes from the **Extra Training Grounds** node in the Full Development research tree. See [Research](#/research).
- The early levels are cheap and the late ones are not. Level 10 costs about 2.4M resources and half a day of build time and already gives T4. Level 30 alone costs 684M grain, 684M timber, 304M herbs, 69M antitoxin and 77 days.
- **T10 needs three things:** Training Grounds 30, Sanctuary 30, and the one-level **Lv.10 Soldier** research node (194.7M grain, 194.7M timber, 584.4M herbs).

## The promotion trick

<div data-widget="promotion-trick"></div>

You do not have to train your top tier from scratch. You can **promote** lower-tier soldiers into it, and promotion is quicker. A player troop guide lays out the method:

```kma-steps
{
  "title": "The four-ground promotion loop",
  "steps": [
    { "label": "Max one", "text": "Level **one** Training Grounds to your Sanctuary cap. This is the one that promotes." },
    { "label": "Park the rest", "text": "Keep the other Training Grounds at **level 10**, where T4 unlocks cheaply, and train T4 on them nonstop." },
    { "label": "Promote", "text": "Feed the T4 stockpile into the maxed ground and promote to your top tier." },
    { "label": "Bank for Friday", "text": "Hold a stockpile all week and promote on **Alliance Duel day 5**, when training scores." }
  ]
}
```

```kma-bars
{
  "title": "Getting a batch of T9: one player's timings",
  "unit": "hours",
  "rows": [
    ["Train T4, then promote", 26, "10.5 h of T4 plus 16.5 h to promote"],
    ["Train T9 directly", 33, "33 h or more"]
  ],
  "highlight": "Train T4, then promote",
  "note": "From one creator's troop guide, with that player's research and VIP. The saving of about 7 hours a batch is the point; your own hours will differ."
}
```

The batch sizes in the diagram above (455 T4, 712 promoted) include that player's capacity bonuses. At base a level 10 ground trains **371** a batch. Time one batch yourself and use your own numbers.

## Alliance Duel day 5

Training scores by tier, from 20 points per T1 up to **100 per T9 and 110 per T10**. Promoted soldiers count as training the new tier, so a stockpile of low-tier soldiers is a Friday point bank. Speedups score **50 points a minute** on days 5 and 6.

> **Unverified:** guides disagree on whether promoting **one tier at a time** scores more than promoting straight to your top tier, since each step may score as a separate training. Players have been seen doing both. Test with a small batch and compare the points before you commit your stockpile.

## Healing: the Infirmary

The Infirmary catches **severely wounded** soldiers. Anything that does not fit **dies**. Healing costs **30% of recruiting** in both resources and time on every tier: 58 resources instead of 194 for a T1, and 4,216 instead of 14,054 for a T10. A wounded soldier is three times cheaper than a dead one.

```kma-bars
{
  "title": "Wounded one Infirmary can hold, by level",
  "unit": "soldiers",
  "rows": [["Level 1", 677], ["Level 10", 1131], ["Level 20", 1639], ["Level 30", 2030]],
  "highlight": "Level 20",
  "note": "Three Infirmaries at level 20 hold 4,917, about four fifths of the level 30 total, for a small share of the build time. Research and lord skills add up to 45%."
}
```

- Opens at **Sanctuary 7**. Up to 3 can be built, and a research node opens a **fourth**. Three at level 30 hold **6,090**; four hold **8,120**.
- The **Soldier's Rest** (from Sanctuary 1) saves a share of the dead: 18% at level 1, up to 40% at level 23. Reviving costs the same 30% as healing.
- **Alliance Help** works on healing queues.
- In the **Royal City Scramble**, 70% of casualties go to the Infirmary instead of dying. The Saturday raid of the cross-server Alliance Duel adds raid buffs to Infirmary capacity and healing.

More on protecting your army: [Defense](#/defense).

> **KMA:** Before any war week, heal everything so your Infirmaries start empty, and keep a low-tier stockpile ready for Duel Friday. If your Infirmary is smaller than your marching army, fix that before you join a fight.

```kma-dodont
{
  "do": [
    "Train the **highest tier** you have unlocked.",
    "Level heroes: hero level is most of your march size.",
    "Keep spare Training Grounds at level 10 and pump T4 for promotion.",
    "Promote on **Duel day 5** and heal on day 6.",
    "Keep Infirmary capacity at least as large as the army you send into a fight."
  ],
  "dont": [
    "Plan troop counters. There are no troop types to counter.",
    "Sink months of build time into spare Training Grounds past level 10. One high ground does the promoting.",
    "Send more troops into a fight than your Infirmary can catch.",
    "Promote your stockpile on a Tuesday. It scores nothing that day."
  ]
}
```

## Quick answers

**Why can I not train T10 at Training Grounds 30?** You also need Sanctuary 30 and the Lv.10 Soldier research node.

**Should I mix tiers in a march?** Send your top tier. There are no troop types to balance, only tiers.

**How do I get a fourth Training Grounds?** Research the Extra Training Grounds node in Full Development.

**Is it worth healing low-tier troops?** Yes. Healing costs 30% of recruiting on every tier, and the overflow dies.

Related: [Research Priorities](#/research) · [Alliance Duel](#/alliance-duel) · [Defense](#/defense) · [Sanctuary Priority](#/sanctuary-priority)
