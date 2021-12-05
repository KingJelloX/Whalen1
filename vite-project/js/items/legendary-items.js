const legendary = [
	{
		name: "Guardian Angel",
		type: "legendary",
		class: ["figher", "marksman", "assassin"],
		cost: 2800,
		icon: "Guardian_Angel_item.png",
		stats: ["+40 attack damage", "+40 armor"],
		description: [
			"UNIQUE – REBIRTH: Upon taking lethal damage, enter resurrection for 4 seconds, during which you are invulnerable, untargetable, and unable to act, and afterwards heal for 50% of base health and restore 30% of maximum mana (300 (starts after resurrecting) second cooldown).",
			"",
		],
	},
	{
		name: "Morellonomicon",
		type: "legendary",
		class: ["mage"],
		cost: 2500,
		icon: "Morellonomicon_item.png",
		stats: ["+80 ability power", "+250 health"],
		description: [
			"UNIQUE – AFFLICTION: Dealing magic damage to enemy champions inflicts them with 40%. Grievous Wounds for 3 seconds, increased to 60% if the target is left with less than 50% of their maximum health.",
			"",
		],
	},
];

export { legendary };
