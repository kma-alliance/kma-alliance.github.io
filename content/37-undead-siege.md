---
id: undead-siege
title: Undead Siege
category: events
summary: The Death Prison sends 20 waves at every eligible member's territory. Your garrison does the fighting, shields do nothing, and the stage officers pick decides the payout.
tags: undead siege, death prison, garrison, defense, antitoxin, clues, falcon quests, alliance event
updated: 2026-09-13
---

```kma-event
{
  "kind": "Alliance event",
  "icon": "shield",
  "art": "img/store/slay-rats.jpg",
  "headline": "Twenty waves hit every eligible territory. **Your garrison** is the only thing that fights.",
  "facts": [
    ["Opens", "300,000 clue points from Falcon Quests, then R4 or R5 starts it"],
    ["Format", "10 difficulty stages, 20 waves each"],
    ["Who", "48+ hours in the alliance, online in the last 72 hours"],
    ["Defense", "Shields are ignored. Garrison only"],
    ["When", "48-hour cooldown between runs"]
  ],
  "rewards": ["Antitoxin", "Skill Badges", "Herbs", "Speedups", "Alliance Coins", "Raven Essence"]
}
```

Undead Siege arrived in July 2026. A plague prison breaks open and its blights march on the alliance, hitting each member's territory wave after wave. Nothing you click during the run matters. What decides it is **what you put in your garrison before wave 1**, and whether officers pick a stage the whole alliance can actually hold.

<div data-widget="gate-check" data-gate="siege"></div>

## How it works

```kma-steps
{
  "title": "From clues to rewards",
  "steps": [
    { "label": "Collect clues", "text": "Every member's Falcon Quests add clue points. The alliance needs **300,000** to find the prison." },
    { "label": "Locate and schedule", "text": "R4 or R5 sends the Falcons out, picks a difficulty and sets a time. **The difficulty cannot be changed** once it is set." },
    { "label": "Set up", "text": "The Death Prison appears on the map. You get **180 seconds** before wave 1 to set your garrison." },
    { "label": "20 waves", "text": "Blights attack every eligible territory at once. Your garrison fights automatically. Shields do nothing." },
    { "label": "Breached = out", "text": "Lose one wave and your territory is skipped for the rest of the run. Your personal count stops there." },
    { "label": "Rewards", "text": "Personal rewards by the waves you held. Alliance rewards by the waves **everyone** held together." }
  ]
}
```

```kma-map
{
  "title": "One run: the prison hits everyone at once",
  "w": 640, "h": 300,
  "nodes": [
    { "id": "p", "label": "Death Prison", "sub": "20 waves", "x": 90, "y": 150, "kind": "spawn", "short": "!", "r": 30 },
    { "id": "a", "label": "Strong member", "x": 360, "y": 60, "kind": "ally", "short": "R4" },
    { "id": "you", "label": "You", "sub": "garrison set", "x": 380, "y": 160, "kind": "base", "short": "YOU" },
    { "id": "b", "label": "Weaker neighbour", "x": 560, "y": 110, "kind": "ally", "short": "R2" },
    { "id": "c", "label": "Another member", "x": 540, "y": 250, "kind": "ally", "short": "R3" }
  ],
  "links": [["p","a","","arrow"],["p","you","waves","arrow"],["p","b","","arrow"],["p","c","","arrow"],["you","b","reinforce","dashed"]],
  "legend": [["spawn","Death Prison"],["ally","Eligible members, you included"]],
  "caption": "Every eligible territory is attacked in the same run. Strong members can reinforce weaker neighbours so they survive longer, which raises the alliance wave total everyone is paid from."
}
```

### Clues

Clues come from Falcon Quests, so the siege is really unlocked by the whole alliance doing its daily quests.

```kma-tiles
{
  "tiles": [
    ["300", "clues per big target", "defeat rebels, a blight legion or a wandering blight"],
    ["10", "clues per small task", "clear blights, help members, gather, recover resources, Alliance Excavation"],
    ["300,000", "clues to find the prison", "shared by the alliance"]
  ]
}
```

### Who gets attacked

Only eligible members are targeted, and only they earn rewards. You need all three:

- **More than 48 hours** in the alliance.
- **Online within the last 72 hours.**
- A territory that meets the stage's level and is **on your own server**, not moved away for a cross-server event.

> **Note:** earlier versions of this page flagged a conflict between "10 difficulty levels" and "20 waves". Both are right. The datamined event data lists 10 stages of 20 waves each, and a live run on a player stream shows 20 waves on stage 3.

## Difficulty stages

Higher stages have stronger blights and bigger rewards. A player video also shows **enemy mutations** on higher stages, so read the stage preview before you commit. The same video's rules say a stage unlocks the next one only after **20 members survive all its waves**.

| Stage | Sanctuary | Power listed | Alliance Antitoxin |
|---|---|---|---|
| 1 | 13 to 15 | 2.4M | 16.7M |
| 2 | 14 to 16 | 3.3M | 20.9M |
| 3 | 15 to 17 | 4.2M | 26.1M |
| 4 | 17 to 20 | 6.1M | 52.8M |
| 5 | 19 to 22 | 8.0M | 75.4M |
| 6 | 21 to 24 | 11.5M | 119.7M |
| 7 | 23 to 26 | 14.0M | 138.8M |
| 8 | 25 to 28 | 17.4M | 196.3M |
| 9 | 26 to 29 | 20.2M | 202.6M |
| 10 | 27 to 30 | 24.5M | 255.6M |

> **Unverified:** the datamine calls the Power column "Power needed". One player guide reads the same numbers as the **enemy's** Power. Either way, a garrison far below that number will fall early. Check the stage screen in-game.

```kma-bars
{
  "title": "Alliance-track Antitoxin, full payout per stage",
  "unit": "million Antitoxin",
  "rows": [["Stage 1", 16.7], ["Stage 2", 20.9], ["Stage 3", 26.1], ["Stage 4", 52.8], ["Stage 5", 75.4], ["Stage 6", 119.7], ["Stage 7", 138.8], ["Stage 8", 196.3], ["Stage 9", 202.6], ["Stage 10", 255.6]],
  "highlight": "Stage 4",
  "note": "Stage 4 roughly doubles stage 3. Stage 10 pays about 27 full eight-hour resource banks of Antitoxin."
}
```

## Rewards

There are two separate tracks, and they count different things.

| Track | Counts | Thresholds | Pays |
|---|---|---|---|
| Personal | Waves **you** held, max 20 | Waves 1, 4, 8, 10, 13, 16 and 20 | Speedups, Alliance Coins, Raven Essence |
| Alliance | Waves the **whole alliance** held | Starts at 50. Top threshold: 300 (stages 1 to 5), 500 (6 to 7), 800 (8 to 9), 1,200 (stage 10) | Antitoxin, Herbs, Skill Badges, Level Supplies |

Alliance rewards go only to members with **more than 48 hours** in the alliance. One player adds at most 20 waves per run, so stage 10's 1,200-wave threshold needs 60 members holding every wave. Half an alliance cannot reach the top tiers, however strong it is.

## The KMA plan

> **KMA:** Before every run: set your garrison, stack your best squads in it, turn **auto-rally off**, and reinforce a weaker neighbour if you have a spare squad. Then leave it alone.

**Set the garrison.** World map, tap your Sanctuary, **Reinforcement → Garrison**, or **Walls → Fortifications**, and pick your strongest squad. With no squad set, you fall on wave 1. See [Defense](#/defense).

**Pick the stage for the median member.** The recommended rule for officers is the stage that the middle of the alliance's Power list clears, not the leader's. Twenty-five members holding 20 waves beats ten members holding 20 and the rest breached on wave 6.

**Pick the time well.** Run it when troops are home and healed, for example after Duel day 6 fighting is over. Avoid the days right after members join, because anyone under 48 hours earns nothing from the alliance track.

```kma-lineup
{
  "title": "Garrison squad",
  "heroes": [
    ["arthur", "Tank", "Allies take much less Physical damage. The anchor of every defensive squad."],
    ["daskal", "Tank", "Shields the whole squad every few seconds. Scales with DEF."],
    ["billy", "Tank", "Energy damage reduction and stun immunity for your damage dealers."]
  ],
  "alts": [["louis", "instead of Daskal"], ["ulfrid", "instead of Billy"], ["bella", "best SSR tank if you lack URs"]],
  "note": "This follows the site's garrison advice in Squads and Team Comps: tanks plus one or two sustain or damage heroes. No source publishes an Undead Siege lineup, so treat it as a starting point."
}
```

```kma-dodont
{
  "do": [
    "Do your **Falcon Quests** every day. Clues come from them.",
    "Set your strongest squad in the garrison **before** the 180-second setup ends.",
    "Reinforce a weaker neighbour. Their waves count toward the alliance total too.",
    "Log in at least once every 72 hours so you stay eligible."
  ],
  "dont": [
    "Buy or pop a shield for the siege. Blights ignore it.",
    "Leave **auto-rally on**. Your defenders can march away mid-run.",
    "Choose a stage for the leader's Power and watch half the alliance fall on wave 6.",
    "Move your territory to another server before the run. You will not be targeted or paid."
  ]
}
```

## Quick answers

**My shield is up. Am I safe?** No. Siege blights ignore shields. Only your garrison and any reinforcements defend you.

**I got breached on wave 9. Can I rejoin?** No. A breached territory is skipped for the rest of that run. Your personal rewards count the waves you held before the breach.

**I joined KMA yesterday. Do I get anything?** Not from the alliance track. You need more than 48 hours in the alliance first.

**Can officers change the stage after scheduling?** No. The difficulty is locked until that run ends. The next run can use a different stage after the 48-hour cooldown.

Related: [Defense](#/defense) · [Covert Ops and Falcon Quests](#/covert-falcon) · [Squads and Team Comps](#/team-comps) · [Rallies](#/rallies)
