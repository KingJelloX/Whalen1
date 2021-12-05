import { domSelectorDiv } from "./domSelector";
import { mythic } from "./items/mythic-items";
import { legendary } from "./items/legendary-items";
import { epic } from "./items/epic-items";
import { basic } from "./items/basic-items";
import { starter } from "./items/starter-items";

const allItems = basic.concat(epic, legendary, mythic, starter);

//_____Clear shop items_____//
function clearItems() {
	domSelectorDiv.mythicDiv.innerHTML = "";
	domSelectorDiv.legendaryDiv.innerHTML = "";
	domSelectorDiv.epicDiv.innerHTML = "";
	domSelectorDiv.basicDiv.innerHTML = "";
	domSelectorDiv.starterDiv.innerHTML = "";
}

//_____Insert items onto shop by sorting based on item type_____//
function insertItems(items) {
	for (var i = 0; i < items.length; i++) {
		if (items[i].type === "mythic") {
			//mythic class
			domSelectorDiv.mythicDiv.insertAdjacentHTML(
				"afterbegin",
				`<div>
            <img class="item" id="${items[i].icon}" src="../images/${items[i].icon}" />
		    <p class="display-cost">${items[i].cost}</p>
		</div>`
			);
		} else if (items[i].type === "legendary") {
			domSelectorDiv.legendaryDiv.insertAdjacentHTML(
				"afterbegin",
				`<div>
            <img class="item" id="${items[i].icon}" src="../images/${items[i].icon}" />
		    <p class="display-cost">${items[i].cost}</p>
		</div>`
			);
		} else if (items[i].type === "epic") {
			domSelectorDiv.epicDiv.insertAdjacentHTML(
				"afterbegin",
				`<div>
            <img class="item" id="${items[i].icon}" src="../images/${items[i].icon}" />
		    <p class="display-cost">${items[i].cost}</p>
		</div>`
			);
		} else if (items[i].type === "basic") {
			domSelectorDiv.basicDiv.insertAdjacentHTML(
				"afterbegin",
				`<div>
            <img class="item" id="${items[i].icon}" src="../images/${items[i].icon}" />
		    <p class="display-cost">${items[i].cost}</p>
		</div>`
			);
		} else if (items[i].type === "starter") {
			domSelectorDiv.starterDiv.insertAdjacentHTML(
				"afterbegin",
				`<div>
            <img class="item" id="${items[i].icon}" src="../images/${items[i].icon}" />
		    <p class="display-cost"> ${items[i].cost}</p>
		</div>`
			);
		}
	}
}

//_____Allow item to be displayed on about panel_____//
function showItem() {
	const domSelectorItem = {
		item: document.querySelectorAll(".item"),
	};

	//_____Show item on about panel when clicked_____//
	domSelectorItem.item.forEach((item) =>
		item.addEventListener("click", function () {
			domSelectorDiv.descriptionImg.innerHTML = "";
			domSelectorDiv.name.innerHTML = "";
			domSelectorDiv.statsList.innerHTML = "";
			domSelectorDiv.description1.innerHTML = "";
			domSelectorDiv.description2.innerHTML = "";

			//_____Show item img on about panel_____//
			domSelectorDiv.descriptionImg.insertAdjacentHTML(
				"afterbegin",
				`<img class="shop-window-description-image" src="${this.getAttribute(
					"src"
				)}" />`
			);

			//_____Get item object based on img src_____//
			const convert = String(`${this.getAttribute("src")}`).replace(
				"../images/",
				""
			);
			const find = allItems.filter((item) => item.icon.includes(`${convert}`));
			const statsArr = find[0].stats;

			//_____Show item description on about panel_____//
			statsArr.forEach((stat) => {
				domSelectorDiv.name.innerHTML = `${find[0].name}`;
				domSelectorDiv.cost.innerHTML = `${find[0].cost}`;
				domSelectorDiv.image.src = `../images/${find[0].icon}`;
				domSelectorDiv.statsList.insertAdjacentHTML(
					"beforeend",
					`<li>${stat}</li>`
				);
				domSelectorDiv.description1.innerHTML = `${find[0].description[0]}`;
				domSelectorDiv.description2.innerHTML = `${find[0].description[1]}`;
			});
		})
	);
}

export { clearItems, insertItems, showItem };
