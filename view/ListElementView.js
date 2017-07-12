'use strict';

class ListElementView {
  constructor(list, viewsFactory, value) {
    this._element = viewsFactory.createElement("li");
    this._element.className = "list_element";

    this._element.setAttribute("id", list.id);

    this._input = viewsFactory.createElement("input");
    this._input.value = value;
    list.getElementsByClassName("input_place")[0].value = "";
  }

  get element() {
    return this._element;
  }

  get input() {
    return this._input;
  }
}