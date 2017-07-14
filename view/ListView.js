'use strict';

class ListView {
  constructor(list, viewsFactory) {
    this._viewsFactory = viewsFactory;

    this._id = list.id;
    this._element = viewsFactory.createElement("div");

    this._element.id = "list" + list.id; // счетчик!
    this._element.className = "list";

    this._listElementViews = [];

    moveElement(list, this._element);

    this._header = viewsFactory.createElement("input");
    this._header.className = "title_element";
    this._header.value = list.title;
    this._element.appendChild(this._header);

    this._header.onchange = function () {

    };

    this._input = viewsFactory.createElement("input");
    this._input.className = "input_place";
    this._input.placeholder = "You should do...";
    this._element.appendChild(this._input);

    this._button = viewsFactory.createElement("input");
    this._button.className = "add";
    this._button.type = "button";
    this._button.value = "add";
    this._element.appendChild(this._button);

    this._button.onclick = function () {
        const event = new Event(EventType.CLICK_ADD_LIST_ELEMENT);
        event.dispatch(document);
      };

    this._init(list);
  }

  _init(list) {
    for (let i = 0; i < list.elements.length; ++i) {
      this.addListElementView(list.elements[i])
    }
  }

  addListElementView(list_element) {
    const listElementView = this._viewsFactory.createListElementView(list_element);
    this._element.appendChild(listElementView.element);
    this._listElementViews.push(listElementView);
  }

  get element() {
    return this._element;
  }

  get header() {
    return this._header;
  }

  get input() {
    return this._input;
  }

  get button() {
    return this._button;
  }

  get id() {
    return this._id;
  }
}
