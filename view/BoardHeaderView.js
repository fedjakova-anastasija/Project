'use strict';

class BoardHeaderView {
	constructor(title, id, viewsFactory) {
<<<<<<< HEAD
		this._element = viewsFactory.createElement("div");
		this._element.className = "title_head";

		this._input = viewsFactory.createElement("input");
		//this._element.type = "button";
		this._input.value = title;
		this._input.className = "title";
		this._input.id = "boardHeaderView" + id;
    this._element.appendChild(this._input);

		this._input.onclick = function () {
=======
		this._element = viewsFactory.createElement("input");
		//this._element.type = "button";
		this._element.value = title;
		this._element.className = "title";
		this._element.id = "boardHeaderView" + id;

		this._element.onclick = function () {
>>>>>>> e7e974234e49b8127b3223e6a2126e3255f07d50
			const event = new Event(EventType.SELECT_BOARD_EVENT, id);
			event.dispatch(document);
		};
	}

	get element() {
		return this._element;
	}
}