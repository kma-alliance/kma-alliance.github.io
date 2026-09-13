---
id: research
title: Research Priorities
category: city
summary: Which research trees open when, which ones sell Power cheapest, the Alliance Duel nodes to buy first, and the exact path to the T10 troop node.
tags: research, research lab, study scrolls, alliance duel tree, elite troop, lv.10 soldier, construction master, tech power
updated: 2026-09-13
---

Research is slow, permanent and easy to waste. The Lab holds **348 nodes in 18 categories**, each node opens only after the one before it, and you cannot jump across branches. So the question is never "what is good?" but "what do I need **next**, and what is it blocking?" This page answers that in order.

```kma-tiles
{
  "tiles": [
    ["7", "Sanctuary level", "the Research Lab opens"],
    ["54,110", "Study Scrolls", "the whole Alliance Duel tree"],
    ["100 + 450", "scrolls first", "Super Rewards, then Best Rewards"],
    ["974M", "resources", "the single Lv.10 Soldier node"]
  ]
}
```

## Setup

- The **Research Lab** opens at Sanctuary 7. It first becomes a Sanctuary prerequisite at Sanctuary 11 (Lab 7), and from Sanctuary 12 to 30 the Lab must sit **one level below** the Sanctuary level you want. Keep it a step ahead so it never stalls your building.
- The **2nd Workbench** opens at Sanctuary 9 and gives a second research queue. Both queues should run around the clock.
- **Alliance Help** works on research. Ask every time you start one.

> **Unverified:** one guide site describes the second research queue as a small paid purchase rather than a free building. Check whether your 2nd Workbench asks for payment.

### When each tree opens

| Research Lab level | Trees that open |
|---|---|
| 1 | Development, Economy |
| 5 | Hero |
| 6 | Soldier |
| 8 | Squad 1 to Squad 4 |
| 10 | Alliance Duel |
| 13 | Full Development, Prosperous Economy |
| 15 | Caravan Transport |
| 20 | Elite Troop, Defensive Tactics |
| 21 | Offensive Tactics |
| 30 | Warrior, Ranger and Warlock Mastery |

These levels come from a fan database of the Lab. Player research videos name the same trees, including Full Development, Prosperous Economy and Elite Troops. Some older sites put the Alliance Duel tree at Lab 15; if you do not see it at 10, that is why.

## Cheapest Power

Not every tree buys Power at the same price. Datamined costs, in resources per point of Power:

```kma-bars
{
  "title": "Resources per point of Power, by tree",
  "unit": "resources",
  "rows": [
    ["Development", 794, "cheapest by far"],
    ["Economy", 2640, ""],
    ["Soldier", 12152, ""],
    ["Hero", 18065, "23 times the price of Development"]
  ],
  "highlight": "Development",
  "note": "Datamined. Every point of research Power also scores 10 points as Tech Power on Alliance Duel day 3."
}
```

That is why Development goes first for everyone: it is the cheapest Power in the Lab **and** it speeds up everything after it. It matters for [Survival Battle](#/survival-battle) and for the Tech day of the [Alliance Duel](#/alliance-duel).

Two things surprise people:

- **Construction Master** makes buildings **cheaper**, up to 5% off the resource cost over five levels. It does not make them faster, whatever some guide sites say.
- **Squad 1 and Squad 4** give the same bonuses and the same caps as Squad 2 and Squad 3, for about 310M resources and 38 days of queue. Squads 2 and 3 cost billions and thousands of days. Research the cheap pair first.

## Recommended order

<div data-widget="research-order"></div>

1. **Development**: build and research speed, Infirmary capacity, healing.
2. **Alliance Duel tree** as soon as you have Study Scrolls (below).
3. **Economy**, gathering branch first.
4. **Hero**, the faction of your Squad 1.
5. **Soldier**: guide sites all start with Load Training, then training speed and capacity, then ATK, DEF and HP.
6. **Squad 1**, then Squad 4 if you have the monthly pass.
7. **Full Development**: the **Extra Training Grounds** node (after Training Specialization III) gives you a fourth Training Ground. See [Troops](#/troops).
8. **Elite Troop**: only the nodes you need for your next tier.
9. Squads 2 and 3, Tactics, Caravan Transport last.

Spenders running both queues: keep one on the Alliance Duel tree and one on Development.

> **Unverified:** what **Load Training** actually does. Guide sites call it march size. Datamined leadership data shows research adds at most **20 soldiers per hero**, and "load" elsewhere in the game means how much a soldier carries when gathering. Read the node text before you rush it.

## The Alliance Duel tree

This tree costs **Study Scrolls only**: no grain, timber or herbs. The full branch is **54,110 scrolls** across 14 nodes, so for most players it fills over months. Buy in this order:

| Node | Scrolls | Why |
|---|---|---|
| Super Rewards | 100 | Opens Duel milestone chest tiers 4 to 6 |
| Best Rewards | 450 | Opens chest tiers 7 to 9 |
| Arena Expert | 3,800 | Doubles every point source in the Duel |
| Training Points, Kill Points | to level 6 | Needed, with Arena Expert at level 20, for Top Rewards |
| Top Rewards | Lab 20 | Its first level opens the **Elite Troop** tree |
| Everything else | the rest | Multiplies specific point sources |

The first two nodes are the most important scrolls you will ever spend. Without them the top chests **stay locked even when you earn the points**. Arena Expert comes next because an alliance without it scores about half as much from identical play.

**Where scrolls come from:** the weekly Duel result (**840** for a win, **420** for a loss), [Alliance League](#/alliance-league) season ranks (the biggest payout), Arena seasons, growth goals and alliance event stages. A small alliance that loses every week takes a very long time here, which is one reason KMA needs everyone on every Duel day.

The **Caravan Transport** tree also costs scrolls, **81,950** of them. Together the two trees need 136,060. Leave Caravan Transport until your T10 path is done.

## The road to T10

```kma-steps
{
  "title": "What the Lv.10 Soldier node needs",
  "steps": [
    { "label": "Alliance Duel tree", "when": "Lab 10+", "text": "Super Rewards, Best Rewards, then **Arena Expert** to level 20 and Training Points and Kill Points to level 6." },
    { "label": "Top Rewards", "when": "Lab 20", "text": "Its first level opens the **Elite Troop** category. This is the gate most players miss." },
    { "label": "Elite Troop", "when": "Lab 20", "text": "Work only along the path to the T10 node. Maxing the whole tree costs about **twice** what access needs." },
    { "label": "Lv.10 Soldier", "when": "Sanctuary 30 + Training Grounds 30", "text": "One indivisible level: **194.7M grain, 194.7M timber, 584.4M herbs**, worth 36,810 Power. Save herbs for months." }
  ],
  "note": "The node costs and the Arena Expert, Training Points and Kill Points requirements come from datamined and fan database data. Check the prerequisite list on the node itself before spending."
}
```

## Duel day 3 is research day

```kma-bars
{
  "title": "Alliance Duel day 3 (Tech): what research scores",
  "unit": "points",
  "rows": [
    ["Use 1 Study Scroll", 300],
    ["1 minute of research speedup", 50],
    ["+1 Tech Power", 10]
  ],
  "highlight": "Use 1 Study Scroll",
  "note": "Base values before the Arena Expert node. Speedups also score on days 5 and 6, but research speedups belong on day 3."
}
```

Start long research on day 2 so you can finish it with speedups on day 3, and spend your Study Scrolls on Wednesday, not the moment they arrive.

```kma-dodont
{
  "do": [
    "Keep both queues busy and ask for **Alliance Help** on every research.",
    "Buy **Super Rewards** and **Best Rewards** the day you have 550 scrolls.",
    "Research Squad 1 and Squad 4 before Squads 2 and 3.",
    "Save Study Scrolls and research speedups for **Duel day 3**.",
    "Start stockpiling herbs early for the Lv.10 Soldier node."
  ],
  "dont": [
    "Spend scrolls on Caravan Transport before your T10 path is done.",
    "Max the Elite Troop tree when you only need the path to T10.",
    "Buy Construction Master expecting faster builds. It makes them cheaper.",
    "Let the Lab fall behind the Sanctuary. It is a hard prerequisite from Sanctuary 11."
  ]
}
```

## Quick answers

**What do I research first?** Development. It is the cheapest Power and speeds up everything else.

**Why can I not open the top Duel chests?** You are missing Super Rewards (tiers 4 to 6) or Best Rewards (tiers 7 to 9) in the Alliance Duel tree.

**I have Training Grounds 30. Why no T10?** You also need Sanctuary 30 and the **Lv.10 Soldier** node, which sits behind Top Rewards in the Alliance Duel tree.

**When should I use Study Scrolls?** On Duel day 3, where each one scores 300 points.

Related: [Troops and Training](#/troops) · [Alliance Duel](#/alliance-duel) · [Alliance League](#/alliance-league) · [Sanctuary Priority](#/sanctuary-priority)
