---
id: team-comps
title: Squads and Team Comps
category: heroes
summary: How a five-hero squad is built, why a third tank often beats the "2 tanks, 2 damage, 1 support" advice, the best squads at every roster size, and which lineup to run in each mode.
tags: heroes, squads, formation, team comps, faction bonus, bench skill, rat swarm, pvp, rally, expedition
updated: 2026-09-13
---

A squad is five heroes, and the right five beat a stronger roster used badly. What decides a fight is usually **how long your squad survives**, because damage only counts while your heroes are standing. This page shows the shape of a good squad, the best squads the numbers find, and what to run in each mode.

![A five-hero squad in-game. Official screenshot.](img/shots/screenshot-hero-team.jpg)

## Squad shape

<div data-widget="squad-shape"></div>

- **Five heroes**, in two rows. A practical layout is **2 in front and 3 behind**.
- **Tanks go in front.** They take first contact so the back row can work.
- **Damage and support go behind.** Support heroes are the only role that heals.
- The **bench** matters too. Every hero has a fifth skill that works **while the hero sits out** of the squad. It unlocks at hero level 30 and 8 stars, and gives the whole squad +20% ATK, HP and DEF and +10% cooldown speed from a UR (+10% from an SSR, +5% from an SR).

> **Unverified:** whether several benched URs **stack** their bonus. No source states it either way. Compare your squad's stats with one and with two eight-star URs on the bench.

### The three bonuses that shape a squad

```kma-bars
{
  "title": "Faction bonus to the whole squad's HP, ATK and DEF",
  "unit": "%",
  "rows": [
    ["3 of one faction", 5],
    ["3 plus 2 of another", 10],
    ["4 of one faction", 15],
    ["5 of one faction", 20]
  ],
  "highlight": "5 of one faction",
  "note": "A mixed squad with no three of a faction gets nothing. Each missing faction hero costs about 5%."
}
```

1. **Faction bonus** (above). Five of one faction is a free +20%.
2. **Faction counter.** Warrior beats Warlock, Warlock beats Ranger, Ranger beats Warrior, for a 20% damage swing. See the [tier list](#/hero-tier-list) for why the publisher's own guide prints it the other way round.
3. **Damage type.** Damage is **Physical** or **Energy**. Arthur's ultimate reduces Physical damage taken. Shadow and Billy reduce Energy damage, and Louis reduces all damage. Marlena deals Energy damage, so against a Marlena-heavy enemy, Energy reduction is worth more.

## Two tanks or three?

Two pieces of advice disagree, and both are right for a different player.

```kma-steps
{
  "title": "Which layout to run",
  "steps": [
    { "label": "2 tanks, 2 damage, 1 support", "when": "Early roster", "text": "The common starter layout from guide sites and starter-team videos. It works when you only own two real tanks, such as **Arthur and Bella**." },
    { "label": "3 tanks, 2 damage", "when": "Third tank built", "text": "A datamined simulation of all **169,911** possible squads found this shape at the top. Damage reduction multiplies the whole squad's effective HP, so survival outscales damage." },
    { "label": "3 tanks, 1 damage, 1 support", "when": "With a buffer like Harper", "text": "The other shape in the top three. Burst lands inside the support's buff window." }
  ],
  "note": "The simulation scores fully invested heroes in a 30-second reference fight. It leaves out troops and DEF conversion, so treat it as a direction, not a law."
}
```

In that simulation a squad of **five tanks scored 77** out of 100 and **five damage dealers scored 15**. Nobody should run five tanks, but it shows which way the numbers lean.

> **Tip:** if you own three tanks at similar investment, run three. If you only have Arthur and Bella built, run 2-2-1 until the third tank catches up. A half-built third tank is worse than a built damage dealer.

## The best squads

### Best in slot (every hero maxed)

| Squad | Shape | Faction bonus | Score |
|---|---|---|---|
| Arthur, Billy, Ulfrid, Annie, Joker | 3 tanks, 2 damage | +15% | 100 |
| Arthur, Marlena, Daskal, Harper, Louis | 3 tanks, 1 damage, 1 support | +15% | 98 |
| Arthur, Marlena, Daskal, Billy, Ulfrid | 4 tanks, 1 damage | +10% | 98 |

**Every top squad has Arthur.** Swapping out Billy, Ulfrid or Annie costs about 2 points; losing Arthur costs far more. That is why the tier list says Arthur first.

### Reachable squads

| Roster | Squad | Bonus | Why |
|---|---|---|---|
| No URs | Celia, Lucius, Sivir, Bella, Hastar | +15% | Best no-UR result in the simulation, score 2 |
| Arthur and Marlena | Arthur, Lucius, Sivir, Bella, Marlena | +20% | All Warrior, score 15 to 16. About 4% better than the official starter squad |
| Official starter squad | Arthur, Bella, Marlena, Claire, Celia | +20% | Two tanks. Claire buffs the three highest-ATK Warriors |

```kma-lineup
{
  "title": "Starter squad most players can build",
  "heroes": [
    ["arthur", "Tank", "Farmable UR and the anchor of every top squad."],
    ["bella", "Tank", "Strongest SSR tank. Reduces monster damage. Alliance Shop."],
    ["marlena", "Damage", "Top burst damage. She comes in the first top-up pack."],
    ["claire", "Damage", "Buffs your three highest-ATK Warriors. Farmable."],
    ["celia", "Economy", "Keeps the all-Warrior +20%. Move her to a gathering squad once you have a fifth Warrior fighter."]
  ],
  "alts": [["lucius", "Warrior tank filler, used in the best two-UR squad"], ["sivir", "Warrior filler for the +20%"], ["grenwald", "damage if you skipped Marlena, but breaks the all-Warrior bonus"]],
  "note": "The official starter squad. Starter-team videos from two creators use the same core of Arthur, Claire and Celia."
}
```

Scores for the reachable squads look tiny next to 100, because the simulation compares maxed heroes. What matters is the order: in your own roster, the same rules decide which five win.

## By mode

| Mode | Lineup | Why |
|---|---|---|
| [Rat Swarm](#/rat-swarm) and monster fights | Arthur, Bella or Griffith, Stellar, Marlena, Grenwald or Claire | Monster damage reduction plus monster damage bonuses. Stellar's heal carries a long fight. Zoya is the ideal wave clearer if you own her. |
| Long PvE | Arthur, Griffith, Stellar, Bestar, Marlena or Grenwald | Bestar's bleed grows with fight length. |
| [Expedition](#/expedition) | Your strongest tank-heavy squad of one faction | Each arena is gated by Power. On a young server the Expedition gives Arthur +50% HP and Marlena +25% ATK for its first two weeks. |
| [Hero Road](#/hero-road) | Your strongest single squad | Gated by squad Power: 770k, 2.8M, 6.8M, 8.6M, 11.6M, 16.4M, 21.5M, 25.5M, 30M, 35M and 40M. |
| PvP field and rallies | Arthur, Shadow or Daskal, Marlena, Harper, plus Stellar or a third tank | Burst inside Harper's 5-second ATK window. Counter-pick the defender's main faction for the 20% edge. |
| Garrison and defense | Arthur, Daskal or Louis or Ulfrid, Billy, plus sustain | Long fights reward damage reduction over burst. |
| [Demon King](#/demon-king) | Five of the counter faction | Warrior Blight: Rangers. Ranger Blight: Warlocks. Warlock Blight: Warriors. |
| [Abyss Boss](#/abyss-boss) | Five of the faction the boss favours | +50% damage for that faction, half damage for the rest. |

> **Unverified:** no source publishes a garrison lineup. The defense row follows the simulation's rule that damage reduction wins long fights. Test it before a war.

## Squads and their jobs

```kma-tiles
{
  "tiles": [
    ["4", "Squad 1", "Sanctuary level. Attack and rally squad"],
    ["8", "Squad 2", "Sanctuary level. Gathering squad"],
    ["20", "Squad 3", "Sanctuary level"],
    ["5", "Squad 4", "Sanctuary level, while the monthly pass is active"]
  ]
}
```

- **Squad 1**: your attack and rally squad. Top-tier troops, faction-matched heroes, and the Squad 1 research first.
- **Squads 2 and 3**: gathering and support. Put Celia here for her resource bonus.
- **Squad 4**: only works while the Premium Monthly Pass is active. Squad 1 and Squad 4 research give the same bonuses as Squads 2 and 3 for a fraction of the cost. See [Research](#/research).

> **KMA:** Build one strong Squad 1 before a second fighting squad. Keep a **second lineup ready** for rally events like [Cheese Trap](#/cheese-trap) and for [Demon King](#/demon-king) days, so one squad marches while the other is set to the counter faction.

```kma-dodont
{
  "do": [
    "Put **Arthur** in every fighting squad you can.",
    "Aim for **5 of one faction** (+20%), or at least 4 (+15%).",
    "Run a third tank once it matches your other two in investment.",
    "Bench spare URs at **level 30 and 8 stars** for the squad-wide bonus.",
    "Switch to the counter faction for Demon King and the favoured faction for Abyss bosses."
  ],
  "dont": [
    "Stack five damage dealers. They melt before their damage adds up.",
    "Mix three factions and lose the faction bonus.",
    "Spread shards across ten heroes. Five built heroes beat ten half-built.",
    "Leave Celia in your fighting squad once you have a real fifth Warrior."
  ]
}
```

## Quick answers

**2-2-1 or three tanks?** Three tanks once the third is built. Until then 2-2-1 with Arthur and Bella.

**Is the faction bonus worth a weaker hero?** Usually yes early. Going from 4 to 5 of a faction adds 5% to all five heroes.

**Do benched heroes really help?** Yes, from level 30 and 8 stars. A UR on the bench gives the squad +20% ATK, HP and DEF.

**What should my second squad be?** A gathering squad with Celia, or a counter-faction squad for bosses.

Related: [Hero Tier List](#/hero-tier-list) · [Squad builder](#/squad-builder) · [Rat Swarm](#/rat-swarm) · [Hero building](#/hero-building)
