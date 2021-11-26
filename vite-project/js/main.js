import "../styles/style.css";
import { mythic } from "./items/mythic-items";
import { legendary } from "./items/legendary-items";
import { epic } from "./items/epic-items";
import { basic } from "./items/basic-items";
import { starter } from "./items/starter-items";

const domSelector = {
	mythicDiv: document.querySelector(".shop-window-itemDisplay-mythic"),
	legendaryDiv: document.querySelector(".shop-window-itemDisplay-legendary"),
	epicDiv: document.querySelector(".shop-window-itemDisplay-epic"),
	basicDiv: document.querySelector(".shop-window-itemDisplay-basic"),
	starterDiv: document.querySelector(".shop-window-itemDisplay-starter"),
};

for (var i = 0; i < mythic.length; i++) {
	domSelector.mythicDiv.insertAdjacentHTML(
		"afterbegin",
		`<div>
            <img src="../images/${mythic[i].icon}" />
		    <p>${mythic[i].cost}</p>
		</div>`
	);
}

for (var i = 0; i < legendary.length; i++) {
	domSelector.legendaryDiv.insertAdjacentHTML(
		"afterbegin",
		`<div>
            <img src="../images/${legendary[i].icon}" />
		    <p>${legendary[i].cost}</p>
		</div>`
	);
}
for (var i = 0; i < epic.length; i++) {
	domSelector.epicDiv.insertAdjacentHTML(
		"afterbegin",
		`<div>
            <img src="../images/${epic[i].icon}" />
		    <p>${epic[i].cost}</p>
		</div>`
	);
}
for (var i = 0; i < basic.length; i++) {
	domSelector.basicDiv.insertAdjacentHTML(
		"afterbegin",
		`<div>
            <img src="../images/${basic[i].icon}" />
		    <p>${basic[i].cost}</p>
		</div>`
	);
}
for (var i = 0; i < starter.length; i++) {
	domSelector.starterDiv.insertAdjacentHTML(
		"afterbegin",
		`<div>
            <img src="../images/${starter[i].icon}" />
		    <p>${starter[i].cost}</p>
		</div>`
	);
}
