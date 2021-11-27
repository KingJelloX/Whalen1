import "../styles/style.css";
import { domSelectorDiv, domSelectorIcon } from "./domSelector";
import { mythic } from "./items/mythic-items";
import { legendary } from "./items/legendary-items";
import { epic } from "./items/epic-items";
import { basic } from "./items/basic-items";
import { starter } from "./items/starter-items";
import { clearItems, insertItems } from "./function";
export { allItems };

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

function showItem() {
	let domSelectorItem = {
		item: document.querySelectorAll(".item"),
	};
	domSelectorItem.item.forEach((item) =>
		item.addEventListener("click", function () {
			domSelectorDiv.description.innerHTML = "";
			domSelectorDiv.description.insertAdjacentHTML(
				"afterbegin",
				`<img class="item shop-window-description-image" src="${this.getAttribute(
					"src"
				)}" />`
			);
			const convert = String(`${this.getAttribute("src")}`).replace(
				"../images/",
				""
			);
			const find = allItems.filter((item) => item.icon.includes(`${convert}`));
			console.log(find);
		})
	);
}

//__________Change Product list__________//
domSelectorIcon.all.addEventListener("click", function () {
	clearItems();
	insertItems(allItems);
	showItem();
});
domSelectorIcon.fighter.addEventListener("click", function () {
	clearItems();
	insertItems(fighterItems);
	showItem();
});
domSelectorIcon.marksman.addEventListener("click", function () {
	clearItems();
	insertItems(marksmanItems);
	showItem();
});
domSelectorIcon.assassin.addEventListener("click", function () {
	clearItems();
	insertItems(assassinItems);
	showItem();
});
domSelectorIcon.mage.addEventListener("click", function () {
	clearItems();
	insertItems(mageItems);
	showItem();
});
domSelectorIcon.tank.addEventListener("click", function () {
	clearItems();
	insertItems(tankItems);
	showItem();
});
domSelectorIcon.support.addEventListener("click", function () {
	clearItems();
	insertItems(supportItems);
	showItem();
});

showItem();
