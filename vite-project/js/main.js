import "../styles/style.css";
import { domSelectorDiv, domSelectorIcon } from "./domSelector";
import { mythic } from "./items/mythic-items";
import { legendary } from "./items/legendary-items";
import { epic } from "./items/epic-items";
import { basic } from "./items/basic-items";
import { starter } from "./items/starter-items";
import { clearItems, insertItems } from "./function";

const allItems = basic.concat(epic, legendary, mythic, starter);
insertItems(allItems);

//__________Filter through array__________//
const fighterItems = allItems.filter((item) => item.class.includes("fighter"));
const marksmanItems = allItems.filter((item) =>
	item.class.includes("marksman")
);
const assassinItems = allItems.filter((item) =>
	item.class.includes("assassin")
);
const mageItems = allItems.filter((item) => item.class.includes("mage"));
const tankItems = allItems.filter((item) => item.class.includes("tank"));
const supportItems = allItems.filter((item) => item.class.includes("support"));

//__________Change Product list__________//
domSelectorIcon.all.addEventListener("click", function () {
	clearItems();
	insertItems(allItems);
});
domSelectorIcon.fighter.addEventListener("click", function () {
	clearItems();
	insertItems(fighterItems);
});
domSelectorIcon.marksman.addEventListener("click", function () {
	clearItems();
	insertItems(marksmanItems);
});
domSelectorIcon.assassin.addEventListener("click", function () {
	clearItems();
	insertItems(assassinItems);
});
domSelectorIcon.mage.addEventListener("click", function () {
	clearItems();
	insertItems(mageItems);
});
domSelectorIcon.tank.addEventListener("click", function () {
	clearItems();
	insertItems(tankItems);
});
domSelectorIcon.support.addEventListener("click", function () {
	clearItems();
	insertItems(supportItems);
});

//__________Shows item description__________//
const domSelectorItem = {
	item: document.querySelectorAll(".item"),
};

domSelectorItem.item.forEach((item) =>
	item.addEventListener("click", function () {
		console.log(this.getAttribute("src"));

		domSelectorDiv.description.insertAdjacentHTML(
			"afterbegin",
			`<img class="item shop-window-description-image" src="${this.getAttribute(
				"src"
			)}" />
            
        `
		);
	})
);
