'use strict';

class Board {
	constructor(title) {
		this._title = title;
		this._lists = [];
		this._img = "";
	}

	get title() {
		return this._title;
	}

	get lists() {
		return this._lists;
	}
}