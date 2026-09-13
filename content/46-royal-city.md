---
id: royal-city
title: Royal City Scramble
category: kingdom
summary: The weekly 8-hour fight for the Royal City. The first alliance to hold it for 4 straight hours wins and its leader becomes King. Everyone else takes turrets for their alliance and farms Honor Points to 100,000.
tags: royal city scramble, king, honor points, turrets, cursed land, fame medals, throne
updated: 2026-09-13
---

```kma-event
{
  "kind": "Kingdom event",
  "icon": "crown",
  "art": "img/shots/screenshot-city.jpg",
  "headline": "Hold the Royal City **four hours in a row** and your leader is King. Everyone can still bank Honor Points.",
  "facts": [
    ["Opens", "Server day 27 · Sanctuary 15 to see the event"],
    ["When", "Weekly, one 8-hour window"],
    ["Who", "Alliances holding a level 6 city. The limit is lifted in the Era of Revival"],
    ["Where", "The Royal City, center of the map, ringed by Cursed Land"],
    ["Cost", "70% of troops lost around the city go to the Infirmary instead of dying"]
  ],
  "rewards": ["The throne and court posts", "Honor Point milestones", "Alliance Coins", "Fame Medals", "Speedups"]
}
```

The Royal City Scramble is the server's own crown fight. Alliances battle for one city in the middle of the map, and the winner's leader becomes King and hands out the [court posts](#/court-posts). Only the strongest alliances can take the city. What decides it is **turrets and continuous control**, and the personal Honor rewards are open to every member who shows up.

## How it works

```kma-map
{
  "title": "The Royal City and its turrets (schematic)",
  "w": 640,
  "h": 360,
  "nodes": [
    {
      "id": "n",
      "label": "Turret",
      "x": 320,
      "y": 55,
      "kind": "tower",
      "short": "T"
    },
    {
      "id": "w",
      "label": "Turret",
      "x": 150,
      "y": 165,
      "kind": "tower",
      "short": "T"
    },
    {
      "id": "c",
      "label": "Royal City",
      "sub": "hold 4 hours in a row",
      "x": 320,
      "y": 165,
      "kind": "objective",
      "short": "4h",
      "r": 34
    },
    {
      "id": "e",
      "label": "Turret",
      "x": 490,
      "y": 165,
      "kind": "tower",
      "short": "T"
    },
    {
      "id": "s",
      "label": "Turret",
      "x": 320,
      "y": 285,
      "kind": "tower",
      "short": "T"
    },
    {
      "id": "h1",
      "label": "Honor tiles",
      "sub": "red hammer",
      "x": 100,
      "y": 285,
      "kind": "node",
      "short": "HP"
    },
    {
      "id": "h2",
      "label": "Honor tiles",
      "sub": "red hammer",
      "x": 540,
      "y": 285,
      "kind": "node",
      "short": "HP"
    }
  ],
  "links": [
    [
      "n",
      "c",
      "",
      "arrow"
    ],
    [
      "w",
      "c",
      "",
      "arrow"
    ],
    [
      "e",
      "c",
      "",
      "arrow"
    ],
    [
      "s",
      "c",
      "",
      "arrow"
    ]
  ],
  "legend": [
    [
      "objective",
      "The city: the win condition"
    ],
    [
      "tower",
      "Turret: fires on the city when a rival holds it"
    ],
    [
      "node",
      "Resource tiles that pay Honor Points"
    ]
  ],
  "caption": "A schematic, not a real map. Datamined data places four towers around the Royal City at the center of the map. A turret held by a different alliance than the city charges and hits the city's defenders hard, so a city held without its turrets does not stay held. Turrets fire on anyone who does not hold them."
}
```

### The ground rules

- **The Cursed Land has no shields.** A territory moved there cannot raise one. The official patch notes of 6 August 2026 fixed a bug that let a shield go up on its edge.
- **Your Falcon Tower stops working** while your territory is in the Cursed Land, which also halts Falcon Quests. March speed across it is raised for the event.
- **Troops to a structure your alliance already holds reinforce it.** Otherwise they start a battle. A garrison is capped by the rally size of the player who took the structure.
- **Losses are softened.** 70% of troops that fall around the city and turrets go to the Infirmary.

### How the city is won

```kma-steps
{
  "title": "The 8-hour window",
  "steps": [
    { "label": "Hour 0", "when": "Start", "text": "Every eligible alliance can hit the city and its turrets. Take the turrets first, or they hit your garrison." },
    { "label": "Hold", "when": "Any time", "text": "The **first alliance to hold the city for 4 continuous hours** wins on the spot. Losing the city resets that clock." },
    { "label": "8 hours", "when": "End", "text": "If nobody made 4 straight hours, the alliance with the **longest total control** wins." },
    { "label": "The King", "when": "After", "text": "The winning alliance's leader becomes King, appoints court posts, and mails supply chests to participants." }
  ],
  "note": "The event notice also says an alliance that holds the city 8 hours without a break wins outright."
}
```

> **Unverified:** the datamined rules window gives the 4-hour and longest-total conditions above. One guide site says the winner is simply the alliance with the most total occupation time. Check the rules screen on your server before the first push.

In the Era of Revival the level 6 city requirement is lifted and every alliance in the kingdom can join. A creator's preview of the Era also lists the Royal City becoming cross-server there, which has no second source yet.

## Rewards

The throne goes to one alliance. **Honor Points** are for everyone: attack the red-hammer resource tiles around the city, or let enemy alliances attack your troops. Rewards are paid at milestones when the event ends.

```kma-bars
{
  "title": "What you have banked at each Honor milestone",
  "unit": "5-min healing speedups",
  "rows": [
    ["10,000 Honor", 8, "1,800 Fame Medals so far"],
    ["20,000 Honor", 33, "1,800 Fame Medals so far"],
    ["40,000 Honor", 59, "4,900 Fame Medals so far"],
    ["70,000 Honor", 94, "4,900 Fame Medals so far"],
    ["100,000 Honor", 148, "10,000 Fame Medals and 6 × 2.5k Alliance Coins in total"]
  ],
  "highlight": "100,000 Honor",
  "note": "Running totals of the milestone rewards in the table below. Training speedups and SSR resource supplies come on top. Nothing is paid past 100,000."
}
```

| Honor Points | Alliance Coins | Fame Medals | 5-min Training / Healing speedups | Supplies |
|---|---|---|---|---|
| 10,000 | 2.5k × 1 | 1,800 | 8 / 8 | SSR Resource × 1 |
| 20,000 | 2.5k × 1 | – | 18 / 25 | General × 80, SSR × 2 |
| 40,000 | 2.5k × 1 | 3,100 | 32 / 26 | SSR × 3 |
| 70,000 | 2.5k × 1 | – | 44 / 35 | General × 220, SSR × 4 |
| 100,000 | 2.5k × 2 | 5,100 | 55 / 54 | SSR × 5 |

The milestone table comes from one guide site. The same five steps, 10k to 100k, also appear as battle goals in datamined data, which supports them.

## The KMA plan

Only the top alliances on a server can really take the city. For KMA the value of the day is **every member reaching 100,000 Honor**, plus holding whatever structure leadership asks for.

> **KMA:** The recommended plan. Unless the God of War calls a real push, farm Honor Points to 100,000 each and stop there. Reinforce the turret or structure officers name rather than attacking on your own. Heal 200 to 300 troops at a time so speedups last the whole 8 hours.

```kma-dodont
{
  "do": [
    "Hit the red-hammer tiles early and check your Honor total before the event ends.",
    "Stop at **100,000 Honor**. Nothing past it pays.",
    "Reinforce the structure your alliance already holds instead of starting a new fight.",
    "Heal in small batches. Most losses go to the Infirmary, so healing is where speedups matter."
  ],
  "dont": [
    "Move your territory into the Cursed Land and expect a shield or your Falcon Quests to work.",
    "Sit in the city while a rival owns the turrets. The turrets will grind your garrison down.",
    "Keep fighting for Honor after 100,000 and lose troops for nothing."
  ]
}
```

## Quick answers

**My alliance has no level 6 city. Can I still earn anything?** Honor milestones are personal, but the entry rule belongs to the alliance. Ask an officer what the event screen shows for KMA; in the Era of Revival the limit is gone.

**Is this the same fight as Kingdom War?** No. This is alliance against alliance inside your server, and it crowns your King. [Kingdom War](#/kingdom-war) is kingdom against kingdom and has its own battle over a Royal City.

**Do my troops die?** Most do not. 70% of losses around the city and turrets go to the Infirmary, as long as it has room.

Related: [King and Court Posts](#/court-posts) · [Kingdom War](#/kingdom-war) · [Defense, Garrison and Shields](#/defense) · [Every event at a glance](#/events-calendar)
