---
id: exploration
title: City Expansion and Exploration
category: solo
summary: A one-time 153-step expansion track around your city worth 145 Recruit Tickets, and a second 8-hour idle bank that grows to 14 million Antitoxin per collection.
tags: exploration, city expansion, explorer's camp, explorer dungeon, recruit tickets, antitoxin, idle income
updated: 2026-09-13
---

```kma-event
{
  "kind": "Progression",
  "icon": "star",
  "art": "img/shots/screenshot-town-rebuild.jpg",
  "headline": "Clear the next plot **whenever your squad can**, and empty the second idle bank **before it fills at 8 hours**.",
  "facts": [
    ["Opens", "Early Sanctuary levels · Explorer's Camp"],
    ["Format", "153 one-time steps · 8-hour idle bank"],
    ["Fight", "Steps gated by recommended Power"],
    ["Cost", "Free. It only costs squad strength and log-ins"]
  ],
  "rewards": ["Recruit Tickets", "Hero XP", "Antitoxin", "Celia and Claire shards", "Gearstone"]
}
```

This page covers two quiet sources of free progress. The **expansion track** is a run of numbered plots around your Sanctuary: each step pays once, and the track stalls wherever your squad stops being strong enough. The **second idle bank** fills for 8 hours next to your normal idle income. Neither costs anything. What decides how much you get is **squad Power** for the track and **how often you log in** for the bank.

> **Unverified name:** neither "Exploration Chain" nor "Explorer Dungeon" appears in a player video or on any official page. Both come from a site that translates its own names from Russian. The numbers are datamined and reliable; the labels are not. In-game this is the sequence of numbered plots around your Sanctuary that you clear to expand the city.

## How the expansion track works

There are **153 steps**, opened one after another. Every step pays once and never repeats, so the whole track is a one-time payout that every player gets regardless of spending. Nearly two thirds of the steps are fights against the plague; the rest are hero meetings and finds. Fights show a recommended Power. When you fall short, the track waits until your next round of upgrades.

```kma-bars
{
  "title": "What the full track pays in items",
  "unit": "items",
  "rows": [
    ["Resource Supply", 850],
    ["Gearstone", 700],
    ["Recruit Tickets", 145, "from 29 steps, first at step 4"],
    ["Celia shards", 85],
    ["Claire shards", 70],
    ["Tempered Steel", 70]
  ],
  "highlight": "Recruit Tickets",
  "note": "On top of this: 6,907,500 hero XP, 1,331,700 herbs, 999,200 timber and 978,500 grain."
}
```

**Recruit Tickets are the prize.** A ticket costs 398 diamonds in the shop, so 145 tickets are worth about 57,700 diamonds. Only Kingdom War season rewards and paid bundles give more.

## How the second idle bank works

The Explorer's Camp opens the way in. The bank holds **8 hours** of output and you can empty it from the first minute. It mostly fills with **Antitoxin**, plus grain. The rate climbs as you clear its secret levels and stops rising at rate step 597.

```kma-bars
{
  "title": "Antitoxin per hour as the bank grows",
  "unit": "Antitoxin/h",
  "rows": [
    ["Step 1", 24000, "24,000 grain/h"],
    ["Step 100", 136920, "51,480 grain/h"],
    ["Step 200", 245100, "78,900 grain/h"],
    ["Step 300", 582420, "107,280 grain/h"],
    ["Step 400", 956280, "126,480 grain/h"],
    ["Step 500", 1370040, "163,800 grain/h"],
    ["Step 597", 1750020, "200,040 grain/h · the cap"]
  ],
  "highlight": "Step 597",
  "note": "A full 8-hour bank at the cap is 14,000,160 Antitoxin in one collection."
}
```

```kma-tiles
{
  "tiles": [
    ["8 h", "until the bank is full", "anything after that is lost"],
    ["3", "visits a day to never cap"],
    ["500", "secret levels, each paying once"],
    ["371.7M", "Antitoxin from all secret levels", "plus 29.1M herbs, 16.8M grain and 16.8M timber"]
  ]
}
```

The camp has a second job: survivors assigned to it widen the collection window of your ordinary idle income.

> **Unverified:** sources disagree on two details. The datamined dungeon page says the camp opens the way in at Sanctuary 2, while the same site's building page and this site's [Sanctuary guide](#/sanctuary-priority) list the Explorer's Camp at Sanctuary 4. The building page also calls the payout hero XP where the dungeon page says Antitoxin. Check what your bank shows.

## The KMA plan

1. **Build the Explorer's Camp the day it unlocks.** It is cheap, needs no builder and starts the bank at once.
2. **Push the expansion track after every Power jump.** New hero levels, stars or gear are the moment to try the next plot.
3. **Collect the bank every time you collect idle income.** Morning, afternoon and before bed keeps it from capping.
4. **Keep clearing secret levels** even after the rate stops climbing. The one-time rewards are still worth it.

> **KMA:** the track's 145 Recruit Tickets are free for every player, spender or not. If your squad is stuck on a plot, ask in chat which heroes to level next rather than waiting for Power to arrive on its own.

```kma-dodont
{
  "do": [
    "Try the next plot after every upgrade session.",
    "Empty the bank at least **every 8 hours**.",
    "Assign survivors to the Explorer's Camp.",
    "Save Recruit Tickets from the track for Duel day 4 if you do not need them now."
  ],
  "dont": [
    "Leave the bank full overnight. It stops filling at 8 hours.",
    "Pour everything into buildings. The plots are gated by **squad** Power, which comes from heroes.",
    "Expect the track to refill. Every step pays only once."
  ]
}
```

## Quick answers

**Why can't I clear the next plot?** Your squad is under its recommended Power. Upgrade heroes and try again; the plot waits for you.

**Does the track reset each season?** No. Each of the 153 steps pays once, forever.

**Is the second bank the same as idle income?** No. It is a separate 8-hour bank next to it. Collect both.

**What is it called in the game?** Unconfirmed. This page says "expansion track" and "second idle bank" because no player video or official page shows the in-game label.

Related: [Resources](#/resources) · [Hero building](#/hero-building) · [Daily checklist](#/daily-checklist) · [First week](#/first-week)
