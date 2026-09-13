---
id: alliance-expedition
title: Alliance Expedition
category: events
summary: Six Blight Camps cleared in order with shared damage. Early hits make later hits stronger, so spend your three attempts where they open the next camp.
tags: alliance expedition, blight camps, skill badges, alliance coins, damage bonus, rankings
updated: 2026-09-13
---

```kma-event
{
  "kind": "Alliance event",
  "icon": "alliance",
  "art": "img/shots/screenshot-ruins.jpg",
  "headline": "Six camps in a chain. Every member's damage opens the next one, and **your own damage buffs your later attacks**.",
  "facts": [
    ["Opens", "Started by R4 or R5"],
    ["Needs", "10+ members at Sanctuary 6 or higher"],
    ["Format", "6 camps cleared in order, 40 to 60 monsters each"],
    ["Cost", "3 attempts per player"]
  ],
  "rewards": ["Skill Badges", "Alliance Coins", "Speedup bundles", "Study Scrolls", "Curio Chests"]
}
```

Alliance Expedition is a chain of six **Blight Camps** the whole alliance clears together. Each camp has a fixed pool of monsters, and every member's attacks chip away at it. Clear a camp and the next one opens, with a bigger payout. What decides success is **where the alliance spends its attempts**: on the camp that is actually open and needs the damage, not on a camp somebody else is about to finish anyway.

> **Note:** do not confuse this with the solo [Expedition](#/expedition), which is a personal difficulty ladder with its own shop, or with [Alliance Excavation](#/alliance-boss-excavation), which is a shared digging spot.

## How it works

```kma-steps
{
  "title": "The camp chain",
  "steps": [
    { "label": "Basic Shack", "text": "40 monsters. Clear chest: 500 Skill Badges, 2,500 Alliance Coins." },
    { "label": "Basic Camp", "text": "40 monsters. 1,000 badges, 5,000 coins." },
    { "label": "Intermediate Camp", "text": "50 monsters. 1,000 badges, 5,000 coins." },
    { "label": "Intermediate Fortress", "text": "50 monsters. 1,500 badges, 7,500 coins." },
    { "label": "Advanced Camp", "text": "60 monsters. **2,000 badges, 10,000 coins**, the biggest chest." },
    { "label": "Boss Fortress", "text": "A boss instead of monsters. No clear chest, but the damage still counts for the rankings." }
  ],
  "note": "Camps open in sequence. The alliance has to finish one before the next is available."
}
```

Every member gets **3 attempts**. An attempt is one fight against the open camp, and the damage you deal comes off that camp's pool.

> **Unverified:** guide sites say the 3 attempts refresh **daily**. The datamined event rules only say each member gets 3 attempts, which could mean per event, and no player video of this event was found. Check whether your attempt counter refills after the daily reset at 00:00 server time.

### Damage stacking

Your total damage across the event turns into a lasting damage bonus. It holds until the event ends, so the later camps get easier for everyone who hit early.

```kma-bars
{
  "title": "Damage bonus from your total event damage",
  "unit": "% bonus",
  "rows": [
    ["Under 2M", 0],
    ["2M to 5M", 2],
    ["5M to 10M", 4],
    ["10M to 16M", 6],
    ["16M to 25M", 8],
    ["25M and up", 10, "the cap"]
  ],
  "highlight": "25M and up",
  "note": "The bonus is personal and builds as you go, which is why using your early attempts matters even when a camp looks easy."
}
```

```kma-tiles
{
  "tiles": [
    ["6", "camps in order", "5 pay a chest, the last is a boss"],
    ["3", "attempts per player", "refresh rule unverified"],
    ["+10%", "max damage bonus", "at 25M total damage"],
    ["10+", "members to start", "Sanctuary 6 or higher"]
  ]
}
```

## Rewards

The Expedition pays through four separate pools. Camp chests come as each camp falls; the rankings are decided by damage.

| Pool | Who gets it | What it pays |
|---|---|---|
| Camp clear chests | The alliance, as each camp is cleared | Skill Badges and Alliance Coins, table above. A guide site adds Refined Iron, contribution and resources |
| Alliance progress ranking | Top 20 alliances on the server, by damage | Speedup bundles for every member |
| Server personal damage ranking | Top 500 players on the server | UR Curio Chests at the top, SSR supplies further down |
| Inside-alliance damage ranking | Top 10 in your alliance | Study Scrolls: 200, 100, 50, 20 |

```kma-bars
{
  "title": "Skill Badges per camp clear",
  "unit": "badges",
  "rows": [
    ["Basic Shack", 500],
    ["Basic Camp", 1000],
    ["Intermediate Camp", 1000],
    ["Intermediate Fortress", 1500],
    ["Advanced Camp", 2000, "also 10,000 Alliance Coins"],
    ["Boss Fortress", 0, "no chest; counts for rankings"]
  ],
  "highlight": "Advanced Camp",
  "note": "Clearing the first five camps pays 6,000 Skill Badges and 30,000 Alliance Coins in total."
}
```

## The KMA plan

1. **Pick a window when most members are online** and attack at the same times, so camps fall quickly and the next tier opens early.
2. **Strong hitters open, weaker members finish.** When a new camp opens, the biggest accounts hit it first to take most of its pool. Smaller accounts finish it off. This way nobody's attempt lands on a camp that is already nearly dead.
3. **Always hit the highest open camp.** Never spend an attempt on a lower camp.
4. **Use attempts early.** Your damage bonus only helps attacks that come after it.
5. **Push for top 20 on the server.** The speedup pool pays every member, so every attempt counts toward it.

> **KMA:** The recommended plan is to clear camps in order during a busy window, with officers calling in chat when a new camp opens. Put all three attempts on the **highest open camp**, and tell chat when a camp is close to dead so strong squads save their attempt for the next one.

```kma-lineup
{
  "title": "Monster-fight squad",
  "heroes": [
    ["arthur", "Tank", "The anchor of every squad. Damage reduction for the whole team."],
    ["bella", "Tank", "Reduces monster damage to the team. Farmable from the Alliance Shop."],
    ["stellar", "Healer", "Keeps the line alive and buffs team damage to monsters."],
    ["marlena", "Damage", "Top burst damage."],
    ["grenwald", "Damage", "His passive raises damage to monsters."]
  ],
  "alts": [["griffith", "instead of Bella, squad-wide monster damage reduction"], ["claire", "instead of Grenwald, single-target boss killer"]],
  "note": "The same monster squad the site recommends for Rat Swarm. Camps are PvE, so monster damage and monster damage reduction matter more than PvP picks."
}
```

```kma-dodont
{
  "do": [
    "Spend every attempt on the **highest open camp**.",
    "Attack early so your damage bonus builds for later attempts.",
    "Say in chat when a camp is nearly cleared.",
    "Bring your monster-damage heroes."
  ],
  "dont": [
    "Spend an attempt on a low camp that others will clear anyway.",
    "Hit a camp at 1% with your strongest squad. Save it for the next camp.",
    "Skip the Boss Fortress. It pays no chest, but its damage still counts for the rankings.",
    "Forget your attempts. Unused attempts add nothing to the alliance ranking."
  ]
}
```

## Quick answers

**I am weak. Is my attempt worth anything?** Yes. You finish camps the strong players opened, you add to the alliance ranking, and any damage over 2M starts your own bonus.

**Does the Boss Fortress pay anything?** No clear chest, but its damage counts toward the rankings.

**Is this the same as Alliance Excavation?** No. This is a camp-by-camp fight. Excavation is a digging spot that runs faster with more helpers.

Related: [Alliance Boss and Excavation](#/alliance-boss-excavation) · [Expedition](#/expedition) · [Squads and Team Comps](#/team-comps) · [Every Event at a Glance](#/events-calendar)
