'use strict';

class ViewsFactory {

	ItemsFactory() {
	}

	createElement() {
		const div = document.createElement("div");
		return div;
	}

	createBoardView(board) {
		return new BoardView(board, this);
	}

	createListView(list) {
		return new ListView(list, this);
	}
}