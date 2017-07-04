'use strict';

class ListView {
	constructor(list, viewsFactory) {
		this._element = viewsFactory.createElement();

		this._element.id = "list" + listId++; // счетчик!
		this._element.className = "list";
	}

	get element () {
		return this._element;
	}

}