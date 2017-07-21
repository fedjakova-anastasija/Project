'use strict';

class BoardView {
  constructor(board, viewsFactory, color) {
    this._viewsFactory = viewsFactory;

    this._color = color;
    this._id = board.id;
    this._element = viewsFactory.createElement("div");

    this._element.id = "board" + this._id; //TODO: перенести счетчик в другое место
    this._element.className = "board"; //todo: "boardView" -

    this._board = board;
    this.redraw();
  }

  _init(board) {
    for (let i = 0; i < board.lists.length; ++i) {
      this.addListView(board.lists[i])
    }

    for (let i = 0; i < board.notes.length; ++i) {
      this.addNoteView(board.notes[i])
    }

    for (let i = 0; i < board.images.length; ++i) {
      this.addNoteView(board.images[i])
    }
  }

  redraw() {
    //this._element.removeChild
    this._listViews = [];
    this._noteViews = [];
    this._imageViews = [];

    this._init(this._board);
    this.element.style.backgroundColor = this._color;
  }

  addListView(list) {
    const listView = this._viewsFactory.createListView(list);
    this._element.appendChild(listView.element);
    this._listViews.push(listView);
  }

  addNoteView(note) {
    const noteView = this._viewsFactory.createNoteView(note);
    this._element.appendChild(noteView.element);
    this._noteViews.push(noteView);
  }

  addImageView(image) {
    const imageView = this._viewsFactory.createImageView(image);
    this._element.appendChild(imageView.element);
    this._imageViews.push(imageView);
  }

  get element() {
    return this._element;
  }

  get board() {
    return this._board;
  }

  get id() {
    return this._id;
  }
}
