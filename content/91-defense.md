---
id: defense
title: Defense, Garrison and Shields
category: combat
summary: How to not get farmed. Shield prices and the War Frenzy trap, garrison and Walls, reinforcing, what the Watchtower really does, and how the Infirmary decides what a lost fight costs.
tags: defense, garrison, shield, war frenzy, watchtower, reinforce, scouting, infirmary, soldier's rest, walls, cities
updated: 2026-09-13
---

```kma-event
{
  "kind": "Core mechanic",
  "icon": "shield",
  "art": "img/store/survive-the-plague.jpg",
  "headline": "Most hits land on players who acted in the last 15 minutes or forgot to shield. **Shield first**, keep a garrison, and keep the Infirmary big.",
  "facts": [
    ["Defense", "Shield, garrison squads, Walls, reinforcements"],
    ["Cost", "Shields from 7,500 Alliance Coins or 1,500 diamonds"],
    ["Opens", "First free shield at Sanctuary 7, Watchtower at 8"],
    ["When", "Every log-off in a war week, and Duel day 6"]
  ]
}
```

Defense is mostly about **timing and preparation**, not about out-fighting the attacker. A shield that is up blocks the attack completely. A shield you cannot raise, because you scouted someone ten minutes ago, blocks nothing. When a hit does land, the Infirmary decides whether your soldiers come back cheaply or are gone for good.

## The layers, in order

```kma-steps
{
  "title": "What stands between an attacker and your army",
  "steps": [
    { "label": "Warning", "text": "The **Watchtower** warns you of incoming marches and blocks enemy scouts from seeing your army." },
    { "label": "Shield", "text": "An active shield stops attacks outright. It has to be up **before** trouble, because military actions lock shields for 15 minutes." },
    { "label": "Garrison", "text": "The squads you set to defend meet the attack, behind your Walls." },
    { "label": "Reinforcements", "text": "Allies' squads parked in your Sanctuary fight alongside your garrison until recalled." },
    { "label": "Recovery", "text": "The **Infirmary** catches wounded soldiers and the Soldier's Rest saves a share of the dead. Anything beyond that is lost." }
  ]
}
```

## Shields

```kma-tiles
{
  "tiles": [
    ["7", "free 8-hour shields", "at Sanctuary 7, 9, 11, 12, 13, 15 and 17"],
    ["5", "recharging 8-hour charges", "refill over 7 days: five free shields a week"],
    ["15 min", "War Frenzy lock", "after any military action"],
    ["825", "coins per shield hour", "12-hour and 24-hour coin shields"]
  ]
}
```

Use the free shields first. After that, Alliance Coins are far cheaper than diamonds.

| Shield | Alliance Coins | Coin limit | Diamonds (no limit) |
|---|---|---|---|
| 8 hours | 7,500 | 7 | 1,500 |
| 12 hours | 9,900 | 2 | 2,500 |
| 24 hours | 19,800 | 3 | 5,000 |
| 3 days | – | – | 12,000 |

```kma-bars
{
  "title": "Alliance Coin shields, cost per hour of protection",
  "unit": "coins per hour",
  "rows": [
    ["8 hours", 938, "7,500 coins, limit 7"],
    ["12 hours", 825, "9,900 coins, limit 2"],
    ["24 hours", 825, "19,800 coins, limit 3"]
  ],
  "highlight": "24 hours",
  "note": "The 12-hour and 24-hour coin shields cost the same per hour; the 24-hour one simply lasts longer. In diamonds the 3-day shield is cheapest per hour (about 167), and the 8-hour one (about 188) beats the 12-hour and 24-hour ones (about 208)."
}
```

### The War Frenzy trap

Scouting, reinforcing, deploying, attacking or sieging **anything** (territories, camps, resource spots or cities) starts **War Frenzy**, which blocks shields for a flat **15 minutes**. The in-game text suggests the timer grows with Sanctuary level; it does not. It is 15 minutes at every level.

```kma-steps
{
  "title": "Example: logging off at night",
  "steps": [
    { "label": "Last action", "when": "23:30", "text": "You scout a neighbour. War Frenzy starts." },
    { "label": "Locked", "when": "23:30 to 23:45", "text": "No shield can go up. You are open to anyone watching." },
    { "label": "Shield up", "when": "23:45", "text": "The lock ends. Raise the shield, **then** log off." }
  ],
  "note": "Plan your last scout, rally or reinforcement at least 15 minutes before bed."
}
```

War Frenzy has an upside: from **Sanctuary 9** it also gives **+5% troop ATK** while it runs. Players scout a target right before a big attack for exactly that reason.

**When to shield:**

- Every time you log off during a war week.
- Alliance Duel day 6 if you are not a fighter. Matched opponents can teleport onto your server for that day.
- Before a [Kingdom War](#/kingdom-war) week. Knocking out a rival player's Sanctuary scores 51,000 points for the attacker's kingdom.
- Whenever your troops are home and you are a resource target. Antitoxin has no storehouse, so an attacker can carry off the whole stock: collect it before you log off.

**Shields do nothing** in the [Royal City Scramble](#/royal-city) (territories on the cursed land cannot raise one), on Kingdom War war day, and against [Undead Siege](#/undead-siege) Blights.

## Garrison and Walls

World map, tap your Sanctuary, **Reinforcement**, **Garrison**, then tick the squads that defend. Or Walls, then Fortifications. Higher garrison Power means more Undead Siege waves survived and better odds against raids.

Garrison squads should be tank-heavy with sustain. Long fights favour damage reduction over burst. See [Squads and team comps](#/team-comps).

**Walls** unlock at Sanctuary 4 and are a Sanctuary requirement: Walls 3 for Sanctuary 5, Walls 5 for 6, Walls 8 for 9 and Walls 9 for 10. City DEF is 10,000 at every Wall level. What levels add is slower wall damage and faster recovery, 1% per level up to 30%. After a lost defense the wall keeps a quarter of its durability, and a diamond repair costs 20 diamonds per 2,000 durability. Walls matter for Power and Sanctuary requirements; against a real attack, a shield protects you far better.

## Reinforcing

Send squads to an ally's Sanctuary or Alliance Hall. They defend until recalled. Reinforcing starts War Frenzy on **you**, so do not reinforce right before you need your own shield.

```kma-map
{
  "title": "Why KMA lives in one core",
  "w": 640,
  "h": 280,
  "nodes": [
    {
      "id": "a",
      "label": "Ally under attack",
      "x": 300,
      "y": 140,
      "kind": "ally",
      "short": "ALY",
      "r": 28
    },
    {
      "id": "n1",
      "label": "Neighbour in the core",
      "sub": "short march",
      "x": 120,
      "y": 70,
      "kind": "base",
      "short": "KMA"
    },
    {
      "id": "n2",
      "label": "Neighbour in the core",
      "sub": "short march",
      "x": 120,
      "y": 215,
      "kind": "base",
      "short": "KMA"
    },
    {
      "id": "far",
      "label": "Member on the edge",
      "sub": "12 min / 100 tiles",
      "x": 520,
      "y": 215,
      "kind": "node",
      "short": "far"
    },
    {
      "id": "e",
      "label": "Attacker",
      "x": 540,
      "y": 60,
      "kind": "enemy",
      "short": "!"
    }
  ],
  "links": [
    [
      "n1",
      "a",
      "reinforce",
      "arrow"
    ],
    [
      "n2",
      "a",
      "reinforce",
      "arrow"
    ],
    [
      "far",
      "a",
      "too slow",
      "dashed"
    ],
    [
      "e",
      "a",
      "attack",
      "arrow"
    ]
  ],
  "legend": [
    [
      "ally",
      "Target"
    ],
    [
      "base",
      "Nearby members"
    ],
    [
      "node",
      "Far member"
    ],
    [
      "enemy",
      "Attacker"
    ]
  ],
  "caption": "Reinforcement marches are not doubled like rallies, so help only arrives in time from close by. Use a Direct Relocate to move into the core."
}
```

On cities and fortresses, squads sent to a structure your alliance already holds join its garrison instead of fighting. The garrison a structure can hold is capped by the rally size of whoever captured it. After a fortress falls, squads get knocked out and slots reopen, so keep a reinforcement rotation going.

## Watchtower and scouting

The Watchtower unlocks at **Sanctuary 8**, and you can only build one. Nearly everything it does for defense arrives in the first day of building:

```kma-tiles
{
  "tiles": [
    ["20%", "counter-scout chance", "Watchtower level 1"],
    ["100%", "counter-scout chance", "from level 5: every enemy scout is countered"],
    ["5", "report fields hidden", "from level 9, no more after that"],
    ["~27 h", "build time to level 9", "levels 10 to 30 take the other 349 days"]
  ]
}
```

Levels 10 to 30 only raise **your own** scout level (from 2 up to 22), which improves the reports you get on others. So build the tower to 9 early, then leave it until faster upgrades are done.

> **Unverified name:** Older KMA notes call the anti-scout rating **Scope Level**; the building stats may use a different label. A player building database also says scout reports show the target's Hall of Honor Power from Watchtower 13 and its details from 14. Neither is confirmed by a second source; check the Watchtower screen.

**Scouting** triggers War Frenzy on you. Scouts move faster with the Scout Squad building (Sanctuary 6, up to three, 1% to 30% speed). Before Elixir Scramble or a war day, officers scout the enemy: member count, positioning, strongest player.

## Infirmary and Soldier's Rest

Wounded soldiers that do not fit in the Infirmary **die**. Healing costs **30%** of recruiting and takes 30% of the time, on every tier: 58 resources against 194 at tier 1, and 4,216 against 14,054 at tier 10. A wounded soldier is three times cheaper than a dead one.

```kma-bars
{
  "title": "Infirmary capacity",
  "unit": "wounded soldiers",
  "rows": [
    ["One, level 1", 677],
    ["One, level 20", 1639],
    ["One, level 30", 2030],
    ["Three, level 30", 6090],
    ["Four, level 30", 8120],
    ["Four + 45%", 11774, "research and lord skills"]
  ],
  "highlight": "Three, level 30",
  "note": "Three Infirmaries at level 20 already hold 4,917, four fifths of the level 30 total, for a tiny share of the build time."
}
```

> **Note:** The building data caps the Infirmary at **3 built**, yet the same data gives a capacity for **four**. The Infirmary's own data page says a research node opens the fourth. Check your Research Lab if you only see three slots.

The **Soldier's Rest** (from Sanctuary 1) saves a share of the fallen: 18% at level 1, rising to 40% at level 23 and no higher. Later levels only add room, from 400 to 2,000 soldiers. Reviving costs the same 30% as healing. Alliance Help works on healing queues, so ask for help every time.

In the Royal City Scramble losses are gentler: 70% of the fallen go to the Infirmary instead of dying.

## Cities

86 capturable cities in six levels. Bonuses are alliance-wide and mostly economic:

| Level | City | Bonus |
|---|---|---|
| 6 | Lionheart Fortress | Training speed +5% |
| 6 | Nightfall Fortress | Research speed +20% |
| 6 | Sky Fortress | Construction speed +20% |
| 5 | Temple of Chaos | Timber output +20% |
| 5 | Temple of Nature | Grain gathering +20% |
| 5 | Temple of Order | Herb output +20% |
| 5 | Temple of War | Grain output +20% |

Holding a level 6 city is the ticket to the Royal City Scramble before the Era of Revival. Level 6 cities have 200,000 HP and a garrison of 100; level 5 have 150,000 HP and 80.

## Servers and relocation

There is **no server transfer** as of September 2026; the developers say transfers are planned, with no date. Characters are bound to their server. Cross-server teleports exist only against your Alliance Duel opponent on raid day and your Kingdom War opponents, and last a day. In-server relocation uses Direct Relocate from the Alliance Shop, and joining an alliance below Sanctuary 8 moves you next to the leader for free. Server time is UTC-2, and the daily reset and Duel day roll happen at **00:00 server time**. See [Time zones](#/time-zones).

## The KMA plan

> **KMA:** In a war week, shield every time you log off, and do your last military action at least 15 minutes before. Keep a garrison set at all times, live in the core, and fill your Infirmaries before any PvP week. On Duel day 6, fighters hit assigned targets; everyone else shields, heals and stays home.

```kma-dodont
{
  "do": [
    "Raise the shield **before** you log off, not after one last scout.",
    "Buy shields with Alliance Coins; keep diamonds for emergencies.",
    "Build the Watchtower to level 9 early; that is where its defense stops growing.",
    "Collect Antitoxin before long breaks. There is no storehouse to protect it."
  ],
  "dont": [
    "Scout, reinforce or attack in the 15 minutes before you need a shield.",
    "Buy a shield for Undead Siege; Blights ignore it.",
    "Leave auto-join on during a defense night.",
    "Let wounded overflow the Infirmary. The overflow dies."
  ]
}
```

## Quick answers

**Why can I not raise my shield?** War Frenzy. You scouted, reinforced, deployed or attacked in the last 15 minutes. Wait it out.

**Is the 24-hour coin shield the best deal?** It ties with the 12-hour one on price per hour (825 coins). Buy whichever fits your break; the 12-hour one has a limit of 2.

**Do higher Walls stop attacks?** Not much. City DEF stays at 10,000; Wall levels mainly speed up recovery. A shield is the real protection.

**How many soldiers can I save?** Whatever fits in your Infirmaries (6,090 with three at level 30, plus up to 45%), plus the Soldier's Rest share of the dead.

Related: [Rallies and Marches](#/rallies) · [Resources, Stars and Shields](#/resources) · [Undead Siege](#/undead-siege) · [Kingdom War](#/kingdom-war)
