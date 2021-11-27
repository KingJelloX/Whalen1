import { domSelectorDiv } from "./domSelector";

function clearItems() {
	const getProperty = Object.values(domSelectorDiv);
	getProperty.forEach((div) => {
		div.innerHTML = "";
	});
}
function insertItems(items) {
	for (var i = 0; i < items.length; i++) {
		if (items[i].type === "mythic") {
			domSelectorDiv.mythicDiv.insertAdjacentHTML(
				"afterbegin",
				`<div>
            <img src="../images/${items[i].icon}" />
		    <p>${items[i].cost}</p>
		</div>`
			);
		} else if (items[i].type === "legendary") {
			domSelectorDiv.legendaryDiv.insertAdjacentHTML(
				"afterbegin",
				`<div>
            <img src="../images/${items[i].icon}" />
		    <p>${items[i].cost}</p>
		</div>`
			);
		} else if (items[i].type === "epic") {
			domSelectorDiv.epicDiv.insertAdjacentHTML(
				"afterbegin",
				`<div>
            <img src="../images/${items[i].icon}" />
		    <p>${items[i].cost}</p>
		</div>`
			);
		} else if (items[i].type === "basic") {
			domSelectorDiv.basicDiv.insertAdjacentHTML(
				"afterbegin",
				`<div>
            <img src="../images/${items[i].icon}" />
		    <p>${items[i].cost}</p>
		</div>`
			);
		} else if (items[i].type === "starter") {
			domSelectorDiv.starterDiv.insertAdjacentHTML(
				"afterbegin",
				`<div>
            <img src="../images/${items[i].icon}" />
		    <p>${items[i].cost}</p>
		</div>`
			);
		}
	}
}

export { clearItems, insertItems };
