---
id: rallies
title: Rallies and Marches
category: combat
summary: How rallies form, why they march at double speed, what leading pays versus joining, how march time is counted, and how KMA runs rallies without wasting squads.
tags: rally, march, march speed, auto rally, auto join, energy, stamina, god of war, blight, cheese trap, thief leader
updated: 2026-09-13
---

```kma-event
{
  "kind": "Core mechanic",
  "icon": "swords",
  "art": "img/store/slay-rats.jpg",
  "headline": "A rally stacks many squads into one hit and marches at **double speed**. Officers lead, everyone else fills the slots.",
  "facts": [
    ["Who", "One member starts it, alliance members join"],
    ["Cost", "20 energy for a monster rally, twice a solo hit"],
    ["Fight", "The combined Power of every squad that joined"],
    ["When", "Blights every day, plus Cheese Trap, Thief Hunt, Pandemic Experience and war days"]
  ],
  "rewards": ["Antitoxin", "Hero XP", "Alliance Chests", "Lion Coins"]
}
```

A rally is how an alliance kills things no single player can. One member picks a target, others add their squads, and the whole group marches and fights as one. Two things decide whether rallies go well: **who leads** (an officer-led rally hits harder on some targets and keeps squads on the right targets) and **how fast the squads get there**, which comes down to where you live and what march speed you have.

## How a rally comes together

```kma-map
{
  "title": "From call to hit",
  "w": 640, "h": 300,
  "nodes": [
    { "id": "lead", "label": "Officer starts it", "sub": "picks the target", "x": 100, "y": 70, "kind": "base", "short": "R4" },
    { "id": "you", "label": "Members join", "sub": "by hand or auto-join", "x": 100, "y": 230, "kind": "ally", "short": "YOU" },
    { "id": "rally", "label": "Rally assembles", "sub": "timer counts down", "x": 320, "y": 150, "kind": "node", "short": "R", "r": 30 },
    { "id": "tgt", "label": "Target", "sub": "Blight, boss, city", "x": 545, "y": 150, "kind": "objective", "short": "!" }
  ],
  "links": [["lead", "rally", "starts", "arrow"], ["you", "rally", "joins", "arrow"], ["rally", "tgt", "double-speed march", "arrow"]],
  "legend": [["base", "Rally leader"], ["ally", "Joining members"], ["objective", "What gets hit"]],
  "caption": "Every joined squad counts toward the fight. The recommended Power shown on a target is a guide, not an entry rule, because the rally adds up everyone's Power."
}
```

```kma-steps
{
  "title": "One rally, start to finish",
  "steps": [
    { "label": "Call", "text": "The leader opens a rally on a target. A monster rally costs **20 energy**, twice the 10 of a solo hit." },
    { "label": "Fill", "text": "Members send a squad into the free slots. Offline members with auto-join can drop in during the last 20 seconds." },
    { "label": "March", "text": "The rally marches at **double speed** compared with a solo attack on the same target." },
    { "label": "Fight", "text": "All squads fight together. Troop tier, hero level and leadership decide how much each squad adds." },
    { "label": "Pay out", "text": "The leader takes the main reward. Every participant gets a smaller reward of their own." }
  ]
}
```

## March speed: how travel time is counted

Every troop type in the game has the same base speed, so **army composition does not change march time**, and neither does what the squads are carrying. Without bonuses a march takes **7.2 seconds per tile**: 12 minutes per 100 tiles, and almost three hours across the full map (about 1,400 tiles).

Some marches are doubled. That is the single most useful fact about moving on the map.

```kma-bars
{
  "title": "Travel time for 100 tiles, no bonuses",
  "unit": "minutes",
  "rows": [
    ["Rally on a monster", 6, "doubled"],
    ["Rally on a player city", 6, "doubled"],
    ["World or weekend boss", 6, "doubled"],
    ["Gathering", 6, "doubled"],
    ["Solo attack on a monster", 12, "normal speed"],
    ["Solo attack on a city", 12, "normal speed"],
    ["Reinforcing an ally", 12, "normal speed"]
  ],
  "highlight": "Rally on a player city",
  "note": "A rally reaches a city twice as fast as a solo attack on the same city. Reinforcements are **not** doubled, so live close to the people you may need to defend."
}
```

### What makes marches faster

- **The Squad building** of the queue the march leaves from. Each Squad building adds march speed as it levels, from 0.7% at level 1 to 15.1% at level 30. This is the biggest single lever.
- **VIP**: +5% at VIP 5, +8% at VIP 8, +13% at VIP 12, +20% at VIP 20. See [Spending and VIP](#/spending-vip).
- **Alliance War Research**, which includes rally speed, and territory bonuses inside alliance land.
- **Passes, posts and skins**: the weekly pass adds +5%, and some court posts and city skins add a little too.

Percentages of the same kind add together, and time is divided by the total. **+100% speed halves the trip**; a further +100% only takes off another sixth. Chasing speed past the first 100% gives less and less.

> **Note:** Event Blights in the [Hunt Battle](#/hunt-battle) ignore all of this. They use a fixed 15-second march each way, so distance does not matter there.

## Leading versus joining

| | Leading | Joining |
|---|---|---|
| Energy | 20 on a monster rally | Thief Leader joins cost none |
| Reward | The main reward | A smaller participant reward |
| Damage bonus | R4 +2.5%, R5 and title holders +5% on Cheese Trap and the Alliance Boss | None |
| Risk | Your squad sets the size of any garrison you win | Your squad is away from home |

```kma-bars
{
  "title": "Blight rally rewards: leader vs participant",
  "unit": "resources",
  "rows": [
    ["Level 30 leader", 616794, "recommended Power 7,916,000"],
    ["Level 30 joiner", 64000],
    ["Level 20 leader", 410859, "recommended Power 2,714,000"],
    ["Level 20 joiner", 43000],
    ["Level 10 leader", 159412, "recommended Power 551,500"],
    ["Level 10 joiner", 17000],
    ["Level 1 leader", 16851, "recommended Power 10,500"],
    ["Level 1 joiner", 3000]
  ],
  "note": "Joining still always pays: the loot you get is yours. Killing Elite and Wandering Blights by rally also drops Alliance Chests for the whole alliance."
}
```

> **Unverified:** The officer damage bonus (R4 +2.5%, R5 and the four title holders +5%) is documented for **Cheese Trap** and the **Alliance Boss**. No source confirms it on Blights, Thief Leader or cities. Treat officer-led rallies there as better for coordination, not proven to hit harder.

### The one-hero trick

For rally-spam targets, officers often start a rally with a **single hero with a small troop load**. The leader loses almost nothing, the officer bonus still applies where it exists, and the members' squads do the work.

> **Warning:** Do not use the one-hero trick when the rally is meant to **capture and hold** a city or turret. The garrison you can keep there is capped by the rally size of whoever took it. A tiny leader squad means a tiny garrison.

## Auto-join while you are offline

Auto-join is unlocked through alliance research. When it is on and you are offline, your **strongest squad joins a rally on its own 20 seconds before it closes**, if a slot is still free.

> **Unverified name:** Player guides describe limiting auto-join to rallies started by R4 and R5. Check your rally settings for that option; if it exists, use it, so your squad does not get pulled into random rallies.

> **Warning:** Turn auto-join **off** before [Undead Siege](#/undead-siege) and any defense night. Your garrison has to stay home.

## What you can rally

| Target | What to know |
|---|---|
| Elite and Wandering Blights | World map. Wandering Phantom from Sanctuary 8. The heaviest Elite Blights ask for over 26 million recommended Power, so nobody solos them. |
| [Cheese Trap](#/cheese-trap) target | 20 members to activate. The trapped target does not fight back, it only takes rally hits. Donated Mouse Lures add up to +25% damage. Each rally is 3 minutes, so two lineups fit 45 to 50 rallies into the 30-minute window. |
| Alliance Boss | Any hit gives one reward pull; every further 2,000,000 damage adds another, up to 6. Faction bonus does not apply. |
| Thief Leader | [Thief Hunt](#/thief-hunt). No energy cost to join. The leader gets **78 Lion Coins** and each joiner **36**; the rally also pays Raven Fruit, resources, 20 diamonds and a Recruit Ticket. |
| Pandemic Experience monsters | When a personal-challenge monster is too strong, call a rally and the alliance finishes it. |
| Cities and fortresses | You can only attack a city next to one you already hold. Take the turrets first: a turret held by another alliance fires on the city's defenders. |
| Player territories | Duel day 6 and Kingdom War targets, assigned by the God of War only. |

Demon King is **not** rallyable: 10 solo attacks a day. See [Demon King](#/demon-king).

## Energy

```kma-tiles
{
  "tiles": [
    ["120", "energy cap", "anything above it is lost"],
    ["6 min", "per point", "10 an hour, 240 a day"],
    ["12 h", "empty to full", "two logins a day keep it moving"],
    ["2", "free Stamina claims a day", "4 hours apart"]
  ]
}
```

Solo targets cost 10 energy, monster rallies 20. The game calls it **Stamina** in some menus and in Alliance Duel scoring. The Premium Monthly Pass adds 100 a day.

## The KMA plan

Rallies are the most repeated task in battle passes (89 of 675 pass tasks ask you to join or start one), so they pay twice. The plan is simple: **officers lead, members fill, nobody free-lances**.

> **KMA:** Keep **Squad 1** as your rally squad: highest troop tier, faction-matched heroes, most leadership. Leave auto-join on day to day and switch it off on defense nights. Rallies on player targets are called by the God of War only. Counter-pick the defender's main faction when you can; see [Hero tier list](#/hero-tier-list).

```kma-dodont
{
  "do": [
    "Join officer rallies with your **best squad**; contribution scales with the troops you send.",
    "Live inside the alliance core. Rallies are doubled, but reinforcements are not.",
    "Bring two lineups to Cheese Trap so one is always marching.",
    "Spend energy before the bar fills; regeneration stops at 120."
  ],
  "dont": [
    "Start your own rally on a player without the God of War's call.",
    "Leave auto-join on during Undead Siege or a defense night.",
    "Use a one-hero leader on a city or turret you want to keep.",
    "Chase march speed past +100%; each extra point saves less time."
  ]
}
```

## Quick answers

**Does a faster troop type march faster?** No. Every troop type has the same base speed, and cargo does not slow you down.

**Why did my solo hit take twice as long as the rally?** Rallies on monsters and cities march at double speed. Solo attacks and reinforcements do not.

**Is it worth joining if I am weak?** Yes. Your squad adds Power, you get your own participant reward, and it counts toward pass tasks.

**Why did my squad leave while I slept?** Auto-join sent your strongest squad into a rally in its last 20 seconds. Turn it off before defense nights.

Related: [Cheese Trap](#/cheese-trap) · [Defense, Garrison and Shields](#/defense) · [Thief Hunt](#/thief-hunt) · [Alliance System](#/alliance-system)
