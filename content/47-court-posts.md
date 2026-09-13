---
id: court-posts
title: King and Court Posts
category: kingdom
summary: The Royal City Scramble winner's leader becomes King and hands out ten court posts, each a standing buff in the holder's city. Which posts help a growing alliance, how to ask for one, and what the King's decrees cost.
tags: king, court posts, official appointment, minister, decrees, royal city, buffs, queen, king of battle
updated: 2026-09-13
---

```kma-event
{
  "kind": "Kingdom system",
  "icon": "crown",
  "headline": "The King holds ten posts. The best ones for KMA are **growth posts**, and you get them by asking.",
  "facts": [
    ["Who", "The King: leader of the alliance that won the Royal City Scramble"],
    ["Where", "Royal City, Manage, Official Appointment"],
    ["Format", "10 posts, each a standing buff in the holder's own city"],
    ["Cost", "Free to hold. Decrees cost the King decree points"]
  ],
  "rewards": ["Up to +60% build and research", "Double grain, timber and herb output", "Faster healing and training"]
}
```

When an alliance wins the [Royal City Scramble](#/royal-city), its leader becomes King. The King appoints court posts from **Royal City, Manage, Official Appointment**, and a player's short titled "Applying for minister" shows members requesting posts. A post is a buff that works in the holder's city for as long as they hold it. What decides whether KMA benefits is **diplomacy**: posts go to whoever the King chooses.

> **Unverified name:** guide sites call this system a "Temple Battle". That name traces back to one site that invents English names, and it never appears in player videos or official posts. The Temple is a hold objective in [Kingdom War](#/kingdom-war). The same site's English and Russian pages give different names to the **+60% build and research** post and the **march speed** post, so those two names below are flagged. **Minister of the Inner Court** is confirmed: the official patch notes of 30 July 2026 use it.

## How it works

```kma-steps
{
  "title": "Getting a post",
  "steps": [
    { "label": "A King is crowned", "text": "The Royal City Scramble ends and the winning alliance's leader takes the throne." },
    { "label": "Ask", "text": "Players apply for posts, and alliance diplomats ask the King directly. A friendly relationship is what gets KMA members appointed." },
    { "label": "Appointed", "text": "The King assigns the post under Official Appointment. The buff works in your city for as long as you hold it." },
    { "label": "Check it", "text": "Confirm the buff is active before you start the long upgrade you asked for it for." },
    { "label": "Hand it back", "text": "Posts are shared across the kingdom. Finish your big build, then let the next player have it." }
  ]
}
```

### The ten posts

| Post | Buff in the holder's city |
|---|---|
| King | Hero HP, ATK and DEF +5% |
| Queen | Build and research +20%, training speed +10% |
| Minister of Construction | Build +50%, research +25% |
| Minister of Development | Research +50%, build +25% |
| Minister of the Inner Court | Grain, timber and herb output +100% |
| Minister of Strategy | Infirmary capacity +20%, healing speed +20% |
| Minister of War | Training capacity +20%, training speed +20% |
| King of Battle | Hero HP, ATK and DEF +10%, enemy troop death rate in PvP +5% |
| Chief of Affairs (name unverified) | Build and research +60% |
| Chief of War (name unverified) | March speed +5%, enemy troop death rate in PvP +5% |

The buffs are datamined and match between the site's two languages. Only those two names differ.

```kma-bars
{
  "title": "Building speed by post",
  "unit": "% build speed",
  "rows": [
    ["Chief of Affairs", 60, "+60% research too"],
    ["Minister of Construction", 50, "+25% research"],
    ["Minister of Development", 25, "+50% research"],
    ["Queen", 20, "+20% research, +10% training"]
  ],
  "highlight": "Chief of Affairs",
  "note": "Hold one of these while a long Sanctuary or Research Lab upgrade starts, not after."
}
```

> **Unverified:** a Russian player guide on its first Kingdom War reported new hidden titles for the winners, "Commander" and "Official", and a guide site lists a 13-day King of Battle avatar frame as a Kingdom War rank 1 reward. So King of Battle and the two "Chief" posts may come from Kingdom War rather than the Royal City Scramble. Datamined notes add that the title list shows each bonus with the King of Battle's extra added in, so an ordinary holder gets less than the screen shows.

### Decrees and kingdom settings

Only the King signs decrees. Each costs decree points and has its own cooldown and duration. The game gives decrees **no names**; their icons suggest trade, war recovery, research, training, gathering, diamonds and player search, but nothing confirms that.

```kma-tiles
{
  "tiles": [
    ["10,000", "decree points a day at most", "the biggest decree costs a full day"],
    ["3,000", "cheapest decree", "two kinds can be signed 3 times a day"],
    ["14 days", "longest cooldown", "on a 10,000-point decree that lasts 3 days"],
    ["+10%", "march speed for the whole kingdom", "for holding the center"]
  ]
}
```

| Decree | Points | Cooldown | Lasts | Limit |
|---|---|---|---|---|
| 1 and 9 | 3,000 | – | – | 3 a day each |
| 2 | 10,000 | 14 days | 3 days | – |
| 3, 4 and 6 | 3,000 | 7 days | 1 day | – |
| 5 | 5,000 | 7 days | 7 days | – |
| 8 | 10,000 | 7 days | 7 days | needs a captured temple |

The kingdom also has fixed settings in datamined data: a 1% tax, a temple garrison of up to 30 squads, a kingdom announcement costing 200 diamonds, and a rename once a day.

## The KMA plan

Posts are a diplomacy prize, not a combat one. A growing alliance gains more from build, research and output posts than from combat stats.

> **KMA:** The recommended plan. When a friendly King is on the throne, the Diplomat asks for posts on KMA's behalf. Ask for **Chief of Affairs** or **Minister of Construction** just before a big Sanctuary or Research Lab upgrade, and **Minister of the Inner Court** before a long offline stretch. Confirm the buff is active, start the upgrade, then hand the post back.

```kma-dodont
{
  "do": [
    "Ask through the Diplomat, with a short, specific request and a time.",
    "Line up your longest upgrade before the post arrives so none of it is wasted.",
    "Check the buff on the appointment screen before you start. Names on guide sites may not match.",
    "Give the post back when you are done, so the next KMA request is welcome."
  ],
  "dont": [
    "Spam the King in world chat. It costs KMA goodwill.",
    "Start the upgrade first and ask later. Guide sites say to have the buff active before the upgrade begins.",
    "Chase King of Battle or Chief of War unless you are about to fight. They do nothing for building."
  ]
}
```

## Quick answers

**Where do I see who holds each post?** Royal City, Manage, Official Appointment.

**Which post is best for me?** For building, Chief of Affairs (+60% build and research). For resources, Minister of the Inner Court, which doubles grain, timber and herb output.

**Does a post stay if the King changes?** Unknown. Posts are appointed by the current King, so expect a new King to reassign them.

**Is there a "Temple Battle" event?** Not under that name as far as anyone can show. The King comes from the Royal City Scramble.

Related: [Royal City Scramble](#/royal-city) · [Kingdom War](#/kingdom-war) · [Alliance System](#/alliance-system) · [Sanctuary and Build Order](#/sanctuary-priority)
