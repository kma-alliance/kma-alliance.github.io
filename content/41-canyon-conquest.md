---
id: canyon-conquest
title: Canyon Conquest
category: events
summary: A three-lane alliance league where nobody loses troops. Win two lanes of three, and let officers decide where your Power does the most good.
tags: canyon conquest, lanes, glory medals, fame medals, league, alliance event
updated: 2026-09-13
---

```kma-event
{
  "kind": "Alliance event",
  "icon": "flag",
  "art": "img/store/survive-the-plague.jpg",
  "headline": "Three lanes, fifteen fighters each. Take **two lanes** and the round is yours.",
  "facts": [
    ["Opens", "Server day 15 · Sanctuary 10"],
    ["Who", "15 registered members with level 10+ territories"],
    ["Format", "6 alliances per group, 5 round-robin rounds"],
    ["Cost", "No troops die, no march queue used"]
  ],
  "rewards": ["Glory Medals", "Fame Medals", "League promotion"]
}
```

Canyon Conquest is the easiest alliance event to get right and the easiest to throw away. Nothing you own is at risk: soldiers do not die and your marches stay free. What decides it is **where each member's Power is placed**, and that is a job for officers, not for luck.

## How a round is won

Every alliance in the round splits its fighters across three lanes: Left, Mid and Right. Each lane is fought on its own, and the round is decided by how many lanes you take.

```kma-map
{
  "title": "One round: three separate fights",
  "w": 640, "h": 300,
  "nodes": [
    { "id": "us", "label": "KMA", "sub": "15 per lane", "x": 90, "y": 150, "kind": "base", "short": "KMA", "r": 30 },
    { "id": "l", "label": "Left lane", "x": 320, "y": 60, "kind": "node", "short": "L" },
    { "id": "m", "label": "Mid lane", "x": 320, "y": 150, "kind": "node", "short": "M" },
    { "id": "r", "label": "Right lane", "x": 320, "y": 240, "kind": "node", "short": "R" },
    { "id": "them", "label": "Opponent", "sub": "15 per lane", "x": 550, "y": 150, "kind": "enemy", "short": "VS", "r": 30 }
  ],
  "links": [["us","l"],["us","m"],["us","r"],["l","them"],["m","them"],["r","them"]],
  "legend": [["base","Your alliance"],["enemy","The other alliance"],["node","A lane, worth 3 points"]],
  "caption": "Winning a lane is worth 3 points. Take two of the three and you win the round. If points are level, total deployed Power breaks the tie."
}
```

### Inside a lane

Fighters meet **in Power order**, strongest first. Each fighter can beat **up to two** opponents before withdrawing, and then the next one steps in. So a lane is not won by your single biggest account; it is won by having more good fighters than the other side has answers for.

```kma-tiles
{
  "tiles": [
    ["3", "lanes per round", "Left, Mid and Right, fought separately"],
    ["2 of 3", "lanes wins the round", "each lane is worth 3 points"],
    ["2", "kills before withdrawing", "then your next fighter steps in"],
    ["0", "troops lost", "nothing to heal afterwards"]
  ]
}
```

Arrangements **lock when the entry phase starts**. If a lane has more people assigned than it has room for, the higher-Power fighters deploy first and the rest sit out.

## The week, step by step

```kma-steps
{
  "title": "From sign-up to rewards",
  "steps": [
    { "label": "Register", "text": "At least **15 members** with level 10+ territories must be registered, or the alliance cannot enter." },
    { "label": "Lanes assigned", "text": "Officers place every member in Left, Mid or Right. Lanes can be changed any time before battle." },
    { "label": "Entry locks", "text": "Once the entry phase starts, lanes are frozen. Higher Power deploys first if a lane is full." },
    { "label": "5 rounds", "text": "Round-robin against the other five alliances in the group. A win is 3 points, a draw 1, a loss 0. A bye counts as a win." },
    { "label": "Rewards", "text": "Everyone gets rewards, even members who did not deploy. **Leaving the alliance after the match forfeits them.**" }
  ]
}
```

## Leagues and what they pay

Your alliance's Glory Medal total decides its league. Higher leagues pay more for every result and put **20** fighters in each lane instead of 15, which means more of the alliance can take part.

```kma-bars
{
  "title": "Glory Medals for a round win, by league",
  "unit": "medals",
  "rows": [
    ["Rookie", 200, "0 to 499 medals · 15 per lane"],
    ["Novice", 250, "500 to 1,499 · 15 per lane"],
    ["Beginner", 400, "1,500 to 2,799 · 15 per lane"],
    ["Elite", 600, "2,800 to 4,499 · 20 per lane"],
    ["Epic", 800, "4,500 to 6,999 · 20 per lane"],
    ["Mythic", 1000, "7,000+ · 20 per lane"]
  ],
  "highlight": "Elite",
  "note": "A draw or a loss pays 30% of a win in every league: 60 in Rookie up to 300 in Mythic. Elite is highlighted because it is the first league with 20 fighters per lane."
}
```

| League | Glory Medals needed | Per lane | Win | Draw | Loss |
|---|---|---|---|---|---|
| Rookie | 0 to 499 | 15 | 200 | 60 | 60 |
| Novice | 500 to 1,499 | 15 | 250 | 75 | 75 |
| Beginner | 1,500 to 2,799 | 15 | 400 | 120 | 120 |
| Elite | 2,800 to 4,499 | 20 | 600 | 180 | 180 |
| Epic | 4,500 to 6,999 | 20 | 800 | 240 | 240 |
| Mythic | 7,000+ | 20 | 1,000 | 300 | 300 |

At the end of the group, **rank 1 gains 750 Glory Medals and rank 6 loses 500**, so a bad week can drop the alliance a league. Rank 1 also pays **8,000 to 16,000 Fame Medals** depending on league.

## The KMA plan: stack two, concede one

Because a round only needs two lanes, the strongest play is usually to **pile the alliance's best fighters into two lanes** and put the rest in the third. Losing one lane heavily costs nothing extra; losing two lanes narrowly costs the round.

```kma-map
{
  "title": "Where to put Power",
  "w": 640, "h": 250,
  "nodes": [
    { "id": "a", "label": "Lane A: stacked", "sub": "top Power", "x": 110, "y": 110, "kind": "safe", "short": "WIN", "r": 32 },
    { "id": "b", "label": "Lane B: stacked", "sub": "next Power", "x": 320, "y": 110, "kind": "safe", "short": "WIN", "r": 32 },
    { "id": "c", "label": "Lane C: conceded", "sub": "everyone else", "x": 530, "y": 110, "kind": "enemy", "short": "LOSS", "r": 32 }
  ],
  "links": [],
  "legend": [["safe","Lanes we plan to win"],["enemy","The lane we give up"]],
  "caption": "Two wins and one loss is 6 points and the round. The conceded lane still gets a full team, so every registered member counts."
}
```

> **KMA:** Officers assign lanes before every battle. If you will be offline when entry locks, tell an officer in chat so they can move you. An empty slot in a stacked lane is how narrow rounds are lost.

```kma-dodont
{
  "do": [
    "Register early, so the alliance clears the **15-member** minimum with room to spare.",
    "Keep your **strongest squad** built up before entry locks; lanes deploy in Power order.",
    "Stay in the alliance until rewards arrive. Leaving forfeits them.",
    "Tell an officer before the lock if your Power changed a lot this week."
  ],
  "dont": [
    "Move yourself into a different lane without asking. It can break a stacked lane.",
    "Skip registering because you are low Power. The third lane still needs bodies, and you get rewards either way.",
    "Treat a lost lane as a failure. Losing the conceded lane is the plan working."
  ]
}
```

## Quick answers

**Do I lose anything by joining?** No. Troops do not die and no march queue is used.

**I am weak. Should I still register?** Yes. You count toward the 15-member minimum, you can fill the conceded lane, and you get rewards even if you never deploy.

**What happens if we tie a round?** Total deployed Power breaks the tie, so every registered member's Power counts, even in the conceded lane.

Related: [Alliance Duel](#/alliance-duel) · [Alliance League](#/alliance-league) · [Every event at a glance](#/events-calendar)
