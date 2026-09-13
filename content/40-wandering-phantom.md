---
id: wandering-phantom
title: Wandering Phantom
category: events
summary: A world-map day of Wandering Blights. Join rallies up to the level the alliance can kill, take your three first-kill rewards, and keep your territory defended.
tags: wandering phantom, wandering blight, rally, raven fruit, kingdom quests, recruit ticket
updated: 2026-09-13
---

```kma-event
{
  "kind": "Kingdom event",
  "icon": "event",
  "art": "img/store/survive-the-plague.jpg",
  "headline": "Wandering Blights flood the map for a day. **Rally them in chains** and every kill pays the whole server a little.",
  "facts": [
    ["Needs", "Sanctuary 8"],
    ["Where", "World map, Special Event tab"],
    ["Fight", "Rallies on Wandering Blights, levels 100 to 190"],
    ["Who", "Every player on the server"]
  ],
  "rewards": ["Raven Fruit", "Recruit Ticket", "Survivor Recruit Ticket", "Antitoxin", "Kingdom Quest chests"]
}
```

Wandering Phantom is a world-map event in the Special Event tab. For one day, **Wandering Blights** roam the map in large numbers and attack territories more often than usual. The event is named Wandering Phantom; the monster is the Wandering Blight. What decides how much you get is simple: **how many rallies you join**, how high a level your alliance can kill, and whether you remembered to defend your own territory while you were out hunting.

## How it works

Wandering Blights also show up on normal days as ordinary rally targets. On Wandering Phantom day they keep spawning all day, and each one stays on the map for hours. There is no alliance start button and nothing to register for. You open the map, find a Blight, and rally it.

```kma-tiles
{
  "tiles": [
    ["10 min", "between spawns", "Blights keep arriving all day"],
    ["70", "on the map at once", "the cap for the whole server"],
    ["4 h", "each Blight lives", "then it leaves if nobody kills it"],
    ["3×", "first-kill reward", "claimable 3 times on event day instead of once"]
  ]
}
```

Wandering Blights come in **10 levels, from 100 to 190**, and a guide site reports that higher levels appear as the server kills more. Each level shows a recommended Power for the rally. That number is the combined Power of everyone in the rally, not a gate on one player, which is why a mid-sized account can still take part in high-level kills by joining.

```kma-bars
{
  "title": "Recommended rally Power by Blight level",
  "unit": "Power",
  "rows": [
    ["Lv 100", 1393000],
    ["Lv 110", 3399500],
    ["Lv 120", 6783000],
    ["Lv 130", 8995500],
    ["Lv 140", 12680500],
    ["Lv 150", 16981000],
    ["Lv 160", 21454000, "first kill on the server pays a UR Survivor"],
    ["Lv 170", 26404000],
    ["Lv 180", 29968500],
    ["Lv 190", 34311000]
  ],
  "highlight": "Lv 160",
  "note": "Combined Power of the rally. Datamined figures from the game client."
}
```

### Blights that reach your territory

On event day Wandering Blights hit territories more often. When one breaks in, your city is **not relocated** and idle soldiers die at a reduced rate compared with a player attack. That is softer than a real attack, but it is still a loss you can avoid.

> **Warning:** Rallying other people's Blights does not protect your own territory. Keep a garrison set before you send every squad out.

## Rewards

Wandering Phantom pays in three layers. You get the first two by joining rallies; the third arrives by mail after the event.

```kma-steps
{
  "title": "Where the rewards come from",
  "steps": [
    { "label": "Each kill", "text": "Every rally kill drops Raven Fruit, Antitoxin, resources, a **Recruit Ticket**, a Survivor Recruit Ticket, an SR Gear Supply and 2 Speedup Supplies." },
    { "label": "Kingdom Quests", "text": "28 server-wide quests. When the server hits a target, **every eligible Doctor** gets the chest, even if you joined one rally." },
    { "label": "Damage ranking", "text": "After the event, your rank by total damage pays SR supplies by mail." }
  ]
}
```

### Per-kill drops by level

| Blight level | Raven Fruit | Antitoxin | Grain and timber | Herbs |
|---|---|---|---|---|
| 100 | 1,000 | 4,000 | 11,000 each | 4,000 |
| 130 | 1,150 | 15,000 | 46,000 each | 15,000 |
| 160 | 1,290 | 65,000 | 91,000 each | 46,000 |
| 170 | 1,360 | 106,000 | 107,000 each | 54,000 |
| 190 | 1,600 | 279,000 | 157,000 each | 101,000 |

Every level also drops the same fixed extras: 1 Recruit Ticket, 1 Survivor Recruit Ticket, 1 SR Gear Supply and 2 Speedup Supplies. Antitoxin grows the fastest, so higher levels are worth far more to hero building than the Raven Fruit numbers suggest.

### Kingdom Quests

| Counter | Targets | What it pays |
|---|---|---|
| First kill of each level | Lv 100 to 190, 10 quests | SR Survivor (100 to 120), SSR Survivor (130 to 150), UR Survivor (160), 50 Stamina (170+), plus Level Supplies |
| Blights killed on the server | 20 to 100, 9 quests | 50 Stamina or 5 Survivor Recruit Tickets, plus speedups |
| Doctors who joined a kill | 50 to 500, 9 quests | 20 diamonds each, plus training and healing speedups |

The kill and participant counters usually close on their own on an active server. The **first-kill** quests do not: somebody on the server has to actually kill that level. That is where a strong alliance helps everyone.

### Damage ranking

Rank 1 gets 50 SR supplies of each type plus 5 general supplies. Ranks 51 to 200 get 10 of each plus 1.

## The KMA plan

1. **Climb the levels in order.** Start rallies at the lowest level the alliance kills cleanly, then step up one level at a time. A failed rally wastes everyone's march and energy.
2. **Chase the first kills.** The Lv 160 first kill pays every eligible player a UR Survivor. If KMA can reach it, it is the single most valuable kill of the day.
3. **Keep rallies chained.** With a spawn every 10 minutes there is always a target. One officer calls the next Blight in chat as soon as a rally lands.
4. **Everyone joins, nobody sits out.** Each join also pushes the server's participant counter, which pays diamonds to all.
5. **Leave a garrison home.** Blights attack more often today.

> **KMA:** On Wandering Phantom day, the recommended plan is officer-led rallies from the lowest clean level upward, with members joining every call. Leaders use the one-hero trick from [Rallies](#/rallies) so members' squads do the work, and officer rallies get the leader damage bonus.

> **Tip:** Save the Raven Fruit you collect for **Alliance Duel day 1 (Raven)**, where it scores. Feeding it to the Raven today earns nothing extra.

```kma-dodont
{
  "do": [
    "Use your **three first-kill claims**; they are the best rewards of the day.",
    "Join officer rallies with your strongest squad for the leader damage bonus.",
    "Check your garrison before sending every squad out.",
    "Bank Raven Fruit for Duel day 1."
  ],
  "dont": [
    "Start a rally on a level the alliance cannot kill. A failed rally wastes every member's march.",
    "Leave auto-rally on for any rally, so your squads are away when a Blight hits home.",
    "Assume the first-kill quests close on their own. Someone has to kill each level.",
    "Confuse this with the [Hunt Battle](#/hunt-battle), which is fought in waves inside alliance territory."
  ]
}
```

## Quick answers

**I am too weak for level 100. Can I still get rewards?** Yes. Join rallies: the recommended Power is for the whole rally. You also get Kingdom Quest chests when the server hits its targets.

**Does a Blight attack move my city?** No. During the event your territory stays where it is, and fewer soldiers die than in a player attack.

**What does the "3 times" first-kill reward mean?** On event day the first-kill reward for a Blight can be claimed up to three times instead of once.

**Do Wandering Blights count for anything else?** Yes. Defeating Wandering Blights on Falcon Quests gives Undead Siege clues. See [Undead Siege](#/undead-siege).

Related: [Rallies and Marches](#/rallies) · [Hunt Battle](#/hunt-battle) · [Alliance Duel](#/alliance-duel) · [Every Event at a Glance](#/events-calendar)
