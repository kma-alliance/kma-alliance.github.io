---
id: pandemic-experience
title: Pandemic Experience
category: events
summary: A personal monster ladder that unlocks alliance bosses. Push your own difficulty every run, because the alliance can only summon bigger bosses when enough members have.
tags: pandemic experience, hell doctor, hell nurse, alliance boss, difficulty, raven essence, war frenzy
updated: 2026-09-13
---

```kma-event
{
  "kind": "Alliance event",
  "icon": "star",
  "art": "img/store/treat-patients.jpg",
  "headline": "Your personal progress is the alliance's key. **Enough members at high difficulty** unlocks the bosses that pay the best.",
  "facts": [
    ["When", "Every two weeks, per player reports"],
    ["Format", "30 monsters per difficulty, plus alliance bosses"],
    ["Duration", "Each alliance boss stays 30 minutes"],
    ["Fight", "Solo, or rally when a monster is too strong"],
    ["Who", "Boss rewards only for members who fight it"]
  ],
  "rewards": ["UR hero shards", "Raven Essence", "Diamonds"]
}
```

> **Note:** The official update notes of 30 July 2026 refer to the **Hell Doctor** in Pandemic Experience. Guide blogs and some players say "Hell Nurse"; this page follows the official notes.

Pandemic Experience has two halves that feed each other. In the **personal challenge** you summon and beat monsters of rising level. In the **alliance challenge** officers summon bosses for the whole alliance, but each boss only unlocks when enough members have cleared enough of their personal ladder. So the event is decided long before the boss fight: by **how many members pushed their own difficulty** in earlier runs.

## How it works

```kma-map
{
  "title": "How personal progress opens alliance bosses",
  "w": 640, "h": 300,
  "nodes": [
    { "id": "p1", "label": "Member ladders", "sub": "one difficulty per run", "x": 100, "y": 150, "kind": "ally", "short": "YOU", "r": 30 },
    { "id": "gate", "label": "Unlock check", "sub": "enough members at a level?", "x": 320, "y": 150, "kind": "objective", "short": "?" },
    { "id": "b1", "label": "Boss 1", "sub": "always open", "x": 540, "y": 60, "kind": "enemy", "short": "B1" },
    { "id": "b2", "label": "Next boss", "sub": "in strict order", "x": 540, "y": 150, "kind": "enemy", "short": "B2" },
    { "id": "b9", "label": "Top bosses", "sub": "best rewards", "x": 540, "y": 240, "kind": "enemy", "short": "B9" }
  ],
  "links": [["p1", "gate", "clears", "arrow"], ["gate", "b1", "", "dashed"], ["gate", "b2", "", "arrow"], ["gate", "b9", "", "arrow"]],
  "legend": [["ally", "Members' personal progress"], ["objective", "The member-count requirement"], ["enemy", "Alliance bosses"]],
  "caption": "A schematic. Each alliance boss needs a set number of members to have cleared a set stage of the personal challenge. Bosses are summoned one at a time, in order."
}
```

### Personal challenge

```kma-steps
{
  "title": "Your ladder",
  "steps": [
    { "label": "Choose difficulty", "text": "Pick from the difficulties you have unlocked. **It stays locked** until the event ends." },
    { "label": "Climb", "text": "Monsters are summoned in order from the lowest level. Each win opens the next summon." },
    { "label": "Rally if stuck", "text": "If a monster is too strong for you, call a rally and alliance members join as normal." },
    { "label": "Clear it all", "text": "Clear **all 30** monsters of your difficulty to unlock the next one. It becomes available in the **next run**, about two weeks later." }
  ]
}
```

You are paid for the number of monsters you defeat, and beating a boss-level monster on your ladder pays the **whole alliance**.

Player videos show a **30-monster counter** per difficulty, and difficulty 9 asks for roughly **30M squad Power** solo. Later monsters show up three at a time, and their real battle strength is higher than the Power number they display.

> **Unverified:** guide sites describe **9 difficulties**. Players streaming in September 2026 report that **difficulties 10 and 11** were added, paying awakening shards, and one expects difficulty 10 to have only 10 monsters instead of 30. Check your own difficulty list.

### Alliance challenge

```kma-tiles
{
  "tiles": [
    ["1", "boss at a time", "summoned by the leader or an officer, strictly in order"],
    ["30 min", "per boss", "once summoned"],
    ["1", "retry", "a second failure closes this boss and every boss after it"],
    ["1×", "reward per boss", "only for members who fought it"]
  ]
}
```

- The **member list locks when the event starts**. Someone who joins the alliance after that does not count toward boss requirements.
- Each boss's reward is paid **once**, and only to those who fought it.
- **Two failures on the same boss end the alliance ladder** for this run. Every boss after it closes too.

The boss requirements reported by a guide blog. A player video confirms the last row: the boss screen reads that it unlocks after **40 players** have passed **difficulty 9 or higher**, and a Record tab shows each member's difficulty.

```kma-bars
{
  "title": "Members needed at a personal difficulty, per boss",
  "unit": "members",
  "rows": [
    ["Boss 1", 0, "open"],
    ["Boss 2", 8, "at difficulty 2+"],
    ["Boss 3", 10, "at difficulty 3+"],
    ["Boss 4", 15, "at difficulty 4+"],
    ["Boss 5", 20, "at difficulty 5+"],
    ["Boss 6", 25, "at difficulty 6+"],
    ["Boss 7", 30, "at difficulty 7+"],
    ["Boss 8", 35, "at difficulty 8+"],
    ["Boss 9", 40, "at difficulty 9+"]
  ],
  "highlight": "Boss 5",
  "note": "Boss 9 is confirmed on screen by a player video. The other rows come from one guide site, so treat them as a guide."
}
```

## Rewards

| Part | What pays | Rewards |
|---|---|---|
| Personal challenge | Number of monsters you defeat | Personal rewards per kill count |
| Personal boss-level wins | Beating a boss-level monster on your ladder | A reward for the whole alliance |
| Alliance bosses | Fighting a summoned boss | UR hero shards, Raven Essence, diamonds, paid once per boss |

last-asylum.com notes that **higher difficulties can include Raven Essence**, which is the main reason to keep pushing. Players name universal UR shards and Raven Essence as the rewards worth having; the diamonds are small.

## The KMA plan

1. **Pick your highest unlocked difficulty and clear all 30.** The next difficulty only unlocks for the next run. Each member who climbs brings the next boss closer for everyone. Players report that falling behind, simply forgetting to push, is the most common reason bosses stay locked.
2. **Rally the hard monsters.** Start the rally with **one weak, low-level hero** so you lose few troops, and let the alliance's strongest accounts fill it. A player cleared all 30 in about 10 minutes by running about three rallies at once.
3. **Be in the alliance before the event starts.** The member list locks at the start.
4. **Only summon a boss the alliance can kill.** A second failure closes every later boss for this run.
5. **When a boss is summoned, drop everything.** Be free, healed and near chat for the full 30 minutes.

> **KMA:** The recommended plan is personal ladders first, bosses second. Officers summon each boss only when enough fighters are online, and announce it in chat before summoning. Do not be mid-march elsewhere; a failed retry closes the rest of the ladder for everyone.

### Gear and War Frenzy

- **SSR gauntlets beat UR gauntlets here.** Maxed SSR gauntlets carry a damage-to-monsters bonus, and a player guide recommends SSR gauntlets with a UR sword for all PvE, naming Pandemic Experience directly. Swap back for PvP.
- **Scout first for War Frenzy.** Any military action triggers War Frenzy, including scouting another city. The datamine gives Troop ATK +5% from Sanctuary 9, and player battle reports show more damage and fewer troops lost after scouting. Era of Revival commander skills can add more damage while it is active.

> **Warning:** War Frenzy **blocks your shield for 15 minutes**. Do not scout to trigger it if enemies are hunting you.

```kma-dodont
{
  "do": [
    "Clear **every level** of your difficulty so the next one unlocks.",
    "Call a rally when one monster blocks your ladder.",
    "Be free and healed when an officer announces a boss.",
    "Swap to **SSR gauntlets** for the fights."
  ],
  "dont": [
    "Stop at the easy levels. Unfinished ladders do not unlock the next difficulty.",
    "Join the alliance after the event starts and expect to count toward a boss.",
    "Summon a boss the alliance cannot kill. Two failures close the rest.",
    "Trigger War Frenzy while your territory is under threat."
  ]
}
```

## Quick answers

**Can I change my difficulty mid-event?** No. It is locked until the event ends. Players take the highest difficulty they have unlocked and rally the monsters they cannot beat alone.

**I cleared my difficulty. Why can I not pick the next one?** A new difficulty takes effect in the next run of the event, about two weeks later.

**Who gets the alliance boss reward?** Only members who fought that boss, once per boss.

**What happens if we fail a boss?** You get one retry. If that fails too, that boss and every boss after it close.

Related: [Rallies and Marches](#/rallies) · [Defense, Garrison and Shields](#/defense) · [Building a Hero](#/hero-building) · [Every Event at a Glance](#/events-calendar)
