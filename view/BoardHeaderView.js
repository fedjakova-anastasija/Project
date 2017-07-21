'use strict';

class BoardHeaderView {
  constructor(title, id, board, viewsFactory) {
    this._viewsFactory = viewsFactory;

    this._element = viewsFactory.createElement("div");
    this._element.className = "title_head";

    this._input = viewsFactory.createElement("input");
    //this._element.type = "button";
    this._input.value = board.title;
    this._input.className = "title";
    this._input.id = "boardHeaderView" + id;
    this._element.appendChild(this._input);

    const thisPtr = this;
    this._input.onchange = function () {
      const newTitle = thisPtr._input.value;
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