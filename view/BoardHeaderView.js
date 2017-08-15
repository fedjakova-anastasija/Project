'use strict';

class BoardHeaderView {
  constructor(title, id, board, viewsFactory) {
    this._viewsFactory = viewsFactory;

    this._board = board;
    this._id = board.id;

    this._element = viewsFactory.createElement("div");
    this._element.className = "title_head";
    this._element.id = "boardHeaderView" + id;

    this._title = viewsFactory.createElement("input");
    this._title.value = board.title;
    this._title.className = "title";
    this._element.appendChild(this._title);

    this._close = viewsFactory.createElement("input");
    this._close.type = "button";
    this._close.value = "x";
    this._close.className = "close_board";
    this._element.appendChild(this._close);

    this._close.onclick = function () {
      const result = confirm("Are you sure?");

      if (result) {
        const event = new Event(EventType.DELETE_BOARD, board.id);
        event.dispatch(thisPtr._element);
      }
    };

    const thisPtr = this;
    this._element.onchange = function () {
      const newTitle = thisPtr._title.value;
      board.title = newTitle;
    };

    this._title.onclick = function () {
      const event = new Event(EventType.SELECT_BOARD_EVENT, id);
      event.dispatch(thisPtr._element);
    };
  }

  set selected(value) {
	  if (value)
	  {
		  this.element.classList.add("selected");
	  }
	  else
	  {
		  this.element.classList.remove("selected");
	  }
  }

  get element() {
    return this._element;
  }

  get board() {
    return this._board;
  }

  get title() {
    return this._title;
  }

  get id() {
    return this._id;
  }
}