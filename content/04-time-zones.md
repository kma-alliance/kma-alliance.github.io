---
id: time-zones
title: Time Zones and Reset Times
category: start
summary: Server time is UTC-2 and the daily reset is 00:00 server time. Live clocks, every fixed event time in your zone, and how to write times in alliance mail.
tags: time zone, server time, reset, UTC, UTC-2, schedule, daily reset, elixir scramble, cheese trap
updated: 2026-09-13
---

```kma-tiles
{
  "tiles": [
    ["UTC-2", "server time", "the clock every in-game timer runs on"],
    ["00:00", "daily reset, server time", "which is 02:00 UTC"],
    ["Mon to Sat", "Alliance Duel days", "a new theme at each reset, no Duel on Sunday"],
    ["09 18 23", "Elixir Scramble windows", "server time, 30 minutes each"]
  ]
}
```

KMA has members on every continent, so a time in alliance mail means nothing unless it says which clock. The game runs on **server time**, which sits **two hours behind UTC**. Every reset, event window and timer follows it, not your phone. This page shows the clocks side by side and converts the fixed event times into your own zone.

## The three clocks

| Clock | What it is | Used for |
|---|---|---|
| **Server time** | UTC-2 | Everything in the game: the daily reset, Duel days, event windows |
| UTC | World standard time | A neutral reference in alliance mail |
| Your time | Your phone's clock | When you actually need to be online |

No source says whether server time shifts for daylight saving, so watch the in-game clock around those dates. **Your** offset from it does change if your country uses daylight saving time, and the live clocks below handle that for you.

## What happens at the daily reset

At **00:00 server time** (02:00 UTC) the game starts a new day:

```kma-steps
{
  "title": "At 00:00 server time",
  "steps": [
    { "label": "Duel day rolls", "when": "Mon to Sat", "text": "The Alliance Duel moves to the next day's theme. Items spent before the reset score for the **old** day." },
    { "label": "Daily tasks refresh", "text": "Daily quests and daily battle pass tasks start over." },
    { "label": "New day of events", "text": "Weekly events such as the Sunday Quiz of Wisdom follow the server calendar, so the server date is the one that counts." }
  ],
  "note": "Near the reset, check the countdown in the event window. The in-game timer is always the final word."
}
```

> **Note:** since the 30 July 2026 update, the game's interface shows times in **your local time zone by default** (official update notes). The reset itself still happens at 00:00 server time, which is 02:00 UTC; the game is just converting it for you. When you post a time in alliance mail, still write server time and UTC so everyone reads it the same way.

> **Note:** Some outside guides, including one site that calls itself official, say Duel points reset at "00:00 UTC". KMA members have checked it in-game: the reset lands at 02:00 UTC, which means the server clock is UTC-2, and that is what this site uses. If the countdown in your game disagrees with the clock below, change the offset in the widget; it is saved on your device.

## Live clocks and converter

<div data-widget="timezones"></div>

## Fixed times on the server clock

```kma-bars
{
  "title": "Fixed times, in hours after the daily reset",
  "unit": "hour of the server day",
  "rows": [
    ["Daily reset", 0, "00:00 server · 02:00 UTC"],
    ["Elixir Scramble 1", 9, "09:00 server · 11:00 UTC"],
    ["Elixir Scramble 2", 18, "18:00 server · 20:00 UTC"],
    ["Cheese Trap deadline", 22, "22:00 server · 00:00 UTC next day"],
    ["Elixir Scramble 3", 23, "23:00 server · 01:00 UTC next day"]
  ],
  "highlight": "Daily reset",
  "note": "Each Elixir Scramble window lasts 30 minutes. The Cheese Trap deadline applies on the final day of the event: a trap not scheduled by then expires."
}
```

| What | Server time | UTC | Notes |
|---|---|---|---|
| Daily reset and Duel day roll | 00:00 | 02:00 | Every day |
| [Elixir Scramble](#/elixir-scramble) | 09:00, 18:00, 23:00 | 11:00, 20:00, 01:00 next day | 30 minutes each |
| [Cheese Trap](#/cheese-trap) scheduling deadline | 22:00 | 00:00 next day | Final day of the event |
| [Expedition](#/expedition) windows | Sunday, Tuesday, Thursday | | 48 hours each; start hour not published |
| [Quiz of Wisdom](#/quiz) | Sunday | | Exact time on the event tab timer |

Many event windows also have a toggle that shows their schedule in your local time. Use it to double-check.

## Converting a time by hand

```kma-steps
{
  "title": "Officer posts \"Hunt Battle 20:00 server\"",
  "steps": [
    { "label": "Server to UTC", "text": "Add 2 hours: **22:00 UTC**." },
    { "label": "UTC to you", "text": "Add or subtract your own offset. London in summer (UTC+1): 23:00. New York in summer (UTC-4): 18:00." },
    { "label": "Check the date", "text": "Manila (UTC+8) is 06:00 **the next morning**. Crossing midnight is where most mistakes happen." }
  ]
}
```

## The KMA plan

> **KMA:** When you post an event time, write it as server time **and** UTC, for example "Hunt Battle 20:00 server / 22:00 UTC". Members can then read this page for their own zone. Officer-started events (Hunt Battle, Expedition, Cheese Trap, Undead Siege, Pandemic Experience bosses) work best at the hour with the most members online; the "Right now there" column in the widget helps pick it.

```kma-dodont
{
  "do": [
    "Write every time as **server** and **UTC**.",
    "Spend Duel items **before** 00:00 server if they score today.",
    "Set the widget offset once if your in-game clock does not match."
  ],
  "dont": [
    "Post a bare time like \"8pm\" with no clock.",
    "Assume the reset is at midnight on your phone.",
    "Forget the date change when a time crosses midnight for you."
  ]
}
```

## Quick answers

**What time is the reset for me?** Look at "Server time" in the widget and the reset table under it. For quick maths: 00:00 server is 02:00 UTC.

**Why is the in-game day different from mine?** The game runs on server time (UTC-2) for every player, wherever they live.

**Does server time change for summer?** No source says so either way. Your own local offset may shift, which the widget handles; if the in-game clock ever disagrees, change the widget offset.

Related: [Daily Checklist](#/daily-checklist) · [Alliance Duel](#/alliance-duel) · [Every event at a glance](#/events-calendar)
