const domSelectorDiv = {
	mythicDiv: document.querySelector(".shop-window-itemDisplay-mythic"),
	legendaryDiv: document.querySelector(".shop-window-itemDisplay-legendary"),
	epicDiv: document.querySelector(".shop-window-itemDisplay-epic"),
	basicDiv: document.querySelector(".shop-window-itemDisplay-basic"),
	starterDiv: document.querySelector(".shop-window-itemDisplay-starter"),
	description: document.querySelector(".shop-window-description"),
};

const domSelectorIcon = {
	all: document.querySelector("#all"),
	fighter: document.querySelector("#fighter"),
	marksman: document.querySelector("#marksman"),
	assassin: document.querySelector("#assassin"),
	mage: document.querySelector("#mage"),
	tank: document.querySelector("#tank"),
	support: document.querySelector("#support"),
};

export { domSelectorDiv, domSelectorIcon };
