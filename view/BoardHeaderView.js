'use strict';

class BoardHeaderView {
	constructor(title, id, viewsFactory) {
		this._element = viewsFactory.createElement("input");
		this._element.type = "button";
		this._element.value = title;
		this._element.className = "title";
		this._element.id = "boardHeaderView" + id;

		this._element.onclick = function () {
			//SELECT_BORAD_EVENT id
			//selectBoard(id);
		};
	}

	get element() {
		return this._element;
	}

}