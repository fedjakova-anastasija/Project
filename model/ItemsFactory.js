'use strict';

class ItemsFactory {

  constructor() {
    this._listId = 0;
    this._listElementId = 0;
    this._boardId = 0;
  }

  createBoard(title) {
    return new Board(title, this._boardId++);
  }

  createList(title) {
    return new List(title, this._listId++);
  }

  createModel(title) {
    return new Model(title);
  }

  createHeader() {
    return new Header();
  }
}

