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

  createModel(title) {
    return new Model(title);
  }

  createHeader() {
    return new Header();
  }
}

