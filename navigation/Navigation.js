'use strict';

class Navigation {
  constructor(title) {
    this._title = title;
  }

  get title() {
    return this._title;
  }
}