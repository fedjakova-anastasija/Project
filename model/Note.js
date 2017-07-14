'use strict';

class Note {
  constructor(title, id) {
    this._id = id;
    this._title = title;
    this._type = "note";
    this._position = {x: 0, y: 0};
  }

  get title() {
    return this._title;
  }

  get id() {
    return this._id;
  }

  get position() {
    return this._position;
  }
}