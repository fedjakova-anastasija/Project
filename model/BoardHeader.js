'use strict';

class BoardHeader {
  constructor(title) {
    this._title = title
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }
}