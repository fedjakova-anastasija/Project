'use strict';

class BoardView {
  constructor(board, viewsFactory) {
    this._element = viewsFactory.createElement("div");

    this._element.id = "board" + BoardId++; //TODO: перенести счетчик в другое место
    this._element.className = "board"; //todo: "boardView" -

    this._listViews = [];

    for (let i = 0; i < board.lists.length; ++i) {
      const listView = viewsFactory.createListView(board.lists[i]);
      this._element.appendChild(listView.element);
      this._listViews.push(listView);
    }
  }

  get element() {
    return this._element;
  }
}
