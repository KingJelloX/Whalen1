const domSelectorDiv = {
	//_____Item classifications_____//
	mythicDiv: document.querySelector(".shop-window-itemDisplay-mythic"),
	legendaryDiv: document.querySelector(".shop-window-itemDisplay-legendary"),
	epicDiv: document.querySelector(".shop-window-itemDisplay-epic"),
	basicDiv: document.querySelector(".shop-window-itemDisplay-basic"),
	starterDiv: document.querySelector(".shop-window-itemDisplay-starter"),

	//_____Item description_____//
	descriptionImg: document.querySelector(".shop-window-description-image"),
	descriptionAbt: document.querySelector(".shop-window-description-about"),

	//_____Item about subsection_____//
	name: document.querySelector(".shop-window-description-about-name"),
	cost: document.querySelector(".shop-window-description-about-cost"),
	image: document.querySelector(".shop-window-description-about-image"),
	statsList: document.querySelector(".shop-window-description-about-stats"),
	description: document.querySelector(
		".shop-window-description-about-description"
	),

	//_____Search bar_____//
	search: document.querySelector(".shop-window-navbar-search-bar"),
};

//_____Navbar icons_____//
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
