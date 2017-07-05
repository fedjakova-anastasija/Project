'use strict';

class ModelView {
  constructor(model, viewsFactory) {
    this._element = viewsFactory.createElement("div");

    this._element.id = "model";

    this._boardsViews = [];

    //const headerView = viewsFactory.createHeaderView(model);
    const headerView = viewsFactory.createHeaderView(model);
  }

  get element() {
    return this._element;
  }

}