import "../styles/style.css";
import { domSelectorDiv, domSelectorIcon } from "./domSelector";
import { mythic } from "./items/mythic-items";
import { legendary } from "./items/legendary-items";
import { epic } from "./items/epic-items";
import { basic } from "./items/basic-items";
import { starter } from "./items/starter-items";
import { clearItems, insertItems, showItem } from "./function";

//_____Combine item array into one_____//
const allItems = basic.concat(epic, legendary, mythic, starter);

insertItems(allItems);
showItem();

//__________Filter through item class__________//
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

//_____Change Product list based on item class_____//
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
