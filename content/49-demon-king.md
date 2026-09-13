---
id: demon-king
title: Demon King
category: kingdom
summary: Demon King Blight, the solo world boss every Wednesday and Saturday. Ten attacks a day with the counter faction, three for the daily achievements, and in Kingdom War weeks the kingdom's total damage is the biggest points prize there is.
tags: demon king, demon king blight, warrior blight, ranger blight, warlock blight, world boss, faction counter, kingdom points
updated: 2026-09-13
---

```kma-event
{
  "kind": "Solo world boss",
  "icon": "combat",
  "art": "img/store/slay-rats.jpg",
  "headline": "Bring the faction that **counters today's Blight**, and use all ten attacks. Your damage also counts for the whole kingdom.",
  "facts": [
    ["Opens", "Sanctuary 8"],
    ["When", "Every Wednesday and Saturday"],
    ["Fight", "10 solo attacks a day. No rallies"],
    ["Format", "Warrior, Ranger or Warlock Blight, ranked by total damage on your server"]
  ],
  "rewards": ["Gearstone", "SR Herb Level Supply", "Tempered Steel", "Refined Iron", "Diamonds", "Kingdom Points in Kingdom War"]
}
```

The Demon King is a world boss that sits on the map twice a week. The official patch notes call it **Demon King Blight**, and it comes in three faction versions, such as "Demon King: Warrior Blight". What decides your score is simple: **the right faction, a full faction bonus, and every attack used**.

## How it works

Each version takes extra damage from one faction. A player guide says Ranger heroes deal **+50% damage** to the Warrior Blight.

```kma-map
{
  "title": "Which faction to bring",
  "w": 640, "h": 300,
  "nodes": [
    { "id": "ra", "label": "Ranger squad", "x": 130, "y": 60, "kind": "ally", "short": "RAN" },
    { "id": "wab", "label": "Warrior Blight", "x": 510, "y": 60, "kind": "enemy", "short": "WAR" },
    { "id": "wl", "label": "Warlock squad", "x": 130, "y": 150, "kind": "ally", "short": "WLK" },
    { "id": "rab", "label": "Ranger Blight", "x": 510, "y": 150, "kind": "enemy", "short": "RAN" },
    { "id": "wa", "label": "Warrior squad", "x": 130, "y": 240, "kind": "ally", "short": "WAR" },
    { "id": "wlb", "label": "Warlock Blight", "x": 510, "y": 240, "kind": "enemy", "short": "WLK" }
  ],
  "links": [["ra", "wab", "extra damage", "arrow"], ["wl", "rab", "extra damage", "arrow"], ["wa", "wlb", "extra damage", "arrow"]],
  "legend": [["ally", "Your squad's faction"], ["enemy", "The Demon King version"]],
  "caption": "Check the boss name before you attack, then follow the arrow. This is the normal counter triangle: Rangers beat Warriors, Warlocks beat Rangers, Warriors beat Warlocks."
}
```

```kma-steps
{
  "title": "A Demon King day",
  "steps": [
    { "label": "Read the name", "when": "Wed or Sat", "text": "Tap the boss and check which Blight it is. That picks your faction." },
    { "label": "Build the squad", "text": "Five heroes of the counter faction if you can. Five of one faction also gives the squad +20% HP, ATK and DEF." },
    { "label": "Gear and War Frenzy", "text": "Player guides put gloves or gauntlets on the main damage dealer and attack with **War Frenzy** active (+5% troop ATK from Sanctuary 9)." },
    { "label": "Attack ten times", "text": "Solo only. Your attacks add to your server ranking and, in Kingdom War weeks, to the kingdom's total." },
    { "label": "Claim", "text": "Achievements pay at 1, 2 and 3 attacks. Ranking rewards follow by total damage." }
  ],
  "note": "War Frenzy starts with any military action, including a scout, and it blocks shields for 15 minutes. Do not trigger it right before you log off."
}
```

## Rewards

### Daily achievements

| Attacks | SR Herb Level Supply | Diamonds | Gearstone | Refined Iron |
|---|---|---|---|---|
| 1 | 2 | 10 × 1 | 200 | 20 |
| 2 | 3 | 10 × 1 | 200 | 20 |
| 3 | 5 | 10 × 3 | 600 | 35 |

Three attacks clear every achievement. A player guide also lists gear blueprints among the achievement rewards on its server.

### Damage ranking

```kma-bars
{
  "title": "Gearstone by damage rank",
  "unit": "Gearstone",
  "rows": [
    ["Rank 1", 2800, "12 SR Herb supplies, 12 speedup supplies, 40 Tempered Steel"],
    ["Rank 2", 2400, "10, 10, 30 Tempered Steel"],
    ["Rank 3", 1800, "9, 9, 24 Tempered Steel"],
    ["Ranks 4 to 10", 1500, "8, 8, 18 Tempered Steel"],
    ["Ranks 11 to 20", 1200, "7, 7, 48 Refined Iron"],
    ["Ranks 21 to 50", 1000, "6, 6, 36 Refined Iron"]
  ],
  "highlight": "Ranks 4 to 10",
  "note": "From one guide site. Ranks 51 to 500 also pay, with smaller supplies and Refined Iron, but that site's Gearstone figures for those ranks are obvious typos, so they are left out."
}
```

In Kingdom War weeks, guide sites list **250,000 Kingdom Points** for the kingdom whose total Demon King damage beats the enemy's, and **150,000** for the player ranked No. 1. That is the largest single points line in the whole event.

> **Unverified:** a player guide's chapter list mentions "Top 200 rules" for Kingdom Points from the Demon King. What exactly the top 200 limit does is not public. Assume every attack counts and use all ten.

## Squads players use

```kma-lineup
{
  "title": "Damage dealers named in player guides",
  "heroes": [
    ["cynthia", "Ranger damage", "Named in a free-to-play Demon King squad, with a +22% crit passive. Bring her against the **Warrior Blight**."],
    ["ash", "Ranger damage", "The same free-to-play squad uses him. He is a weak hero elsewhere, but against the Warrior Blight the faction counter carries him."],
    ["marlena", "Warrior damage", "Named in an end-game squad. Warriors counter the **Warlock Blight**."],
    ["claire", "Warrior damage", "End-game pick beside Marlena. Her passive buffs the three highest-ATK Warriors."]
  ],
  "alts": [
    ["harper", "Warrior support: all Warriors +16.5% ATK"],
    ["bell", "Ranger support: +49% ATK to your two best hitters"]
  ],
  "note": "Pick the faction first, then fill the squad from that faction for the bonus. Research that raises hero damage helps every version."
}
```

## The KMA plan

> **KMA:** The recommended plan. Every member uses **all ten attacks** on Wednesday and Saturday with the counter faction. Three attacks is the floor for the achievements, ten is what the kingdom needs in Kingdom War weeks. If you only have a Warrior squad, still attack: it counts for the ranking and the kingdom total, just with less damage.

```kma-dodont
{
  "do": [
    "Read the boss name first. The faction decides more than your Power does.",
    "Keep a second squad ready in the counter faction, even if it is weaker than your main.",
    "Use all ten attacks, especially in Kingdom War weeks.",
    "Claim the 1, 2 and 3 attack achievements before the day ends."
  ],
  "dont": [
    "Wait for a rally. The Demon King cannot be rallied.",
    "Skip the counter faction just because your main squad has more Power.",
    "Scout just to get War Frenzy right before you log off. It blocks your shield for 15 minutes."
  ]
}
```

## Quick answers

**Which days?** Wednesday and Saturday, on server time.

**I am weak. Is it worth it?** Yes. The three-attack achievements pay the same for everyone, and your damage adds to the kingdom total in Kingdom War.

**Can I attack with a march that is already out?** Probably not. The official patch notes of 30 July 2026 fixed a bug that let marching armies attack the Demon King Blight, so start attacks from a free squad.

Related: [Kingdom War](#/kingdom-war) · [Squads and Team Comps](#/team-comps) · [Abyss Boss and Weekend Boss](#/abyss-boss) · [Hero Tier List](#/hero-tier-list)
