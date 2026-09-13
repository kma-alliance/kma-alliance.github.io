---
id: crystal-valley
title: Crystal Cluster Valley
category: events
summary: A 30-minute every-player-for-themselves crystal race with free troops. Rats first, a quiet level 2 vein, instant clusters at minutes 10 and 20, and stay out of the centre unless you are a whale.
tags: crystal cluster valley, crystal valley, purified crystal, plague rats, instant cluster, sacred cave, valley skills
updated: 2026-09-13
---

```kma-event
{
  "kind": "Solo event",
  "icon": "solo",
  "art": "img/store/gather-resources.jpg",
  "headline": "Half an hour, no allies. Score is the **Purified Crystal** you collect, not the fights you win.",
  "facts": [
    ["Opens", "Sanctuary 15 · first session in server week 3"],
    ["When", "Three 30-minute windows a day"],
    ["Duration", "2-minute prep, then 30 minutes"],
    ["Who", "Up to 350 players per map, matched by Sanctuary tier"],
    ["Cost", "Event troops. Your army and territory are safe"]
  ],
  "rewards": ["Fame Medals", "UR Omni Shards", "UR Curio Chests", "Diamonds", "Tempered Steel"]
}
```

Players usually call it **Crystal Valley**. Everyone lands on a separate map with a full barracks of free troops and races to collect Purified Crystal from veins, Plague Rats and dropped shards. It is **individual**: alliance members can seize your vein and you can seize theirs. What decides your score is **where you stand, how fast you unlock skills, and whether your marches are ready at minutes 10 and 20**.

## How it works

On entry you get soldiers up to your **barracks capacity**, all of your highest unlocked tier. Territories cannot be attacked; fights happen only over gathering points. Wounded event troops can be healed with healing or general speedups, and nothing touches your real army.

```kma-steps
{
  "title": "A Crystal Valley session",
  "steps": [
    { "label": "Drop in", "when": "-2 min", "text": "You land in a random spot. Use the prep time to find a vein with **few players** around it." },
    { "label": "Rats and veins", "when": "0 to 10", "text": "One march gathers. The others hunt **Plague Rats** for Skill Crystals until your skills are unlocked." },
    { "label": "Instant clusters", "when": "10, 11, 12", "text": "Small, very fast veins appear. **Recall marches just before minute 10** and grab them." },
    { "label": "Gather and pick up", "when": "12 to 20", "text": "Back to veins. Collect scattered crystal shards near fights and keep hunting nearby rats." },
    { "label": "Instant clusters", "when": "20, 21, 22", "text": "Second set of waves. Recall again before minute 20." },
    { "label": "Sacred Cave", "when": "23 to 30", "text": "The centre opens for the last 7 minutes. **Whales only.** Everyone else keeps gathering at the edges." }
  ]
}
```

```kma-map
{
  "title": "Valley layout (schematic)",
  "w": 640, "h": 320,
  "nodes": [
    { "id": "cave", "label": "Sacred Cave", "sub": "opens minute 23", "x": 320, "y": 160, "kind": "objective", "short": "23", "r": 30 },
    { "id": "l3a", "label": "Level 3 veins", "x": 220, "y": 90, "kind": "enemy", "short": "L3" },
    { "id": "l3b", "x": 420, "y": 230, "kind": "enemy", "short": "L3" },
    { "id": "l2a", "label": "Level 2 veins", "x": 110, "y": 230, "kind": "safe", "short": "L2" },
    { "id": "l2b", "x": 520, "y": 80, "kind": "safe", "short": "L2" },
    { "id": "ic", "label": "Instant Cluster", "x": 530, "y": 250, "kind": "tower", "short": "4K" },
    { "id": "l1", "label": "Level 1 veins", "x": 70, "y": 70, "kind": "node", "short": "L1" }
  ],
  "links": [["l3a","cave","","dashed"],["l3b","cave","","dashed"]],
  "legend": [["objective","Timed: Sacred Cave (minute 23), Instant Clusters (minutes 10 to 12 and 20 to 22)"],["enemy","Level 3 veins: contested by top players"],["safe","Level 2 veins: the sweet spot for most"],["node","Level 1 veins"]],
  "caption": "Higher-level veins mine faster and sit closer to the centre, so they are where the strongest players fight. Plague Rats roam the whole map. Most members score more on level 2 veins away from the crowd."
}
```

### Veins

| Vein | Stock | Rate |
|---|---|---|
| Crystal Cluster 1 | 8,640 | 12 |
| Crystal Cluster 2 | 17,280 | 24 |
| Crystal Cluster 3 | 34,560 | 48 |
| Instant Cluster 4 | 4,000 | 200 |

```kma-bars
{
  "title": "Crystal stock per vein",
  "unit": "crystals",
  "rows": [["Cluster 1", 8640, "rate 12"], ["Cluster 2", 17280, "rate 24"], ["Cluster 3", 34560, "rate 48"], ["Instant Cluster 4", 4000, "rate 200: drains in moments"]],
  "highlight": "Instant Cluster 4",
  "note": "Regular veins double per level. Instant Clusters are small but drain many times faster than anything else, which is why you recall marches for them."
}
```

Unoccupied veins have **defenders** you must beat first. Any occupied vein, including an alliance member's, can be **seized**. If it had gathered a lot, its crystal scatters as shards you can pick up. A failed seizure stacks a debuff on your hero that wears off over time. Relocation is **free every 6 minutes**; paid relocation costs more items each time you use it.

## Valley skills

Plague Rats drop **Skill Crystals**. You unlock five tiers of skills, taking **one of each pair**, at 200, 500, 900, 1,500 and 2,300. The first four tiers are passive; the fifth is an active skill. Skills reset after the session.

| Cost | Option A | Option B | Gatherer | Fighter |
|---|---|---|---|---|
| 200 | Crystal Surge: 1,080 crystals periodically | Plague Rat Hunter: +1,500 crystals per rat | A | A |
| 500 | Force Expansion: +50 march capacity | Swift March: +25% march speed | B | B |
| 900 | Valley Plunder: +5,000 on a seizure (60 s CD) | Valley Vigil: +5,000 on a failed seizure (60 s CD) | A | A |
| 1,500 | Crystal Mining: +15% gathering | Iron Will: debuffs 30 s shorter | A | B |
| 2,300 | Valley Awakening: +15% hero damage, 60 s (300 s CD) | Crystal Resonance: +50% gathering, 60 s (300 s CD) | B | A |

> **Tip:** active skills only affect marches sent **after** you activate them. Press Crystal Resonance first, then send the march.

The two builds follow a Russian creator's guide; an English creator took Plague Rat Hunter instead, so tier one is a real choice. That Russian guide also reads Valley Awakening as a much larger bonus; the datamine and an English video both say 15%.

## Rewards

| Scoreboard | What it pays |
|---|---|
| Personal milestones | Up to 150,000 crystals: Fame Medals, 100 diamonds, 2 UR Omni Shards, 50 Tempered Steel |
| Personal rank 1 | 2 UR Curio Chests, 15 UR Omni Shards, 30 UR supplies of each type |
| Fort capture, four stages | 100,000 / 80,000 / 60,000 crystals for 1st, 2nd, 3rd |
| Zone standings, 14 zones | 300,000 / 250,000 / 210,000 crystals for 1st, 2nd, 3rd |

> **Unverified:** one source puts the top milestone at 2,000 Fame Medals; the datamine lists 1,500 medals at the top gathering threshold. How often the event runs is also unconfirmed: one English creator says every two weeks. Check the event screen.

## The KMA plan

> **KMA:** Nobody is your ally inside the valley, but the recommended alliance rule is simple: **do not seize KMA members' veins** when any other target is in reach. Take crystals from other alliances' players instead. A fight with a clanmate costs you both gathering time while everyone else pulls ahead.

1. **Prep:** find a spot near two or three level 2 veins with few players. Relocate there with the free move.
2. **Opening:** one march gathers, the rest hunt the **closest** rats. Skip rats a minute's march away.
3. **Skills fast:** the sooner all five tiers are open, the longer they pay.
4. **Minutes 10 and 20:** recall everything just before the mark and hit the Instant Clusters.
5. **Between waves:** gather, grab scattered shards, use Crystal Resonance every time it is ready.
6. **Minute 23:** unless you are one of the strongest accounts on the map, **ignore the Sacred Cave**. One hit there costs minutes of gathering.

```kma-dodont
{
  "do": [
    "Hunt rats early. Skills are what separate top-10 runs from the rest.",
    "Watch the clock and recall marches **before** minutes 10 and 20.",
    "Pick up crystal shards scattered near other players' veins.",
    "Relocate away from crowds the moment the free move is ready."
  ],
  "dont": [
    "Park on a level 3 vein next to whales. You will be kicked off it again and again.",
    "Send a march a minute across the map for one rat.",
    "Spend paid relocations freely. Each one costs more than the last.",
    "Go for the Sacred Cave as a mid-Power player."
  ]
}
```

## Quick answers

**Can I lose real troops?** No. The event gives you its own troops, and territories cannot be attacked.

**Can alliance members attack me?** They can seize your vein. There are no allies inside the valley.

**Is it worth playing if I am weak?** Yes. Personal milestones pay by crystals collected, and careful gatherers on quiet level 2 veins score well.

**Which window should I play?** The one you can stay in for all 30 minutes. A Russian creator reports you can enter only one of the three windows a day, so do not count on a second try.

Related: [Elixir Scramble](#/elixir-scramble) · [Every event at a glance](#/events-calendar) · [Arena and Fame Medals](#/arena)
