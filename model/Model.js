'use strict';

class Model {
  constructor(title) {
    this._title = title;
    this._boards = [];
    this._about = {
      name: "",
      lastName: "",
	  info: "",
	  email: "",
	  img: ""
    };
  }

  get title() {
    return this._title;
  }

  get boards() {
    return this._boards;
  }

  get about() {
    return this._about;
  }
}