---
id: hunt-battle
title: Hunt Battle
category: events
summary: Five waves of Blights inside alliance territory, one launch per event and a fixed 15-second march. Pick the highest difficulty the alliance can clear completely, then keep every squad moving.
tags: hunt battle, blight, alliance, waves, gearstone, alliance coins
updated: 2026-09-13
---

```kma-event
{
  "kind": "Alliance event",
  "icon": "swords",
  "art": "img/store/slay-rats.jpg",
  "headline": "Waves of Blights spawn on alliance land. The more of each wave you **kill before its timer**, the bigger the chest.",
  "facts": [
    ["Opens", "Started by R4 or R5, once per event"],
    ["Who", "Alliance of 20+ members"],
    ["Format", "5 minutes of prep, then 5 waves"],
    ["Cost", "Fixed 15-second march each way"]
  ],
  "rewards": ["Gearstone", "Grain and timber", "Herbs", "Alliance Coins"]
}
```

> **Note:** **Hunt Battle** is the official name: the official update notes of 30 July 2026 list it with Cheese Trap as a major event that needs a reservation or scheduled activation, and both now show in the in-game **Event Schedule**. It is a different thing from the "Eliminate Blight" task list some walkthroughs show, and from [Wandering Phantom](#/wandering-phantom), whose Blights roam the whole kingdom.

This is the alliance's own Blight fight. An officer launches it, Blights appear inside alliance territory, and everyone marches on them wave after wave. The event fires **once per event period** and the difficulty is locked for the whole run, so two decisions made before launch decide almost everything: **when** it starts (how many people are online) and **which difficulty** you pick.

## How it works

After launch there is a **5-minute preparation**. Spawn points appear across alliance territory. When prep ends, the waves arrive one after another, each stronger than the last. Each wave has a time window, and the reward is based on **how many Blights the alliance kills in that window**.

```kma-map
{
  "title": "Where the fight happens",
  "w": 640, "h": 300,
  "nodes": [
    { "id": "near", "label": "Member nearby", "x": 90, "y": 80, "kind": "ally", "short": "M" },
    { "id": "far", "label": "Member far away", "x": 90, "y": 230, "kind": "ally", "short": "M" },
    { "id": "land", "label": "Alliance territory", "sub": "spawn points appear here", "x": 330, "y": 150, "kind": "base", "short": "KMA", "r": 34 },
    { "id": "s1", "label": "Blights", "sub": "30 per wave", "x": 540, "y": 70, "kind": "spawn", "short": "30" },
    { "id": "boss", "label": "Wave boss", "sub": "1 per wave", "x": 540, "y": 230, "kind": "enemy", "short": "B" }
  ],
  "links": [["near", "land", "15 s", "arrow"], ["far", "land", "15 s", "arrow"], ["land", "s1", "", "dashed"], ["land", "boss", "", "dashed"]],
  "legend": [["ally", "Your territory, wherever it is"], ["spawn", "Ordinary Blights"], ["enemy", "The wave boss"]],
  "caption": "A schematic, not a real map. Every march in this event takes a fixed 15 seconds each way, so distance from alliance land does not matter and a squad can hit several targets per wave."
}
```

```kma-tiles
{
  "tiles": [
    ["5", "waves", "each one stronger than the last"],
    ["30 + 1", "per wave", "30 Blights and a boss"],
    ["15 s", "march each way", "no matter where you live"],
    ["500 / 2,500", "Alliance Coins shown", "per Blight / per boss"]
  ]
}
```

> **Unverified:** the wave count is not settled. The datamined event rules describe **5 waves** of 30 Blights plus a boss across 9 difficulties. Two guide sites describe **15 waves**, with focus fire in waves 6 to 10 and buffs before wave 11. Check the wave counter in-game and tell an officer which it is.

### A run, step by step

```kma-steps
{
  "title": "From launch to the last chest",
  "steps": [
    { "label": "Pick difficulty", "text": "R4 or R5 chooses one of 9 difficulties. It covers **all waves** and cannot be changed mid-run." },
    { "label": "Launch", "text": "Only once per event. The alliance needs more than 20 members." },
    { "label": "5-minute prep", "text": "Spawn points appear on alliance land. Get every squad healed and ready." },
    { "label": "Waves 1 to 5", "text": "30 Blights and a boss each. Kill as many as you can before the wave's time runs out." },
    { "label": "Wave chests", "text": "Every wave pays a chest of **Gearstone** and resources, bigger each wave. A player video shows the reward popup listing every member." }
  ]
}
```

## Rewards

Each wave pays a chest of Gearstone, grain, timber and herbs, and the chest grows with both the wave number and the difficulty. From difficulty 1 to 9 the Gearstone almost triples, grain and timber grow about four times, and herbs about eight times.

```kma-bars
{
  "title": "Gearstone for all five waves, by difficulty",
  "unit": "Gearstone",
  "rows": [
    ["Difficulty 1", 4000, "600 / 720 / 800 / 880 / 1,000"],
    ["Difficulty 2", 5000],
    ["Difficulty 3", 6000],
    ["Difficulty 4", 6700],
    ["Difficulty 5", 7600, "1,100 / 1,400 / 1,500 / 1,700 / 1,900"],
    ["Difficulty 6", 8500],
    ["Difficulty 7", 9300],
    ["Difficulty 8", 10100],
    ["Difficulty 9", 11100, "1,700 / 2,000 / 2,200 / 2,400 / 2,800"]
  ],
  "highlight": "Difficulty 5",
  "note": "Datamined totals for a full clear. The last wave pays the most, so an unfinished final wave costs you the biggest chest."
}
```

| Difficulty | Gearstone (5 waves) | Grain or timber per wave | Herbs per wave |
|---|---|---|---|
| 1 | 4,000 | 1.3M to 2.1M | 405k to 675k |
| 3 | 6,000 | 2.3M to 3.9M | 915k to 1.5M |
| 5 | 7,600 | 3.2M to 5.3M | 1.7M to 2.8M |
| 7 | 9,300 | 4.1M to 6.8M | 2.7M to 4.5M |
| 9 | 11,100 | 5.1M to 8.5M | 3.3M to 5.5M |

On top of the chests, each ordinary Blight shows **500 Alliance Coins** and each boss **2,500**.

> **Unverified:** the same datamine contradicts itself here. Its event page lists the bigger chests above for higher difficulties, but a second page claims the payout is identical on all nine levels and only the monsters' damage grows (from 10,000 to 30,000). Until an officer compares two runs, treat the table as the best available figure and never pick a difficulty you cannot finish.

## The KMA plan

**Rewards follow Blights killed, not waves reached.** A full clear one difficulty lower beats an unfinished run higher, because a missed final wave throws away the biggest chest.

1. **Launch at peak online time.** The event fires once. Guide sites suggest announcing the window a day ahead, in server time and UTC, and confirming headcount just before launch.
2. **First run: pick one difficulty below your guess.** Move up next time only after a full clear.
3. **Show up during prep.** The 5 minutes are for healing and choosing squads, not for logging in.
4. **Call targets.** One shot-caller in chat names the Blight. If a target survives a march, everyone near it hits it until it dies, then the next.
5. **Boss together.** The wave boss is worth five Blights in coins. Send the strongest squads at it together.
6. **No idle squads.** With a 15-second march, a squad that sits at home for a minute has wasted several attacks.

> **KMA:** The recommended plan is one launch at the alliance's busiest hour, a difficulty the median member can handle, and one shot-caller in chat. Officers fire alliance buffs before the last waves, not after a wave goes wrong.

```kma-dodont
{
  "do": [
    "Be online **before prep ends**, with squads healed.",
    "Send the next march the moment a squad returns.",
    "Follow the shot-caller, and finish targets that are already damaged.",
    "Put your strongest squads on the wave boss."
  ],
  "dont": [
    "Spread marches over many Blights so none dies before the wave timer.",
    "Choose a difficulty for the strongest member instead of the median.",
    "Launch when fewer than 20 people are online. There is no second attempt.",
    "Skip it because you live far from alliance land. The march is 15 seconds for everyone."
  ]
}
```

## Quick answers

**I live on the other side of the map. Can I still help?** Yes. Every march in this event takes a fixed 15 seconds each way.

**Can we change difficulty after wave 2 goes badly?** No. The difficulty is chosen once for the whole run.

**Is this the same as Wandering Phantom?** No. That is a kingdom-wide day of roaming Wandering Blights. This one is fought in waves on alliance land and started by an officer.

**Why did we get less than the table says?** The chest depends on how many Blights died in each wave's window. Unkilled Blights cut the reward.

Related: [Wandering Phantom](#/wandering-phantom) · [Rallies and Marches](#/rallies) · [Time zones](#/time-zones) · [Every Event at a Glance](#/events-calendar)
