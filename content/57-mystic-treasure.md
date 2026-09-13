---
id: mystic-treasure
title: Mythic Treasure
category: solo
summary: A limited pirate-themed event with seven tabs and three currencies. Hit the 300 Sea Fish cap daily, feed the Grand Feast, play your 5 Buried Treasure runs, and spend Anchor Coins in the market before gambling them.
tags: Mythic Treasure, Mystic Treasure, Pirate's Mythic Treasure, pirate event, Buried Treasure, Anchor Coins, Sea Fish, Grand Feast, Pirate Market, limited event
updated: 2026-09-13
---



```kma-event
{
  "kind": "Limited event",
  "icon": "event",
  "art": "img/shots/screenshot-ruins.jpg",
  "headline": "A week of pirate mini-games. The free value is in **Sea Fish, Buried Treasure and the Pirate Market**, not the slot machine.",
  "facts": [
    ["When", "Limited time; last run from 10 August 2026 for 7 days"],
    ["Format", "7 tabs, 3 currencies: Anchor Coins, Sea Fish, Pirate Gold"],
    ["Who", "Servers open 14+ days · solo, plus a server-wide Grand Feast ranking"],
    ["Cost", "Free daily parts; paid offers are optional"]
  ],
  "rewards": ["Hero Omni Shards", "Speedups", "Raven Essence", "Diamonds", "Sanctuary skin", "Hero XP", "Skill Badges"]
}
```

Mythic Treasure looks overwhelming the first time you open it: a pass, a slot machine, a shop, a server ranking, a fishing task and a card puzzle. It is simpler than it looks. What decides your haul is **doing the capped daily parts every day** and not wasting Anchor Coins on luck when the market sells guaranteed rewards.


![Mythic Treasure. Official preview poster, 5 August 2026. Tap to enlarge.](img/official/mythic-treasure.jpg)

> **Note:** the official previews of 5 August 2026 name the event **Mythic Treasure** (some players say Mythic Treasure). It started on 10 August 2026, ran for 7 days, and was open to servers at least 14 days old. **Anchor Coins** buy the **Phantom** sanctuary skin, the **Raging Tides** territory effect and a Mythic Treasure nameplate.

## How it works

Everything is connected. Normal play earns fish and coins; fish go into the server feast; coins go into the shop or the slot machine.

```kma-map
{
  "title": "Where each currency comes from and goes",
  "w": 640, "h": 330,
  "nodes": [
    { "id": "play", "label": "Daily play", "sub": "Falcon, Blight, Black Ops", "x": 90, "y": 80, "kind": "base", "short": "YOU", "r": 28 },
    { "id": "fish", "label": "Sea Fish", "sub": "300 a day cap", "x": 320, "y": 80, "kind": "node", "short": "FISH" },
    { "id": "feast", "label": "Grand Feast", "sub": "server ranking", "x": 550, "y": 80, "kind": "objective", "short": "TOP" },
    { "id": "pass", "label": "Pass and offers", "sub": "free and paid tracks", "x": 90, "y": 240, "kind": "base", "short": "PASS", "r": 28 },
    { "id": "coin", "label": "Anchor Coins", "x": 320, "y": 240, "kind": "node", "short": "COIN" },
    { "id": "shop", "label": "Pirate Market", "sub": "guaranteed", "x": 480, "y": 240, "kind": "safe", "short": "SHOP" },
    { "id": "slot", "label": "Pirate's Game", "sub": "luck", "x": 590, "y": 170, "kind": "enemy", "short": "SPIN" }
  ],
  "links": [["play","fish","","arrow"],["fish","feast","10 fish = 1 EXP","arrow"],["pass","coin","","arrow"],["coin","shop","","arrow"],["coin","slot","","dashed"]],
  "legend": [["base","What you do"],["node","Event currency"],["safe","Guaranteed value"],["enemy","Random value"]],
  "caption": "Buried Treasure (5 free runs a day) and Deep Sea's Gift (diamond spending) sit beside this loop."
}
```

| Tab | What it is |
|---|---|
| Pirate's Mythic Treasure | A pass. A free track and a paid advanced track, filled by logging in, Covert Ops, caravans, recruiting, rallies and training. The pass chest sits at **9,100 pass points**. |
| Pirate's Game | A three-reel slot machine played with Anchor Coins. Match symbols to win. A 5× option raises cost and reward. |
| Pirate Market | The exchange shop for Anchor Coins. Some items have daily limits, some an event limit. |
| Grand Feast | Server-wide. Hand in Sea Fish: **10 fish = 1 banquet EXP**. The top 50 players are rewarded. |
| Delicious Hunt | Where Sea Fish come from, capped at **300 a day**. |
| Deep Sea's Gift | Rewards for diamonds spent during the event, starting at 1,000. |
| Buried Treasure | A match-three card puzzle with **5 free runs a day**. |

That list follows one creator's guide. Another creator's chapter list names the tabs slightly differently, including a **Mythic Treasure Store** and **Daily Missions**; both describe the same pirate event.

```kma-tiles
{
  "tiles": [
    ["300", "Sea Fish a day", "the daily cap; stop farming there"],
    ["10", "fish per banquet EXP", "in the Grand Feast"],
    ["5", "Buried Treasure runs", "free every day"],
    ["4,000", "Anchor Coins", "for the Sanctuary skin"]
  ]
}
```

Sea Fish come from the Falcon Tower, resource monsters, Elite Blight, Black Ops, Wandering Blight and the event's daily missions.

### Buried Treasure

This is the puzzle most players struggle with. The board is different every run.

```kma-steps
{
  "title": "How a Buried Treasure run works",
  "steps": [
    { "label": "Read the board", "text": "Look at the whole board **before** your first tap. The layout changes every time." },
    { "label": "Fill the bar", "text": "Tapped cards drop into a bar of **7 slots**. Three identical cards clear." },
    { "label": "Avoid a full bar", "text": "If all 7 slots fill with no match, the run fails." },
    { "label": "Use tools early", "text": "**Remove** moves your first three cards out of the bar, **Recall** undoes a move, **Refresh** reshuffles. Use them before the board is dead." },
    { "label": "Collect", "text": "Cards with a **gold frame** pay an extra reward when matched. Runs pay pearls, puzzle pieces and speedups; clearing stage 1 pays extra." }
  ],
  "note": "Stage 1 is easy. Stage 2 is where most free players stop."
}
```

A tip from a creator who plays it daily: take cards from the **four tall stacks** first, then the centre, then the corners. Only park a spare card in the bar when at least three slots stay free. **Tap slowly**: fast tapping caused a bug where cards stuck in place.


![The Phantom skin, Raging Tides effect and nameplate. Official preview poster, 5 August 2026. Tap to enlarge.](img/official/mythic-treasure-2.jpg)

## Rewards

The **Pirate Market** is where Anchor Coins give guaranteed value. Items players pointed to:

| Item | Why it matters |
|---|---|
| Sanctuary skin, 4,000 Anchor Coins | +5% hero ATK, HP and DEF. Very expensive for free players. |
| Set Sail effect | +1.5% skill damage for all heroes. |
| Hero Omni Shards | The first buy one creator recommends. |
| Event hero-HP item | Adds flat HP to heroes; more copies raise it. |
| Raven Essence, speedups, diamonds, resources | Solid fillers once the above are bought. |
| Random hero chest | Skip it; the contents are random. |

The **Pirate's Game** also pays for how many draws you make in total:

```kma-bars
{
  "title": "Pirate's Game draw-count rewards",
  "unit": "draws",
  "rows": [["Tier 1", 30], ["Tier 2", 120], ["Tier 3", 300], ["Tier 4", 600], ["Tier 5", 1000], ["Tier 6", 1500]],
  "highlight": "Tier 1",
  "note": "Thresholds read from one creator's video; the rewards at each tier were not listed. Free players will not get far past the first tier."
}
```

The **Grand Feast** top ranks pay an effect that adds hero HP, plus Omni Shards, hero XP and Skill Badges. How hard ranking is depends on your server.

## The KMA plan

The recommended daily routine for free and light players, in order:

1. **Farm Sea Fish to 300.** Do your Falcon Quests, resource monsters and Blight as normal until the cap.
2. **Hand the fish in** at the Grand Feast.
3. **Play all 5 Buried Treasure runs.** Even failed runs are worth the rewards you collect on the way.
4. **Take your free Pirate's Game draw.**
5. **Check the Pirate Market** before spending Anchor Coins anywhere else.

> **KMA:** Farming fish is ordinary play, so there is no reason to miss the cap. If you spend money on this event, the advanced pass track is better value than chasing the 4,000-coin skin through the slot machine.

```kma-dodont
{
  "do": [
    "Hit the **300 Sea Fish** cap every day and hand them in.",
    "Use all **5 Buried Treasure** runs daily.",
    "Buy guaranteed Pirate Market items before gambling coins.",
    "Study the puzzle board before the first tap, and tap slowly."
  ],
  "dont": [
    "Farm fish past 300. Nothing more counts that day.",
    "Pour Anchor Coins into the slot machine hoping for the skin.",
    "Spend extra diamonds just to reach a Deep Sea's Gift tier.",
    "Wait until the puzzle is stuck before using Remove, Recall or Refresh."
  ]
}
```

## Quick answers

**Is this event free to play?** Mostly. The fish, feast, puzzle, free draw and free pass track cost nothing. The skin is realistically for spenders.

**Where do Sea Fish come from?** Falcon Tower, resource monsters, Elite Blight, Black Ops, Wandering Blight and the daily missions, up to 300 a day.

**When will it come back?** Unknown. It is a themed limited event; the one before it was an Easter event.

**Is it the same as the treasure map fragments older guides describe?** See the note below.

> **Unverified:** earlier versions of this page described a treasure-map system: 7 distinct fragments make a map, it unlocks at Sanctuary 9, finds are gold 10%, purple 30% and blue 60%, and a hidden counter guarantees a gold within 15 empty runs. Those numbers come from a datamined page called Treasure Maps. No player source links that system to this pirate event, so treat them as a separate, unconfirmed feature.

Related: [Covert Ops and Falcon Quests](#/covert-falcon) · [Wandering Phantom](#/wandering-phantom) · [Every event at a glance](#/events-calendar) · [Spending and VIP](#/spending-vip)
