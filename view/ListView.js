'use strict';

class ListView {
  constructor(list, viewsFactory) {
    this._viewsFactory = viewsFactory;
    this._list = list;

    this._id = list.id;
    this._element = viewsFactory.createElement("div");

    this._element.id = "list" + list.id; // счетчик!
    this._element.className = "list";

    this._listElementViews = [];

    moveElement(list, this._element);

    this._close = viewsFactory.createElement("input");
    this._close.type = "button";
    this._close.className = "close";
    this._element.appendChild(this._close);
	  this._close.onclick = function () {

	  }

    this._close.onclick = function () {
      const event = new Event(EventType.DELETE_LIST, list.id);
      event.dispatch(document);
    };

    this._header = viewsFactory.createElement("input");
    this._header.className = "title_element";
    this._header.value = list.title;
    this._element.appendChild(this._header);

    const thisPtr = this;
    this._header.onchange = function () {
      const newTitle = thisPtr._header.value;
      list.title = newTitle;
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
      const value = thisPtr._input.value;
      if (value === '') {
        alert("Please, write something.");
      } else {
        const event = new Event(EventType.CLICK_ADD_LIST_ELEMENT, {list, value});
        event.dispatch(document);
        thisPtr._input.value = "";
      }
    };

    document.addEventListener(EventType.ADD_LIST_ELEMENT, function (event) {
      const listElement = event.detail;
      thisPtr.addListElementView(listElement);
    }, false);

<<<<<<< HEAD
    document.addEventListener(EventType.DELETE_LIST_ELEMENT, function (event) {
      const id = event.detail;
      const view = thisPtr._getListElementViewById(id);
      thisPtr._element.removeChild(view.element);
      const index = list.elements.indexOf(view.listElement);
      list.elements.splice(index, 1);
=======
    document.addEventListener(EventType.DELETE_ELEMENT, function(event) {
        const id = event.detail;
        const view = thisPtr._getViewById(id);
		thisPtr._element.removeChild(view.element);
        const index = list.elements.indexOf(view.listElement);
        list.elements.splice(index, 1);
>>>>>>> e94cd34be215468503d0c56f2dd880ef12e0b8c1
    }, false);

    this._init(list);
  }

<<<<<<< HEAD
  _getListElementViewById(id) {
    for (const view of this._listElementViews) {
      if (view.id == id) {
=======
  _getViewById(id) {
    for (const view of this._listElementViews)
    {
      if (view.id == id)
      {
>>>>>>> e94cd34be215468503d0c56f2dd880ef12e0b8c1
        return view;
      }
    }
    return null;
  }

  _init(list) {
    for (let i = 0; i < list.elements.length; ++i) {
      this.addListElementView(list.elements[i])
    }
<<<<<<< HEAD

    this._element.style.position = 'absolute';
    this._element.style.left = list.position.x + 10 + 'px';
    this._element.style.top = list.position.y + 10 + 'px';
=======
	  this._element.style.left = list.position.x + 'px';
	  this._element.style.top = list.position.y + 'px';
	  this._element.style.position = 'fixed';
>>>>>>> e94cd34be215468503d0c56f2dd880ef12e0b8c1
  }

  addListElementView(listElement) {
    const listElementView = this._viewsFactory.createListElementView(listElement, listElement.id, listElement.value);
    this._element.appendChild(listElementView.element);

    this._listElementViews.push(listElementView);
  }

  get element() {
    return this._element;
  }

  get id() {
    return this._id;
  }

  get list() {
    return this._list;
  }
}
