---
id: kingdom-war
title: Kingdom War (KvK / SvS)
category: kingdom
summary: Your whole kingdom against a matched kingdom. A points stage decides who attacks, then a battle over the Royal City and its towers. What is solid, what sources still disagree on, and how KMA plays it.
tags: kingdom war, kvk, svs, server vs server, kingdom vs kingdom, new server, kingdom points, throne, temple, towers, royal city, cross-server
updated: 2026-09-13
---

```kma-event
{
  "kind": "Kingdom event",
  "icon": "crown",
  "art": "img/store/survive-the-plague.jpg",
  "headline": "Every player in the kingdom scores for one team. **Win the points stage** to attack, then take the towers before the center.",
  "facts": [
    ["Opens", "Announced on server day 29, two days after the first Royal City Scramble"],
    ["Format", "Kingdom versus kingdom, matched by server age, in a knockout bracket"],
    ["Who", "Every player in the kingdom. Alliances from one kingdom fight on the same side"],
    ["Fight", "Points stage first, then a battle over the Royal City"]
  ],
  "rewards": ["UR Curio Chests", "Universal Curio Shards", "Fame Medals", "Exclusive weapon fragments", "Recruit Tickets", "Gearstone"]
}
```

> **Unverified:** sources agree on the shape of Kingdom War but not on the war stage's rules. Guide sites describe a 4-hour Saturday assault that needs 100% occupation of the defender's Royal City. Datamined client rules describe a hold-time war instead: 1 point per second holding the Temple or Throne, 7,200 points to win, corner towers speeding the count. Durations conflict too, even inside the datamine. The table under "What sources still disagree on" lists every conflict. Check your kingdom's Kingdom War screen before planning around a time.

Kingdom War (players say KvK, some say SvS) is the event where your server stops fighting itself. The official patch notes of 26 March 2026 added it as an event where players "complete Quests to earn Points and help their Kingdom achieve victory". What decides it is **turnout**: points come from ordinary events that every member plays, and the stage that follows is won by the kingdom that shows up together.

## On a new server: the road to your first KvK

A new server does not start in Kingdom War. It grows into it, and the build-up is where wars are won.

```kma-steps
{
  "title": "From a new server to your first Kingdom War",
  "steps": [
    { "label": "AvA on your own server", "when": "First Monday after day 8", "text": "Alliance Duels start inside your server with no raid day. See [AvA](#/ava)." },
    { "label": "First Royal City Scramble", "when": "Day 27", "text": "Decides your first King. The kingdom goes into war with that leadership." },
    { "label": "Kingdom War announced", "when": "Day 29", "text": "Duels and caravans go cross-server. The announcement comes two days after the first Royal City Scramble." },
    { "label": "First battles", "when": "About days 35 to 48", "text": "Points week Sunday to Friday, battle on Saturday. The exact first Saturday varies by server." },
    { "label": "Brackets grow", "when": "Later rounds", "text": "Young servers are grouped with servers of the same age. One server's first bracket was **4 kingdoms** opened within two days of each other; later brackets are 8." }
  ]
}
```

```kma-tiles
{
  "tiles": [
    ["29", "server day", "Kingdom War announced"],
    ["35–48", "server days", "first battles, on a Saturday"],
    ["4", "kingdoms", "in one young server's first bracket"],
    ["8", "kingdoms", "in later brackets"]
  ]
}
```

On one server that opened on 20 April 2026, Kingdom War was announced around day 29, the first round was fought around day 41 to 48, and the final of its 4-kingdom bracket (servers #177 to #180, all opened within two days) came around day 55.

> **Unverified:** datamined data lists nine battle zones opening on server days 2, 11, 18, 25, 46, 74, 102 and 130, with groups growing from 4 kingdoms to 32. That list names only eight days for nine zones and no player source confirms the days, so do not plan around it. Sources also disagree on the bracket: single elimination in the datamine, a losers' bracket in one player's March 2026 guide.

> **KMA:** Use days 1 to 28 to get ready. Target **T9 troops** and a deep Infirmary before the first war Saturday, keep every Duel week at full effort because Duel wins become Kingdom War points, and settle city and throne diplomacy before the first Royal City Scramble on day 27.

## How it works

```kma-steps
{
  "title": "One round of Kingdom War",
  "steps": [
    { "label": "Matched", "text": "Your kingdom is grouped with kingdoms of a similar server age. Open **Kingdom War, Match Information, Groupings** to see them: yours in blue, the current enemy in red." },
    { "label": "Points stage", "text": "Both kingdoms score from Alliance Duel, Demon King Blight, Elixir Scramble, Survival Battle and plundering enemy caravans. Guide sites put this Sunday to Friday." },
    { "label": "Roles set", "text": "The points winner becomes the **Attacker** and moves into the enemy kingdom. The loser defends." },
    { "label": "War stage", "text": "The fight for the defender's Royal City, its towers and its throne. A Russian player guide calls it the Throne War." },
    { "label": "Next round", "text": "The winner advances. Guide sites and that player guide say losers are matched against other losers, so a defeat does not end your event." }
  ],
  "note": "During Kingdom War your Alliance Duel opponents come from the enemy kingdom, so every Duel day is part of the war."
}
```

<div data-widget="kvk-week"></div>

The weekly strip above follows the guide-site version of the week. Treat the Saturday details as the part most likely to differ on your server.

### The points stage

Seven sources of Kingdom Points are listed by guide sites, and a Russian player guide also counts "all 7 ways". The numbers below come from one guide site, so treat them as a guide to what matters, not exact values.

```kma-bars
{
  "title": "Kingdom Points per result",
  "unit": "points",
  "rows": [
    ["Demon King: kingdom damage win", 250000, "your kingdom's total damage beats theirs"],
    ["Demon King: personal No. 1", 150000, "one player tops the damage ranking"],
    ["Elixir Scramble win", 50000],
    ["Alliance Duel win", 30000, "per alliance that wins its Duel"],
    ["Alliance Duel MVP", 6000],
    ["Survival Battle No. 1", 2200, "one guide site only"],
    ["Caravan plunder", 120, "each success, 4 attempts a day"]
  ],
  "highlight": "Demon King: kingdom damage win",
  "note": "The single biggest line is a team total. Ten Demon King Blight attacks from every member is worth more than any one whale."
}
```

To plunder enemy caravans, open **Kingdom War, Match Information, Groupings** and tap **View** next to the red kingdom. That moves your camera into their territory, where you pick caravans your squad can beat.

### The war stage

This is what the datamined rules describe. Player videos confirm the pieces: towers, a throne, and players holding towers alone. They do not confirm the numbers.

```kma-map
{
  "title": "The war stage objective (schematic)",
  "w": 640, "h": 330,
  "nodes": [
    { "id": "t1", "label": "Tower", "sub": "+25% scoring", "x": 100, "y": 70, "kind": "tower", "short": "T" },
    { "id": "t2", "label": "Tower", "sub": "+25% scoring", "x": 540, "y": 70, "kind": "tower", "short": "T" },
    { "id": "c", "label": "Royal City", "sub": "Temple or Throne: 1 point a second", "x": 320, "y": 165, "kind": "objective", "short": "7200", "r": 34 },
    { "id": "t3", "label": "Tower", "sub": "+25% scoring", "x": 100, "y": 260, "kind": "tower", "short": "T" },
    { "id": "t4", "label": "Tower", "sub": "+25% scoring", "x": 540, "y": 260, "kind": "tower", "short": "T" }
  ],
  "links": [["t1", "c", "", "dashed"], ["t2", "c", "", "dashed"], ["t3", "c", "", "dashed"], ["t4", "c", "", "dashed"]],
  "legend": [["objective", "The point that scores"], ["tower", "Corner tower, speeds your count"]],
  "caption": "A schematic from datamined rules, not a real map. Holding the center scores 1 point a second. Each corner tower you hold adds 25%, so all four double the rate and cut the time to 7,200 from two hours to one."
}
```

```kma-tiles
{
  "tiles": [
    ["7,200", "points to win", "two hours of clean holding"],
    ["+25%", "per corner tower", "cross-server war only"],
    ["×2", "with all four towers", "victory in one hour"],
    ["51,000", "points per enemy Sanctuary knocked off the map", "why shields go up early"]
  ]
}
```

The lesson is the same under both descriptions: **towers first**. In the Royal City Scramble a turret held by another side fires on the city's defenders, and the datamine says towers speed your Kingdom War score. Rushing the center while the enemy owns the towers loses either way.

### What sources still disagree on

| Question | Guide sites | Datamined rules |
|---|---|---|
| How the war is won | Attackers reach 100% occupation of the defender's Royal City | First to 7,200 hold points on the Temple or Throne |
| How long it lasts | 4 hours, Saturday | Rules text says 480 minutes cross-server and 60 local, which contradicts the 2 hours that 7,200 points implies |
| Group size | 8 kingdoms, losers play losers | 9 battle zones by server age, 4 to 32 kingdoms, knockout bracket of 2, 4 or 8 |
| Shields | No shields during the war | Raise your shield before the war. Player videos show shields in use and dropping mid-fight |

## Rewards

Two reward tracks run side by side. The kingdom's final rank pays everyone, and your personal season rank pays you.

| Kingdom rank | UR Curio Chests | Universal Curio Shards | UR Level Supplies (each of Timber, Grain, Herb) | Fame Medals |
|---|---|---|---|---|
| 1 | 3 | 18 | 18 | 55,000 |
| 2 | 2 | 16 | 16 | 45,000 |
| 3 | 1 | 14 | 14 | 35,000 |
| 4 | 1 | 12 | 12 | 30,000 |
| 5 | 1 | 10 | 10 | 27,000 |
| 6 to 8 | 1 | 8 | 8 | 24,000 / 22,000 / 20,000 |

Rank 1 also pays a 13-day **King of Battle** avatar frame to the King and 7-day Legion of Glory cosmetics to the King's alliance. A guide site says a win streak doubles victory rewards and one loss resets it.

```kma-bars
{
  "title": "Personal season rank: Gearstone",
  "unit": "Gearstone",
  "rows": [
    ["Rank 1", 21500, "30 weapon fragments, 100 Recruit Tickets"],
    ["Rank 3", 15000, "25 fragments, 80 tickets"],
    ["Rank 10", 12500, "20 fragments, 60 tickets"],
    ["Rank 20", 10000, "15 fragments, 50 tickets"],
    ["Rank 50", 8000, "10 fragments, 45 tickets"],
    ["Rank 100", 7000, "5 fragments, 40 tickets"],
    ["Below 100", 5000, "3 fragments, 30 tickets"]
  ],
  "highlight": "Below 100",
  "note": "Datamined. Season badges also run from 2,000 at rank 1 to 600 below rank 100. The bottom rung is highlighted because it is where most members land, and it is far from empty."
}
```

## The KMA plan

Kingdom War is won in the points stage by ordinary members and in the war stage by discipline.

> **KMA:** The recommended plan. **All week:** finish every Duel day, hit Demon King Blight ten times on Wednesday and Saturday with the counter faction, and use all 4 caravan plunders every day. **Before the war:** shield up in advance and be online at the start. **During the war:** take and hold the towers the God of War names, reinforce the structure you are assigned, and heal in small batches.

Plan on alliances staying separate. In the developers' log of 27 April 2026, letting allied alliances on the same server reinforce each other during Kingdom War was still a player request under review.

```kma-dodont
{
  "do": [
    "Save Duel items for the matching day. Your Duel opponent is the enemy kingdom.",
    "Raise your shield **before** the war starts. Any scout or attack blocks shielding for 15 minutes.",
    "Scout before you attack, and pick targets your squad can actually beat.",
    "Heal in small batches so speedups stretch across the whole fight.",
    "Use a Random Teleport if a big enemy locks onto your city."
  ],
  "dont": [
    "Rush the center while the enemy holds the towers.",
    "Free-fight on your own instead of reinforcing the assigned tower.",
    "Hit much stronger Sanctuaries. Every loss feeds their score.",
    "Leave troops out on the map or on the wall when you go offline."
  ]
}
```

## Quick answers

**Is Kingdom War the same thing as "Kingdom Clash"?** Almost certainly. "Kingdom Clash" is a guide-site name for the quest-point event announced in March 2026, and the official patch notes added Kingdom War that same week, describing exactly that. See [Kingdom Clash](#/kingdom-clash).

**I am weak. Does my part matter?** Yes. The biggest point line is the kingdom's total Demon King damage, and even the lowest season rank pays Recruit Tickets and Gearstone.

**Can I attack players from my own server?** Not during Kingdom War. Guide sites say the whole kingdom fights on one side with no friendly fire.

**When exactly is the war?** Sources disagree, from a 4-hour Saturday window to longer hold-time rules. Read the Kingdom War screen and follow the time officers post.

Related: [Royal City Scramble](#/royal-city) · [Demon King](#/demon-king) · [Alliance Duel](#/alliance-duel) · [Revival Expedition League](#/kingdom-clash)
