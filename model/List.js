'use strict';

class List {
	constructor(title, id) {
		this._id = id;
		this._title = title;
		this._elements = [];
		this._type = "list";
		this._position = {x: 0, y: 0};
	}

	get title() {
		return this._title;
	}

	set title(value) {
		this._title = value;
	}

	get id() {
		return this._id;
	}

	get elements() {
		return this._elements;
	}

	get position() {
		return this._position;
	}
}