---
id: cheese-trap
title: Cheese Trap
category: events
summary: Two 30-minute rally windows on a trapped target. Donate Mouse Lure for up to +25% damage, bring two lineups, and keep a rally marching the whole time.
tags: cheese trap, rally, cheese thief, cheese rat, mouse lure, gearstone, offline joining
updated: 2026-09-13
---

```kma-event
{
  "kind": "Alliance event",
  "icon": "combat",
  "art": "img/store/slay-rats.jpg",
  "headline": "Thirty minutes of nonstop rallies on a trapped target. **Rally count and lure buff** decide the damage.",
  "facts": [
    ["Opens", "Server day 4 · Sanctuary 6"],
    ["Who", "20 alliance members to activate a trap"],
    ["Format", "Trap I and Trap II, 30 minutes each, one at a time"],
    ["Fight", "Rallies only; the target does not attack"]
  ],
  "rewards": ["Diamonds", "Gearstone", "Speedups", "Refined Iron", "Alliance resources"]
}
```

> **Unverified name:** guide sites disagree on what you fight here. Some say you rally **Cheese Thieves** in waves, others say you summon one **Cheese Rat**. Player videos in Russian and Portuguese all show **one rat per trap** that cannot be killed and is hit for 30 minutes, which matches the single-target description this page follows. No source shows the English label on screen. Check the event screen.

Cheese Trap is one of the first alliance events a new server gets. Officers schedule two traps, members donate **Mouse Lure** to buff damage, and then the alliance hits the trapped target with rallies for half an hour per trap. The target is effectively immortal: players describe HP in the billions, so the fight is about **how much damage** you deal, not about killing it. There is nothing to defend and no enemy alliance. What decides your rewards is **how many rallies the alliance lands in 30 minutes** and **how high the lure buff is** when they land.

## How it works

```kma-steps
{
  "title": "The three phases",
  "steps": [
    { "label": "Selection", "text": "R4 or R5 sets the **start time and difficulty** for Trap I and Trap II. A trap not scheduled by **22:00 server time** on the last day expires." },
    { "label": "Preparation", "text": "Members donate **Mouse Lure**. Each trap has its own counter, up to **+25% damage**. Players report about a day and a half of feeding before a trap is ready." },
    { "label": "Extermination", "text": "Each trap runs for **30 minutes**, one at a time. The target never attacks; it only takes rally hits." },
    { "label": "Rewards", "text": "Personal rewards by your damage on each trap. Alliance rewards by the total damage of both traps." }
  ]
}
```

### Mouse Lure buff

```kma-bars
{
  "title": "Rally damage bonus from Mouse Lure donations",
  "unit": "% damage",
  "rows": [
    ["15 lures", 3],
    ["20 lures", 7],
    ["25 lures", 12],
    ["30 lures", 18],
    ["35 lures", 25, "the cap"]
  ],
  "highlight": "35 lures",
  "note": "Counted per trap. Every donation also pays the donor (Alliance Contribution in the datamine; a player reports 500 Alliance Coins each). Past 35 the damage stops rising. Buffs reset after the event."
}
```

<div data-widget="calc-lure"></div>

### The rallies

```kma-tiles
{
  "tiles": [
    ["30 min", "per trap", "Trap I, then Trap II"],
    ["3 min", "per rally", "plus march time both ways"],
    ["2", "lineups per player", "one marching, one queued"],
    ["45 to 50", "rallies per window", "when everyone runs two lineups"]
  ]
}
```

- **Start with one weak hero.** A player tip: rally leaders open with a single weak hero so they lose almost no troops, and members fill the rally with their main squads, from the top of the list down.
- **Who leads matters.** A rally led by an R4 adds **+2.5%** damage. One led by the R5 or a title holder adds **+5%**. A rally started by a regular member gets no bonus, so members join rather than start.
- **Two lineups.** Keep one squad marching while the other sits queued in the next rally. That is how the alliance fits 45 to 50 rallies into one window.
- **Offline members still count.** If you are offline, your strongest squad joins a rally on its own **20 seconds before it closes**, if a slot is free. Turn on offline joining before the trap starts.
- A member who takes part in Trap I **cannot join Trap II**. Players confirm this in practice, so officers split the alliance between the two. Traps can run at different times of day, for example a morning and an evening slot.
- **Stay near the trap.** Guide sites advise moving inside alliance territory, close to the trap, before it starts, so marches are short.

### Trap levels

Your trap level rises with the **total alliance damage** over the event, and it is capped by server age. Even a very strong alliance cannot open level 10 before day 120.

| Level | Opens on | Alliance damage to unlock | Personal damage for 10× reward |
|---|---|---|---|
| 1 | Day 1 | 0 | 20M |
| 2 | Day 1 | 44M | 48M |
| 3 | Day 7 | 170M | 110M |
| 4 | Day 14 | 530M | 190M |
| 5 | Day 21 | 1.4B | 440M |
| 6 | Day 30 | 3.8B | 900M |
| 7 | Day 45 | 8B | 1.4B |
| 8 | Day 60 | 14B | 2.2B |
| 9 | Day 90 | 25B | 3.2B |
| 10 | Day 120 | 42B | 4.2B |
| 11 | Era day 80 | 60B | 5.76B |
| 12 | Era day 80 | 103.68B | 8.8B |

A higher level asks noticeably more damage from every member for the same number of personal rewards, but its rewards are bigger.

> **Unverified:** thresholds differ between sources. The datamine gives 20M personal damage for 10 rewards at level 1; one guide site says the level 1 personal track caps at 12M. Players quote top personal tiers from 12M to 550M depending on trap level. Check the reward tab on your own trap.

## Rewards

Rewards run on **two tracks**. The personal track follows your own damage on a trap. The alliance track adds up the damage of both traps and pays every member.

```kma-bars
{
  "title": "Level 1 personal track: diamonds per threshold",
  "unit": "diamonds",
  "rows": [
    ["Any hit", 45, "+3 speedups, 200 Gearstone"],
    ["1M damage", 55, "+5 speedups, 340 Gearstone"],
    ["2M damage", 60, "+8 speedups, 480 Gearstone"],
    ["3M damage", 70, "+10 speedups, 560 Gearstone"],
    ["5M damage", 75, "+11 speedups, 640 Gearstone"]
  ],
  "highlight": "Any hit",
  "note": "Each threshold also pays Refined Iron (7 to 21) and General Resource Supply. Personal rewards multiply in steps, up to 10 rewards at 20M damage on level 1."
}
```

| Track | Counts | Pays |
|---|---|---|
| Personal | Your damage on one trap | 5-minute speedups, diamonds, Gearstone, Refined Iron, resource supplies. Arrives by mail after the event |
| Alliance | Total damage of both traps | Resources and Gearstone for every member, in phases (players report 5) |
| Top damage bonus | The member with the most damage on each trap | The alliance reward multiplied **2 to 10 times**, depending on their personal damage |

The top-damage bonus is the only place in this event where one member gets far more than the rest. It is worth giving it to the alliance's strongest hitter on each trap.

> **Note:** since the 2 July 2026 update, new Cheese Traps can no longer be placed in Cursed Land (official update notes).

## The KMA plan

1. **Officers schedule both traps well before 22:00 server time on the last day**, at a time most members are online.
2. **Donate lures early** so each trap reaches at least 25 lures (+12%) before it starts, and 35 (+25%) if the alliance can.
3. **Split the alliance.** Trap I members cannot join Trap II, so officers assign who goes where and make sure each trap gets its 20.
4. **Officers lead, members join.** R5 and title holders start rallies for the +5% bonus; R4s fill in at +2.5%.
5. **Two lineups, full 30 minutes.** The last minutes count as much as the first. One player guide says to stop once you reach the top personal tier; KMA's view is to keep going if the alliance track or the trap level still needs damage, because that pays everyone.
6. **One top hitter per trap.** Let the strongest member on each trap take the top-damage bonus rather than two big hitters splitting one trap.

> **KMA:** The recommended plan is to join the trap an officer assigns you with **two lineups**, stay for the full 30 minutes, and turn on offline joining if you might drop out. Donate Mouse Lure as soon as preparation opens.

```kma-dodont
{
  "do": [
    "Donate **Mouse Lure** before the trap starts; the buff helps every rally.",
    "Bring two lineups so one is always marching.",
    "Join officer rallies for the leader bonus.",
    "Stay until the timer ends."
  ],
  "dont": [
    "Join Trap I if officers wanted you on Trap II. You cannot switch later.",
    "Start your own rally. It gets no leader bonus and splits the alliance.",
    "Lead a rally with your full squad. One weak hero is enough to open it.",
    "Run one lineup only. It halves your rally count.",
    "Leave the scheduling to the last evening. An unscheduled trap expires at 22:00 server time."
  ]
}
```

## Quick answers

**I will be offline. Can I still help?** Yes. Your strongest squad joins a rally on its own 20 seconds before it closes, if a slot is free.

**How much Mouse Lure is enough?** 35 per trap for the +25% cap. Anything past 35 still pays Alliance Contribution but adds no damage.

**Why is our trap level stuck?** Levels need both enough total alliance damage and enough server age. Level 3 cannot open before day 7, level 10 not before day 120.

Related: [Rallies and Marches](#/rallies) · [Alliance Boss and Excavation](#/alliance-boss-excavation) · [Time zones](#/time-zones) · [Every Event at a Glance](#/events-calendar)
