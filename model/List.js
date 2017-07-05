'use strict';

class List {
	constructor(title) {
		this._title = title;
		this._elements = [];
		this._type = "list";
		this._position = {x: 0, y: 0};
	}

	get title() {
		return this._title;
	}

	get elements() {
		return this._elements;
	}

	get position() {
		return this._position;
	}
}