'use strict';

class BoardHeaderView {
	constructor(title, id, viewsFactory) {
		this._element = viewsFactory.createElement("input");
		this._element.type = "button";
		this._element.value = title;
		this._element.className = "title";
		this._element.id = "boardHeaderView" + id;

		this._element.onclick = function () {
			//SELECT_BOARD_EVENT id
        const event = new Event(EventType.SELECT_BOARD_EVENT);
        event.dispatch(document);
			//selectBoard(id);

		};
	}

	get element() {
		return this._element;
	}
}