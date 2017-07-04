'use strict';

class ItemsFactory {

	ItemsFactory() {
	}

	createBoard(title) {
		return new Board(title);
	}

	createList(title) {
		return new List(title);
	}
}