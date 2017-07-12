'use strict';

class BoardView {
  constructor(board, viewsFactory) {
    this._viewsFactory = viewsFactory;

    this._id = board.id;
    this._element = viewsFactory.createElement("div");

    this._element.id = "board" + this._id; //TODO: перенести счетчик в другое место
    this._element.className = "board"; //todo: "boardView" -

    this._board = board;
    this.redraw();
  }

  _init (board) {
    for (let i = 0; i < board.lists.length; ++i) {
      this.addListView(board.lists[i])
    }
  }

    redraw () {
        //TODO:
        this._listViews = [];

        this._init(this._board);
    }

  addListView (list) {
    const listView = this._viewsFactory.createListView(list);
    this._element.appendChild(listView.element);
    this._listViews.push(listView);
  }

  get element() {
    return this._element;
  }

  get id() {
    return this._id;
  }
}
