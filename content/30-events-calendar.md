---
id: events-calendar
title: Every Event at a Glance
category: events
summary: The whole game on one page. A day-by-day week, the Sanctuary level each event opens at, and a linked table of every alliance, kingdom and solo event with who starts it, what it needs and when it runs.
tags: events, calendar, schedule, weekly, index, sanctuary unlocks, overview
updated: 2026-09-13
---

Use this page to answer one question fast: **what is on today, and do I qualify?** Every row links to the full guide. Times are **server time (UTC-2)**, and the day rolls at 00:00 server time. The [Time Zones](#/time-zones) page converts that to your clock.

```kma-tiles
{
  "tiles": [
    ["00:00", "server time daily reset", "UTC-2, when Duel days roll"],
    ["6", "Alliance Duel days", "Monday to Saturday"],
    ["2", "Demon King days", "Wednesday and Saturday"],
    ["48 h", "Undead Siege cooldown", "the alliance event with a hard timer"]
  ]
}
```

## The week

```kma-steps
{
  "title": "A KMA week, day by day",
  "steps": [
    { "label": "Sunday", "when": "Prep day", "text": "**Quiz of Wisdom.** Expedition arenas refresh. No Duel today: bank Falcon Quests and send gatherers so they land after reset." },
    { "label": "Monday", "when": "Duel day 1: Raven", "text": "Raven upgrades, Raven Essence and map gathering score. Alliance Shop refresh is reported on Mondays. Elixir Scramble registration opens." },
    { "label": "Tuesday", "when": "Duel day 2: Construction", "text": "UR caravans and Covert Ops, long builds. Expedition arenas refresh." },
    { "label": "Wednesday", "when": "Duel day 3: Tech", "text": "Research and chests. **Demon King**: ten attacks with the counter faction. Elixir Scramble registration closes." },
    { "label": "Thursday", "when": "Duel day 4: Hero", "text": "Hero shards, tickets and Antitoxin. Expedition arenas refresh. Elixir Scramble teams are matched." },
    { "label": "Friday", "when": "Duel day 5: Preparation", "text": "Training and promotion. **Elixir Scramble** fights at 09:00, 18:00 or 23:00 server time." },
    { "label": "Saturday", "when": "Duel day 6: Raid", "text": "Attack only assigned targets. **Demon King** again. Weekend Boss attempts are open at the weekend." }
  ],
  "note": "Every day: Survival Battle rounds, Crystal Cluster Valley windows, 5 free Arena fights, Covert Ops, Falcon Quests and caravans."
}
```

> **Tip:** on a new server, [Your server's first 60 days](#/new-server) lists the day each of these first opens.

**Not on a fixed weekday:** the [Royal City Scramble](#/royal-city) runs weekly from server day 27, but no source ties it to one day, so check the event screen. Guide sites put [Kingdom War](#/kingdom-war)'s points stage on Sunday to Friday and its battle on Saturday, which datamined rules dispute. Officer-started events (Hunt Battle, Alliance Expedition, Cheese Trap, Undead Siege, Pandemic Experience bosses, Thief Leader rallies) are announced in alliance mail with a server time.

## When you qualify

```kma-bars
{
  "title": "Sanctuary level each event opens at",
  "unit": "Sanctuary level",
  "rows": [
    ["Final Dawn", 5, "new servers"],
    ["Top Healer, Quiz, Cheese Trap", 6, "Alliance Expedition needs 10 members at 6+"],
    ["Survival Battle, Arena", 7],
    ["Demon King, Wandering Phantom", 8],
    ["Alliance Duel, Canyon Conquest, Caravans", 10, "official notes say Canyon Conquest needs 15+"],
    ["Undead Siege", 13, "stage 1 covers Sanctuary 13 to 15"],
    ["Elixir Scramble, Crystal Valley, Royal City", 15],
    ["Expedition", 16, "Warrior arena first"]
  ],
  "highlight": "Alliance Duel, Canyon Conquest, Caravans",
  "note": "Sanctuary 10 is the jump that opens the alliance's biggest weekly events. Some events also need an alliance rank or server age; see the tables below."
}
```

## Alliance events

| Event | Started by | Needs | When | Guide |
|---|---|---|---|---|
| Alliance Duel | Automatic | Sanctuary 10, alliance in top 32 by Power | Weekly, Mon to Sat | [Alliance Duel](#/alliance-duel) |
| AvA (players' name for the Alliance Duel) | Automatic | First Monday on or after server day 8 | Same server until day 29, then cross-server | [AvA](#/ava) |
| Alliance League | Automatic | Kingdom 7+ weeks old, top 16 alliances | Seasonal, on top of the Duel | [Alliance League](#/alliance-league) |
| Hunt Battle | R4 or R5 | 20+ members | Once per event, 5 waves | [Hunt Battle](#/hunt-battle) |
| Alliance Expedition | R4 or R5 | 10+ members at Sanctuary 6 | 6 camps, 3 attempts each | [Alliance Expedition](#/alliance-expedition) |
| Cheese Trap | R4 or R5 | Server day 4, 20 members | Two 30-minute traps | [Cheese Trap](#/cheese-trap) |
| Alliance Boss and Excavation | Alliance | Boss level 3 from server day 7 | Boss levels weekly; digs any time | [Alliance Boss and Excavation](#/alliance-boss-excavation) |
| Undead Siege | R4 or R5 after 300,000 clues | 48 h in alliance, active in last 72 h | 48-hour cooldown | [Undead Siege](#/undead-siege) |
| Elixir Scramble | R4 or R5 roster | Sanctuary 15, top 32 alliance | Register Mon to Wed, fight Fri | [Elixir Scramble](#/elixir-scramble) |
| Thief Hunt | Automatic; R4 or R5 rally Leaders | – | 3 days, roughly every 2 to 3 weeks; first around server day 20 | [Thief Hunt](#/thief-hunt) |
| Pandemic Experience | Automatic; R4 or R5 summon bosses | Enough members at high difficulty | Every two weeks | [Pandemic Experience](#/pandemic-experience) |
| Canyon Conquest | Registration | 15 members at Sanctuary 15+ | From server days 15 to 21, 5 rounds | [Canyon Conquest](#/canyon-conquest) |
| Crystal Cluster Valley | Automatic | Sanctuary 15 | Three 30-minute windows a day from week 3 | [Crystal Cluster Valley](#/crystal-valley) |

> **Unverified:** the Alliance League's Study Scroll payouts may be per season rather than weekly. See the League guide before counting on them.

## Kingdom and server events

| Event | Needs | When | Guide |
|---|---|---|---|
| Kingdom War | Announced server day 29 | Points stage, then a battle over the Royal City | [Kingdom War](#/kingdom-war) |
| Royal City Scramble | Sanctuary 15, alliance holds a level 6 city | Weekly from server day 27, 8 hours | [Royal City Scramble](#/royal-city) |
| King and court posts | Royal City winner | Standing buffs | [King and Court Posts](#/court-posts) |
| Demon King Blight | Sanctuary 8 | Wednesday and Saturday | [Demon King](#/demon-king) |
| Wandering Phantom | Sanctuary 8 | A day of Wandering Blights | [Wandering Phantom](#/wandering-phantom) |
| Revival Expedition League | Era of Revival | 55 days from Era day 1 | [Revival Expedition League](#/kingdom-clash) |

## Solo events and daily systems

| Event | Needs | When | Guide |
|---|---|---|---|
| Survival Battle | Sanctuary 7 | Daily, 6 rounds of 4 hours | [Survival Battle](#/survival-battle) |
| Top Healer | Sanctuary 6 | 7 days in a row, from about server day 4 | [Top Healer](#/top-healer) |
| Quiz of Wisdom | Sanctuary 6 | Sundays | [Quiz of Wisdom](#/quiz) |
| Arena | Sanctuary 7 | 5 free fights daily | [Arena](#/arena) |
| Expedition | Sanctuary 16 | Arenas refresh Sun, Tue, Thu | [Expedition](#/expedition) |
| Abyss Boss and Weekend Boss | – | Abyss per boss cycle; Weekend Boss at weekends | [Abyss and Weekend Boss](#/abyss-boss) |
| Mystic Treasure | – | Limited pirate event, about a week | [Mystic Treasure](#/mystic-treasure) |
| Seasonal events | – | Holiday windows of about 7 days | [Seasonal Events](#/seasonal) |
| Dawn Breakout (name unverified) | – | Schedule unknown; 3 runs of 5 levels | [Dawn Breakout](#/dawn-breakout) |
| Final Dawn (name unverified) | New server, Sanctuary 5 | First weeks of a server | [Final Dawn](#/final-dawn) |
| Hero Road (name unverified) | Squad Power gates from 770k | Schedule unconfirmed | [Hero Road](#/hero-road) |
| Trials and Hero Growth Tasks | – | Tasks tick off through normal play | [Trials and Growth Tasks](#/trials-growth) |
| Surprise Encounter and Wishing Wheels | – | 1 free call and 1 free wheel coin daily | [Surprise Encounter](#/surprise-encounter) |
| Caravans and raiding | Sanctuary 10 | Daily, 4 raids | [Caravans](#/caravans) |
| Covert Ops and Falcon Quests | Sanctuary 6 and 9 | Daily; Falcon board refreshes every 6 hours | [Covert Ops and Falcon Quests](#/covert-falcon) |
| City expansion and exploration | Early Sanctuary levels | One-time 153-step track, 8-hour idle bank | [Exploration](#/exploration) |
| Era Covenant and Era of Revival | Servers about 130+ days old | 56-day seasons | [Era Covenant and Era of Revival](#/era) |
| Rat Swarm | – | Tower defense inside your Sanctuary | [Rat Swarm](#/rat-swarm) |

## Quick answers

**Which events can I not afford to miss?** The ones that pay the whole alliance: Alliance Duel days, Demon King attacks in Kingdom War weeks, and any officer-started event you are eligible for.

**An event is not on my screen. Why?** Check its Sanctuary level in the chart above, then the server day or alliance rank it needs in the tables.

**Where do officer-started times appear?** In alliance mail, with a server time. Convert it on [Time Zones](#/time-zones).

Related: [Daily Checklist](#/daily-checklist) · [Time Zones](#/time-zones) · [Server Timeline](#/server-timeline) · [Alliance Duel](#/alliance-duel)
