'use strict';

class Model {
  constructor(title) {
    this._title = title;
    this._boards = [];
    this._about = aboutObj;
  }

  get title() {
    return this._title;
  }

  get boards() {
    return this._boards;
  }
}