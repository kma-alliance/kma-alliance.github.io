---
id: top-healer
title: Top Healer
category: solo
summary: A 7-day server-wide contest where each day scores a different set of actions. Hit 10,000 points daily for every stage reward, and save Falcon Quests, recruits, caravans and Covert Ops for the day that pays for them.
tags: top healer, 7-day event, contests, falcon quests, caravan, covert operations, omni shards, new server
updated: 2026-09-13
---

```kma-event
{
  "kind": "Personal event",
  "icon": "star",
  "art": "img/store/treat-patients.jpg",
  "headline": "Seven days, seven score lists. **10,000 points a day** claims every stage reward, and only today's actions count.",
  "facts": [
    ["Opens", "Sanctuary 6 · early in a server's life"],
    ["Where", "Special Event tab"],
    ["Duration", "7 days in a row"],
    ["Who", "Everyone on the server, one ranking"]
  ],
  "rewards": ["UR Hero Omni Shard", "SSR Hero Omni Shards", "Recruit Tickets", "60m speedups", "Level Supplies"]
}
```

Top Healer is a week-long contest that arrives on young servers. Each of its seven days has its own list of scoring actions, and points settle at the daily reset. What decides success is not how much you own. It is **whether you saved the right items for the right day**, because a Falcon Quest claimed on day 2 scores nothing.

## How it works

The in-game rules are short: the event lasts 7 days with different daily quests, you earn event points by completing them, and you claim stage rewards as you go. **Points settle daily at 00:00 server time** (UTC-2). Daily ranking rewards and the final weekly ranking rewards arrive by mail.

```kma-tiles
{
  "tiles": [
    ["7", "contests", "one per day, back to back"],
    ["5", "stage rewards a day", "the same ladder every day"],
    ["10,000", "points", "claims every stage reward"],
    ["30", "points per diamond", "packs count on every day"]
  ]
}
```

```kma-steps
{
  "title": "The seven days and what pays most",
  "steps": [
    { "label": "Resource Acquisition", "when": "Day 1", "text": "Falcon Quest **1,000**, stamina 100, 1 per 100 Grain or Timber, 1 per 60 Herbs." },
    { "label": "Territory Development", "when": "Day 2", "text": "Recruit a survivor **400**, construction speedup 20 a minute, 1 per Building Power." },
    { "label": "Technology Research", "when": "Day 3", "text": "Falcon Quest **1,000**, research speedup 20 a minute, 1 per Tech Power." },
    { "label": "Hero Recruitment", "when": "Day 4", "text": "Recruit a hero **400**, Skill Badge 10, 1 per 660 Antitoxin." },
    { "label": "Soldier Training", "when": "Day 5", "text": "Any construction, research or training speedup **20 a minute**, plus points per soldier trained." },
    { "label": "Full Development", "when": "Day 6", "text": "UR Trade Caravan **5,000**, UR Covert Operation 2,000, any speedup including healing 20 a minute." },
    { "label": "Survival Battle", "when": "Day 7", "text": "A mix of everything above, including caravans **5,000** and Falcon Quests 1,000." }
  ],
  "note": "Day names and values from a player video that reads the in-game lists, matched by the datamined tables."
}
```

### Soldier Training, per soldier

Day 5 has no big single action, so training volume and speedups carry it. Higher tiers pay more per soldier.

```kma-bars
{
  "title": "Points per soldier trained on day 5",
  "unit": "points",
  "rows": [
    ["Level 1", 5], ["Level 2", 6], ["Level 3", 7], ["Level 4", 13], ["Level 5", 15],
    ["Level 6", 19], ["Level 7", 22], ["Level 8", 25], ["Level 9", 28], ["Level 10", 31]
  ],
  "highlight": "Level 10",
  "note": "You can only train tiers you have researched. The jump from level 3 to level 4 nearly doubles the points."
}
```

### Two versions

There are two versions of the event. One opens with **Resource Acquisition**; the other opens with **Raven Boost**, where a Falcon Quest pays 1,350 and each Raven Essence 300, with stage lines running as high as 180,000 points. One player on a server in its first week saw the Raven version.

> **Unverified:** when it starts. One player saw it on **server day 5**. Another, on an older server, thought it starts on the **second Monday** and runs once per server. Watch the Monument timeline in your city and tell an officer what you see.

## Rewards

The stage ladder is the same on every day, so the plan is to reach **10,000 points seven days running**.

```kma-bars
{
  "title": "Daily stage rewards",
  "unit": "points",
  "rows": [
    ["Stage 1", 500, "2 SR Grain, Timber and Herb Level Supplies"],
    ["Stage 2", 1000, "2 of each SR Level Supply"],
    ["Stage 3", 3000, "6 of each SR Level Supply"],
    ["Stage 4", 6000, "2 SSR Hero Omni Shards, 3 × 60m speedup, 2 Recruit Tickets"],
    ["Stage 5", 10000, "1 UR Hero Omni Shard, 3 SR Antitoxin Level Supplies, 2 Recruit Tickets"]
  ],
  "highlight": "Stage 5",
  "note": "Datamined values. Over 7 days that is 7 UR and 14 SSR Omni Shards and 28 Recruit Tickets from the stages alone."
}
```

> **Unverified:** the player video also shows **Tempered Steel**, the material for UR gear, at the top of the daily ladder. The datamined table does not list it. Check the reward icons in your client.

| Where points are cheapest | Contest | Points |
|---|---|---|
| Dispatch a UR Trade Caravan | Full Development, Survival Battle | 5,000 |
| Run a UR Covert Operation | Full Development, Survival Battle | 2,000 |
| Claim a Falcon Quest | Resource Acquisition, Technology Research, Survival Battle | 1,000 |
| Recruit a hero or a survivor | Hero Recruitment / Territory Development, Survival Battle | 400 |
| Use 1 stamina | Resource Acquisition, Survival Battle | 100 |

Only diamond packs score on all seven days. Caravans and Covert Ops count **only on days 6 and 7**, and Falcon Quests only on days 1, 3 and 7.

Ranking rewards are a separate prize for the top of the server. One player ranked 81st and another 526th, so on most servers the ranking belongs to heavy spenders. **The stage rewards are the real target** for most members.

## The KMA plan

Treat the week like a small Alliance Duel. The recommended plan:

1. **Days before it starts:** finish Falcon Quests but do not claim them. Keep UR caravans and Covert Operations waiting.
2. **Day 1 and 3:** claim held Falcon Quests. Ten of them is the full 10,000.
3. **Day 2:** recruit survivors. **Day 4:** recruit heroes and spend Skill Badges.
4. **Day 5:** train your highest tier and use speedups.
5. **Day 6 and 7:** two UR caravans reach 10,000 on their own. Split what you saved across both days.

> **KMA:** If an [Alliance Duel](#/alliance-duel) is running the same week, remember the two score differently. A UR caravan is worth 100,000 Duel points on Duel days 2 and 6. If the calendars clash, the Duel comes first because it pays the whole alliance. Only spend on Top Healer what you would not need for the Duel.

```kma-dodont
{
  "do": [
    "Aim for **10,000 points every day**. Missing one day costs a UR Omni Shard.",
    "Hold finished Falcon Quests for days 1, 3 and 7.",
    "Save UR Trade Caravans and UR Covert Ops for days 6 and 7.",
    "Check the day's list before spending. It changes at 00:00 server time."
  ],
  "dont": [
    "Assume it scores like the Alliance Duel. Each day only counts its own list.",
    "Buy diamond packs to climb the ranking. 30 points a diamond will not catch the top spenders.",
    "Use recruit tickets on day 1 or 3. They score nothing there.",
    "Forget your mail. Ranking rewards are not claimed in the event."
  ]
}
```

## Quick answers

**Is Top Healer the same as Survival Battle?** No. [Survival Battle](#/survival-battle) is the daily event with 4-hour rounds. "Survival Battle" is also the name of Top Healer's day 7 contest, which mixes every action.

**How many points do I need?** 10,000 a day claims all five stage rewards. Anything above that only helps your rank.

**What if I start on day 3?** Days already passed are gone. You can still claim stage rewards on every remaining day.

**Will it come back?** Unknown. It is tied to a server's early weeks, and the datamine holds a second version with a Raven Boost day.

Related: [Survival Battle](#/survival-battle) · [Covert Ops and Falcon Quests](#/covert-falcon) · [Caravans](#/caravans) · [First week](#/first-week)
