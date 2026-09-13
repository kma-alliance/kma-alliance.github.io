---
id: alliance-boss-excavation
title: Alliance Boss and Alliance Excavation
category: events
summary: Any hit on the Alliance Boss earns a reward pull, so always hit it. Alliance Excavation speed scales with the square of the helpers, so never dig alone.
tags: alliance boss, alliance excavation, digs, falcon quests, pirate legacy, rally, raven essence
updated: 2026-09-13
---

```kma-event
{
  "kind": "Alliance activities",
  "icon": "alliance",
  "art": "img/shots/screenshot-ruins.jpg",
  "headline": "Two shared jobs with one rule: **show up**. One hit on the boss pays, and every extra digger speeds the dig for everyone.",
  "facts": [
    ["Opens", "Boss level 3 on server day 7, level 4 on day 14"],
    ["Fight", "Boss: combined damage, faction bonus does not apply"],
    ["Who", "Excavation: up to 100 helpers per spot"],
    ["Duration", "A dig takes 2 hours alone, 18 seconds with 20 helpers"]
  ],
  "rewards": ["Boss reward pulls", "Raven Essence", "Gearstone", "Skill Badges", "Diamonds"]
}
```

This page covers two alliance activities that work on the same idea: the alliance gets far more out of them when **many people take part a little** than when a few people do a lot. Neither needs strong squads. Both need people to notice the call in chat.

## Alliance Boss

The Alliance Boss counts the **combined damage** of everyone who hits it. Faction does not matter here: unlike the Abyss and weekend bosses, no faction gets a damage bonus, so bring your strongest squad whatever its faction.

The boss has **12 levels** that open with server age: level 3 on server day 7, level 4 on day 14, then roughly one more level a week.

### Reward pulls

Your personal damage decides how many reward pulls you collect. The first pull needs **any hit at all**. After that, every extra 2 million damage adds one more.

```kma-bars
{
  "title": "Reward pulls by personal damage",
  "unit": "pulls",
  "rows": [
    ["Any hit", 1, "even a weak squad"],
    ["2M", 2],
    ["4M", 3],
    ["6M", 4],
    ["8M", 5],
    ["10M", 6, "then one more pull per 2M"]
  ],
  "highlight": "Any hit",
  "note": "The first pull is almost free. That is why every member should hit the boss every time it is up."
}
```

> **Unverified:** no player video shows a 12-level Alliance Boss with damage-based reward pulls. The Demon King Blights in the Special Event tab are a different boss with faction bonuses. The datamine lists the Alliance Boss on its own page, but its numbers overlap closely with [Cheese Trap](#/cheese-trap), which the same datamine calls "an alliance boss for half an hour": both have 12 levels, level 3 on day 7 and level 4 on day 14, and personal rewards that start at one hit and grow in 2-million steps at level 1. The Alliance Boss may simply be the Cheese Trap boss described a second way. If your alliance screen shows a separate boss, tell an officer what it is called.

## Alliance Excavation

last-asylum.com lists **Alliance Excavation** under Falcon Quests as a source of Raven Essence. Treasure digging is real: a player video shows alliance chat lines such as "has unearthed the treasure at X:710 Y:537!" and a "Treasure Digger" tab next to "Covert Ops Force" on the Black Ops screen. The datamine describes alliance **digs**: shared spots that one member starts and others help with. The key number is how speed grows with helpers.

### Speed scales with the square of the helpers

Two diggers are 4 times faster than one. Three are 9 times faster. Ten are 100 times faster. Every person who joins speeds up the dig for **everyone already digging**, not only for themselves.

```kma-bars
{
  "title": "Time to finish one spot",
  "unit": "seconds",
  "rows": [
    ["1 digger", 7200, "2 hours"],
    ["2 diggers", 1800, "30 minutes"],
    ["3 diggers", 800, "13 min 20 s"],
    ["5 diggers", 288, "4 min 48 s"],
    ["10 diggers", 72, "1 min 12 s"],
    ["20 diggers", 18],
    ["50 diggers", 3],
    ["100 diggers", 1]
  ],
  "highlight": "5 diggers",
  "note": "Five helpers already turn two hours into under five minutes. The time is 2 hours divided by the number of diggers squared."
}
```

```kma-tiles
{
  "tiles": [
    ["100", "diggers per spot", "the reported maximum"],
    ["10", "gifts per spot", "at most"],
    ["24 h", "to collect", "then the gifts expire"],
    ["37", "kinds of spot", "resources, Gearstone, Skill Badges, speedups, diamonds"]
  ]
}
```

### How a dig goes

```kma-steps
{
  "title": "From spot to gifts",
  "steps": [
    { "label": "Get a spot", "text": "A member gets a dig. Do not start it quietly." },
    { "label": "Call it", "text": "Post it in alliance chat and wait a moment for helpers." },
    { "label": "Pile in", "text": "Everyone taps in. Each new helper speeds it up for all of them." },
    { "label": "Collect", "text": "Every digger is rewarded. Alliance chat announces who unearthed the treasure. Collect within **24 hours** or the gifts expire." }
  ]
}
```

> **Unverified:** "Alliance Excavation" is how last-asylum.com names it, but no player video shows the dig screen itself, the helper count or the timer, so the square-of-helpers table is datamine only. The "Treasure Digger" tab is the most likely home for it. The details also conflict. The datamine's Falcon Quest list has a free quest called **Pirate Legacy** that is a dig: it allows 8 hours, allies speed it up, and it pays diamonds, Raven Essence and a Raven Gear Chest. That matches "Falcon Quests, Alliance Excavation, Raven Essence" well. But the same datamine gives the Falcon Tower only **5 to 20 helpers** per quest by tower level, while the dig page says up to 100 diggers. Check your own Falcon Quest list and tell an officer what you see.

## The KMA plan

> **KMA:** The recommended plan is simple. **Hit the Alliance Boss every time it is up**, even with a weak squad, and join the officer rally rather than starting your own. **Never dig alone:** post the spot in chat, and when someone else posts one, tap in straight away.

```kma-dodont
{
  "do": [
    "Hit the Alliance Boss at least once. The first pull only needs one hit.",
    "Join officer rallies on the boss for the leader damage bonus.",
    "Post every dig in alliance chat before starting it.",
    "Join other members' digs the moment you see them."
  ],
  "dont": [
    "Start a dig quietly and sit on it for two hours.",
    "Forget the Alliance Boss because it had no timer in mail.",
    "Worry about faction on the Alliance Boss. It does not apply.",
    "Let dig gifts sit past 24 hours."
  ]
}
```

## Quick answers

**My squad is weak. Is the boss worth my time?** Yes. One hit earns the first reward pull.

**Why wait for helpers on a dig?** With one digger it takes 2 hours. With five it takes under 5 minutes, and every helper is rewarded.

**Is Alliance Excavation the same as Alliance Expedition?** No. [Alliance Expedition](#/alliance-expedition) is a fight through six Blight Camps. Excavation is digging.

Related: [Cheese Trap](#/cheese-trap) · [Alliance Expedition](#/alliance-expedition) · [Covert Operations and Falcon Quests](#/covert-falcon) · [Rallies and Marches](#/rallies)
