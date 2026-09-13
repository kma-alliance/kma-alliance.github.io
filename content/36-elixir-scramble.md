---
id: elixir-scramble
title: Elixir Scramble
category: events
summary: The weekly 20-versus-20 alliance battle on its own map. Free troops, a Friday fight, and a win decided by the Castle, the Migration Portal and who keeps their troops alive.
tags: elixir scramble, pvp, roster, elixir castle, migration portal, kingdom war, fame medals
updated: 2026-09-13
---

```kma-event
{
  "kind": "Alliance event",
  "icon": "swords",
  "art": "img/store/survive-the-plague.jpg",
  "headline": "Thirty minutes, twenty a side. Hold the **Castle** late, and stay mobile the whole time.",
  "facts": [
    ["Opens", "Sanctuary 15 · top 32 alliance by Power, at least a week old"],
    ["When", "Weekly: register Mon to Wed, matched Thu, fight Fri"],
    ["Duration", "30 minutes at 09:00, 18:00 or 23:00 server time"],
    ["Who", "Two teams per alliance, 20 starters and 10 reserves each"],
    ["Cost", "Event troops only. Your real army is never used"]
  ],
  "rewards": ["Fame Medals", "Speedups", "50,000 Kingdom Points for a win"]
}
```

Elixir Scramble puts two alliances on a separate, mirror-image map for half an hour. Points come from holding buildings, gathering at camps, picking up medkits and knocking enemies out. It is not won by the biggest account. It is won by **one plan, one shot-caller, and members who do not throw their event troops away**.

> **Note:** since 30 July 2026 the game sends reminder mail **4 hours before the signup deadline** to alliances that have not registered, and **2 hours before** to alliances with **fewer than 10 members signed up** (official update notes). If you get that mail, sign up.

## How it works

```kma-steps
{
  "title": "The Elixir week",
  "steps": [
    { "label": "Register", "when": "Mon to Wed", "text": "Sign up and pick the window you can really play. **R4 and R5 build the rosters**: two teams, each with 20 starters and 10 reserves. You cannot place yourself." },
    { "label": "Matchmaking", "when": "Thursday", "text": "Opponents are matched on the **highest Power each assigned member has ever had**, not today's Power. The opponent can come from another server." },
    { "label": "Prep stage", "when": "Friday, -5 min", "text": "Starters enter 5 minutes early. Set your squads and defense, study the map and count the enemy." },
    { "label": "Battle", "when": "30 minutes", "text": "Reserves can enter once the battle starts. Buildings open in waves at minutes 1, 10 and 13." },
    { "label": "Result", "when": "End", "text": "Most points wins. Everyone on the roster gets rewards by their own points. The winning alliance also scores **50,000** in Kingdom War." }
  ]
}
```

Because matchmaking uses **historical peak Power**, dropping Power before Thursday does nothing, and filling a slot with an inactive member drags the whole team into a harder match.

### The battlefield

```kma-map
{
  "title": "Elixir Scramble map (schematic)",
  "w": 640, "h": 340,
  "nodes": [
    { "id": "wa", "x": 50, "y": 175, "kind": "base", "short": "A" },
    { "id": "ww", "label": "Alchemy Workshop", "x": 145, "y": 175, "kind": "objective", "short": "AW" },
    { "id": "wt", "label": "Healing Tents", "sub": "west side", "x": 130, "y": 280, "kind": "safe", "short": "+" },
    { "id": "ob", "label": "Observation Platform", "x": 185, "y": 60, "kind": "tower", "short": "+10%" },
    { "id": "re", "label": "War Relics", "x": 320, "y": 80, "kind": "tower", "short": "+15" },
    { "id": "ca", "label": "Elixir Castle", "x": 320, "y": 175, "kind": "objective", "short": "80", "r": 30 },
    { "id": "al", "label": "Cursed Altar", "x": 320, "y": 280, "kind": "tower", "short": "-15" },
    { "id": "mp", "label": "Migration Portal", "x": 460, "y": 285, "kind": "tower", "short": "TP" },
    { "id": "et", "label": "Healing Tents", "sub": "east side", "x": 510, "y": 65, "kind": "safe", "short": "+" },
    { "id": "ew", "label": "Alchemy Workshop", "x": 495, "y": 175, "kind": "objective", "short": "AW" },
    { "id": "ea", "x": 590, "y": 175, "kind": "enemy", "short": "B" }
  ],
  "links": [["wa","ww"],["ww","ca","","dashed"],["ea","ew"],["ew","ca","","dashed"],["re","ca"],["al","ca"]],
  "legend": [["base","A: your entrance (west)"],["enemy","B: enemy entrance (east)"],["objective","Point and buff buildings"],["safe","Healing Tents, four in total"]],
  "caption": "The two alliances enter from the west and east edges. Each side has a Workshop and Healing Tents near its entrance. Players place the Observation Platform top-left and the Migration Portal bottom-right; Relics and Altar sit either side of the Castle. Starting zones cannot be attacked."
}
```

<div data-widget="elixir-timeline"></div>

| Minute | What opens |
|---|---|
| -5 | Starters can enter and prepare. Nothing can be captured |
| 1 | Two Alchemy Workshops, Observation Platform, four Healing Tents, Migration Portal |
| 10 | **Elixir Castle** (centre), War Relics, Cursed Altar |
| 13 | Camps for slow gathering points |
| Any time | Medkits scatter when a building's holder is knocked out |

A freshly captured building is immune for **60 seconds**, then it can be taken. Each holds up to **20** defenders. A medkit is worth more the longer the knocked-out player had held the building.

### Your troops on this map

- You get event troops **up to your barracks capacity**, all of your highest unlocked tier. They are removed afterwards.
- Wounded troops go to a field tent. They come back slowly over time (collect them from the home icon), faster while your side holds a **Healing Tent**, or instantly with speedups.
- Two players describe the same limit: your territory can be broken about **four times**, then it is sent back to the start and must wait for its teleport.
- Free teleport has a cooldown of about 2 minutes. Holding the **Migration Portal** halves it.

## What each building is worth

Per second while held, as shown on the in-game building cards (alliance points / personal points):

| Building | Points | Effect |
|---|---|---|
| Elixir Castle | 80 / 30 | The core objective. 48,000 alliance points over the last 10 minutes |
| Alchemy Workshop (x2) | 50 / 30 | The early lead |
| Healing Tent (x4) | 30 / 30 | Heals 15 wounded every 10 seconds |
| Observation Platform | 10 / 30 | **+10% to all alliance building points** |
| War Relics | 10 / 30 | Your heroes +15% HP, ATK, DEF |
| Cursed Altar | 10 / 30 | Enemy heroes -15% HP, ATK, DEF |
| Migration Portal | 10 / 30 | Relocation cooldown halved |
| Camps | 5 / 5 | Slow, steady points for weaker squads |

```kma-bars
{
  "title": "Alliance points per second while held",
  "unit": "points/s",
  "rows": [["Elixir Castle", 80, "opens minute 10"], ["Alchemy Workshop", 50, "each, opens minute 1"], ["Healing Tent", 30, "each"], ["Observation Platform", 10, "plus 10% on everything"], ["War Relics", 10, "plus 15% hero stats"], ["Cursed Altar", 10, "minus 15% enemy stats"], ["Migration Portal", 10, "half teleport cooldown"], ["Camp", 5, "opens minute 13"]],
  "highlight": "Elixir Castle",
  "note": "Relics plus Altar together are a 30% stat swing in the Castle fight. The Platform's 10% only pays back if you take it early."
}
```

> **Note:** the datamined map data lists lower figures (Castle 48, Workshop 30, Tent 18, buff buildings 6). Player videos from February and July 2026 both read 80 for the Castle on the building card, so this page uses the in-game card values.

## Rewards

Rewards are personal and follow **your own points**. In a February 2026 player video the top personal threshold was **200,000 points for 10,000 Fame Medals**, and the winning and losing sides had the same point thresholds; the loser's speedups came as a random supply box. The winning alliance also earns **50,000 Kingdom Points** in [Kingdom War](#/kingdom-war).

## The KMA plan

> **KMA:** The recommended setup is one shot-caller and roles fixed before the prep stage: who holds the Portal, who takes the Platform, who leads the Castle push, who gathers. No committee decisions mid-fight.

**Before the battle (prep stage).** Put your best squad first in the squad settings. If you have only one strong squad, a Russian alliance guide recommends stripping squads 2 and 3 down to one or two weak heroes, so they carry few troops. Use them to capture, probe and grab medkits without losing much. In the defense settings, leave only your strong squad ticked, or none if you only have one.

1. **Minutes 1 to 10:** take the **Observation Platform** and your own Workshop first. One strong player takes the **Migration Portal** and keeps it all game. Spare squads contest the enemy Workshop.
2. **Minute 10:** win Relics and Altar, then rally the **Castle**. Do not rush the Castle without the buffs.
3. **Minutes 13 to 30:** hold the Castle, rotate wounded through the Healing Tents, and send weak squads to camps and medkits.
4. **Reserves** stay online and ready to replace anyone who disconnects.

**When a stronger player attacks you,** untick defense or teleport away so their hit costs you nothing. When an equal or weaker player attacks, switch your strong squad to defense and let them break on it, then counter.

```kma-dodont
{
  "do": [
    "Register for a window you can **really** attend. A starter who does not show still counts in matchmaking.",
    "Enter during the 5-minute prep to set squads and defense.",
    "Keep the **Migration Portal** held. Faster teleports win fights all over the map.",
    "Collect medkits and healed troops whenever you have a quiet moment."
  ],
  "dont": [
    "Leave three full squads on defense. A stronger hitter wipes thousands of event troops per hit.",
    "Probe an unknown enemy with your strong squad. Send a weak one first.",
    "Heal everything with speedups. It is expensive; tents and time heal for free.",
    "Tunnel-vision on the Castle and lose the Portal and buff buildings behind you."
  ]
}
```

## Quick answers

**Do I lose real troops?** No. The event gives you its own troops and removes them afterwards.

**Why did we get a much stronger opponent?** Matchmaking uses each rostered member's highest Power ever. A roster padded with inactive members raises that number without adding fighters.

**I am weak. What is my job?** Take a camp at minute 13, pick up medkits, and help hold buff buildings with small squads. Your points count the same as anyone's.

**Can the other alliance hit my start zone?** No. Starting zones are protected.

Related: [Kingdom War](#/kingdom-war) · [Alliance Duel](#/alliance-duel) · [Rallies](#/rallies) · [Defense](#/defense)
