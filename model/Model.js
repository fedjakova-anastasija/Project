'use strict';

class Model {
  constructor(title) {
    this._title = title;
    this._boards = [];
    this._about = {
      name: "12",
      lastName: "3432",
      img: "1.png"
    };
  }

  get title() {
    return this._title;
  }

  get boards() {
    return this._boards;
  }
}