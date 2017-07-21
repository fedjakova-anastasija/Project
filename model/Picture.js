'use strict';

class Picture {
  constructor(path, id) {
    this._id = id;
    this._path = path;
    this._type = "image";
    this._position = {x: 0, y: 0};
  }

  get path() {
    return this._path;
  }

  get id() {
    return this._id;
  }

  get position() {
    return this._position;
  }
}