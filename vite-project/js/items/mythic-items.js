const mythic = [
  {
    name: "Luden's Tempest",
    type: "mythic",
    class: ["mage"],
    cost: 3200,
    icon: "Luden_Tempest_item.png",
    stats: [
      "+80 ability power",
      "+20 ability haste",
      "+600 mana",
      "+6 magic penetration",
    ],
    description: [
      "UNIQUE – ECHO: Dealing ability damage to an enemy deals 100 (+ 10% AP) additional magic damage to them and launches orbs at up to 3 other enemies within  600 units around them, impacting after 0.528 seconds to deal the same damage to each, and grants you 15% bonus movement speed for 2 seconds. Dealing ability damage against champions reduces the cooldown of Echo by 0.5 seconds per champion, up to a maximum of 3 seconds per cast (10 second cooldown).",
      "MYTHIC PASSIVE: Empowers each of your other Legendary items with 5 magic penetration.",
    ],
  },
  {
    name: "Duskblade of Draktharr",
    type: "mythic",
    class: ["assassin"],
    cost: 3100,
    icon: "Duskblade_of_Draktharr_item.png",
    stats: [
      "+60 attack damage",
      "+20 ability haste",
      "+18 Lethality (11.2 − 18 (based on level) armor penetration)",
    ],
    description: [
      "UNIQUE – NIGHTSTALKER: Your next basic attack against an enemy champion deals (Melee 75 / Range 55)(+ (Melee 30% / Ranged 25%) bonus AD) bonus physical damage on-hit and slows the target by 99% for 0.25 seconds (15 second cooldown). Scoring a takedown against an enemy champion within 3 seconds of damaging them resets this effect's cooldown and grants you invisibility for 1.5 seconds.",
      "",
    ],
  },
  {
    name: "Goredrinker",
    type: "mythic",
    class: ["fighter"],
    cost: 3300,
    icon: "Goredrinker_item.png",
    stats: [
      "|+45 attack damage",
      "+20 ability haste",
      "+450 health",
      "+10% omnivamp",
    ],
    description: [
      "UNIQUE – THIRSTING SLASH: Deal 175% base AD physical damage to enemies in a Range 450 radius centered around you. Heal power Heal for 25% AD (+ 10% of your missing health) for each enemy champion hit (15 (reduced by ability haste) second cooldown).",
      "",
    ],
  },
];

export { mythic };
