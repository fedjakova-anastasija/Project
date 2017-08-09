'use strict';

class BoardHeaderView {
  constructor(title, id, board, viewsFactory) {
    this._viewsFactory = viewsFactory;

    this._element = viewsFactory.createElement("div");
    this._element.className = "title_head";

    this._title = viewsFactory.createElement("input");
    //this._element.type = "button";
    this._title.value = board.title;
    this._title.className = "title";
    this._title.id = "boardHeaderView" + id;
    this._element.appendChild(this._title);

    this._close = viewsFactory.createElement("input");
    this._close.type = "button";
    this._close.value = "x";
    this._close.className = "close_board";
    this._element.appendChild(this._close);

    this._close.onclick = function () {
        alert("Are you sure?");
    };

    const thisPtr = this;
    this._element.onchange = function () {
      const newTitle = thisPtr._element.value;
      board.title = newTitle;
    };

    this._element.onclick = function () {
      const event = new Event(EventType.SELECT_BOARD_EVENT, id);
      event.dispatch(document);
    };
  }

  get element() {
    return this._element;
  }
}