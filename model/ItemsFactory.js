'use strict';

class ItemsFactory {

  constructor() {
    this._listId = 0;
    this._listElementId = 0;
    this._boardId = 0;
    this._noteId = 0;
    this._imageId = 0;
  }

  createBoard(title) {
    return new Board(title, this._boardId++);
  }

  createList(title) {
    return new List(title, this._listId++);
  }

  createListElement() {
    return new ListElement(this._listElementId++);
  }

  createNote(title) {
    return new Note(title, this._noteId++);
  }

  createImage(path) {
    return new Picture(path, this._imageId++);
  }

  createModel(title) {
    return new Model(title);
  }

  createHeader() {
    return new Header();
  }

  createNavigation(title) {
    return new Navigation(title);
  }
}

