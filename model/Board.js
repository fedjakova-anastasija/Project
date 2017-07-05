'use strict';

class Board {
	constructor(title, id) {
		this._id = id;
		this._title = title;
		this._lists = [];
		this._img = "";
	}

	get id() {
		return this._id;
	}

	get title() {
		return this._title;
	}

	get lists() {
		return this._lists;
	}
}