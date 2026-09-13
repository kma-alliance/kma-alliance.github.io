---
id: caravans
title: Caravans and Cross-Server Raiding
category: solo
summary: Four personal caravans where quality beats volume, an Alliance Caravan of up to twenty riders, and four raids a day on other servers. Hold UR caravans for Duel days 2 and 6.
tags: caravans, caravan trade, alliance caravan, raiding, plunder, black ops chests, study scrolls, private stable
updated: 2026-09-13
---

```kma-event
{
  "kind": "Daily system",
  "icon": "solo",
  "art": "img/store/gather-resources.jpg",
  "headline": "Send **high-quality** caravans on the right day, raid other servers four times, and ride the Alliance Caravan whenever it runs.",
  "facts": [
    ["Opens", "Sanctuary 10 · Private Stable"],
    ["Format", "4 caravans, 12-run list, 1 free refresh a day"],
    ["Fight", "4 raids a day on other servers"],
    ["Who", "Alliance Caravan: up to 20 riders each"]
  ],
  "rewards": ["UR Hero Omni Shards", "Resources", "Alliance Duel points", "Raven Essence"]
}
```

Caravans are one of the few incomes that depend on attention rather than buildings. You send your own, you ride your alliance's, and you rob other servers'. What decides the payout is **quality, not the number of runs**, and **timing**: a UR caravan sent on the wrong day throws away one of the biggest single scores in the Alliance Duel.

## How it works

Everything lives in the **Caravan Trade** screen, which has three tabs.

```kma-map
{
  "title": "The Caravan Trade screen",
  "w": 640, "h": 290,
  "nodes": [
    { "id": "hub", "label": "Caravan Trade", "x": 320, "y": 60, "kind": "base", "short": "CT", "r": 30 },
    { "id": "other", "label": "Other", "sub": "raid other servers", "x": 110, "y": 200, "kind": "enemy", "short": "RAID" },
    { "id": "my", "label": "My", "sub": "your 4 caravans", "x": 320, "y": 200, "kind": "safe", "short": "MY" },
    { "id": "trade", "label": "Trade", "sub": "Alliance Caravan", "x": 530, "y": 200, "kind": "ally", "short": "ALLY" }
  ],
  "links": [["hub", "other"], ["hub", "my"], ["hub", "trade"]],
  "legend": [["enemy", "Take from others"], ["safe", "Your own runs"], ["ally", "Alliance run"]],
  "caption": "Tab names come from a player guide's chapter list. The Other tab has a checkbox that hides caravans from your own server."
}
```

### Your caravans (My)

You own **4 caravans**. The run list holds 12 options and refreshes free once a day. Each caravan needs a squad to escort it, so use your strongest. Quality is shown with rarity letters from N up to UR, and UR caravans show **gold** on the world map.

```kma-bars
{
  "title": "Load per caravan by quality, at level 25",
  "unit": "resources",
  "rows": [
    ["Quality 1", 2203740],
    ["Quality 2", 3524400],
    ["Quality 3", 4405500],
    ["Quality 4", 5286600],
    ["Quality 5", 6609240],
    ["Quality 6", 13216500, "top quality"]
  ],
  "highlight": "Quality 6",
  "note": "The top quality carries 6 times the bottom one and double the next step down. One top-quality run beats four low ones."
}
```

```kma-tiles
{
  "tiles": [
    ["4", "raids you can make a day"],
    ["2", "times a normal caravan can be robbed"],
    ["1", "time a top-quality caravan can be robbed", "the best cargo is also the safest"],
    ["3", "times an Alliance Caravan can be robbed", "each robbery takes 3 rewards"]
  ]
}
```

### Raiding (Other)

The Other tab lists caravans from other servers. You get **4 raids a day**. Raiding moves you onto that server's map, where you can hit more caravans. A player guide's chapters also cover records, favourites and a results screen for checking what each plunder paid.

- **Tick the box that excludes your own server.** Hitting an ally's caravan is the fastest way to start a fight in chat.
- Raid only when the cargo is something you need. Priority: **UR Hero Omni Shards**, then Antitoxin supply chests, then resources and coins.
- Each plunder is also worth 120 Kingdom Points in Kingdom War weeks.

> **Unverified name:** "Black Ops Chests" appears in the title of one community page about cross-server raiding, but the page never shows or defines the item. Black Ops is also the name of the building that unlocks [Covert Operations](#/covert-falcon). Check your raid results before relying on the name.

### The Alliance Caravan (Trade)

```kma-steps
{
  "title": "One Alliance Caravan run",
  "steps": [
    { "label": "Coachman", "text": "R4 or R5 appoint a coachman. The alliance has **2 caravans of 6 carriages** each." },
    { "label": "Upgrade", "text": "One quality refresh costs 5 tickets. After the 5th refresh (25 tickets) the caravan turns **golden**: every carriage is top quality." },
    { "label": "Board", "when": "4 hours", "text": "Up to **20 members** per caravan. You must have been in the alliance at least one day." },
    { "label": "Travel", "when": "2 hours", "text": "It can be robbed up to 3 times on the way, losing 3 rewards each time." },
    { "label": "Rewards", "text": "Riders pick a reward from their carriage's load. A guide blog says the coachman keeps what is left." }
  ],
  "note": "last-asylum.com lists the Alliance Caravan as a Raven Essence source."
}
```

> **Note:** from 4 September 2026, alliances with the **Lv.25 Alliance Gift** privilege carry **1 extra passenger** on each regular wagon (official update notes, 2 September 2026). Leveling the Alliance Gift is how the alliance fits more riders.

> **Unverified:** who defends is unclear. Datamined data says only the coachman's squads guard the caravan. A player video has a "Guard Setup" chapter and a guide blog says the coachman appoints 3 guards; the same blog describes 1 lead wagon and 4 regular wagons instead of 6 carriages. Look at the Trade tab when the next caravan opens.

## Rewards and scoring

| Action | Where it scores | Points |
|---|---|---|
| Dispatch a UR caravan | Alliance Duel, days 2 and 6 | 100,000 |
| Dispatch a UR trade caravan | Top Healer, the big action on contests 6 and 7 | 5,000 |
| Plunder a caravan | Kingdom War weeks | 120 Kingdom Points |

> **Note:** the [Alliance Duel](#/alliance-duel) guide lists 100,000 for a UR caravan. One community table lists 210,000 for the same task, so the value may change between servers. Check the Duel task list on day 2.

## Caravan Transport research

Nine technologies, **81,950 Study Scrolls** in total.

| Node | Scrolls | Effect |
|---|---|---|
| Raid Mastery | 9,400 | +15% hero HP, attack and defense when raiding |
| Defense Mastery | 9,400 | +15% when defending a caravan |
| Plunder | 5,000 | 50% chance of an extra crate on a win |
| Luck | 5,000 | 50% chance to keep a crate on a loss |
| Swift Caravan | 4,400 | +25% speed |
| Caravan Expansion | 3,750 | +25% cargo |
| Extra Caravan | 5,000 | +1 daily run |
| Countermeasures | 20,000 | Any one player can raid you at most 3 times |
| Pumpkin Carriage | 20,000 | Unlocks the Golden Caravan |

It spends the same scrolls as the Alliance Duel tree and T10 troops. Leave it until those are done.

## The KMA plan

Hold your UR caravans for **Duel day 2**, and again for day 6. Refresh for quality, not volume. Spend your 4 raids every day on other servers, aimed at UR shards.

> **KMA:** when an officer opens the Alliance Caravan, get on it. Boarding stays open for 4 hours. Officers should place that window where members from different time zones can catch it, and give the coachman role to the strongest member online.

```kma-dodont
{
  "do": [
    "Tick **exclude this server** before every raid.",
    "Save UR caravans for Alliance Duel days 2 and 6.",
    "Escort with your strongest squad.",
    "Use all 4 raids a day, on cargo you actually need.",
    "Board every Alliance Caravan you can."
  ],
  "dont": [
    "Send a low-quality run before using your free daily refresh.",
    "Raid your own kingdom or post targets in public chat.",
    "Spend Study Scrolls here before the Duel tree and T10.",
    "Switch alliances right before a caravan run. Boarding needs a full day of membership."
  ]
}
```

## Quick answers

**How often can my caravan be robbed?** Twice for a normal caravan, once for top quality. That is the cap for each run.

**Why did my raid hit someone in KMA?** The exclude-own-server box was not ticked. Tick it every time.

**I joined yesterday. Why can't I board?** You need at least one full day in the alliance.

**Is the Golden Caravan the same as a UR caravan?** No. UR is a quality tier for your own runs. A golden Alliance Caravan is one refreshed 5 times so every carriage is top quality.

Related: [Alliance Duel](#/alliance-duel) · [Top Healer](#/top-healer) · [Covert Ops and Falcon Quests](#/covert-falcon) · [Research](#/research)
