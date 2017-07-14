'use strict';

class ListElement {
  constructor(id) {
    this._id = id;
    this._position = {x: 0, y: 0};
  }

  get id() {
    return this._id;
  }

  get position() {
    return this._position;
  }
}