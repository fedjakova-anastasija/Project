'use strict';

class ListView {
  constructor(list, viewsFactory) {
    this._viewsFactory = viewsFactory;
    this._list = list;

    this._viewId = Math.random();

    this._id = list.id;
    this._element = viewsFactory.createElement("div");

    this._element.id = "list" + list.id;
    this._element.className = "list";

    this._listElementViews = [];

    moveElement(list, this._element);

    this._delete = viewsFactory.createElement("input");
    this._delete.type = "button";
    this._delete.className = "delete";
    this._delete.value = "x";
    this._element.appendChild(this._delete);

    this._delete.onclick = function () {
      const event = new Event(EventType.DELETE_LIST, list.id);
      event.dispatch(thisPtr._element);
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
    this._input.placeholder = "Добавить...";
    this._element.appendChild(this._input);

    this._button = viewsFactory.createElement("input");
    this._button.className = "add";
    this._button.type = "button";
    this._button.value = "+";
    this._element.appendChild(this._button);

    this._input.onkeyup = function (e) {
      e = e || window.event;
      if (e.keyCode === 13) {
        const value = thisPtr._input.value;
        if (value === '') {
          alert("Пожалуйста, введите текст.");
        } else {
          const event = new Event(EventType.CLICK_ADD_LIST_ELEMENT, {list, value});
          event.dispatch(document);
          thisPtr._input.value = "";
        }
      }
      return false;
    };

    this._button.onclick = function () {
      const value = thisPtr._input.value;
      if (value === '') {
        alert("Пожалуйста, введите текст.");
      } else {
        const event = new Event(EventType.CLICK_ADD_LIST_ELEMENT, {list, value});
        event.dispatch(document);
        thisPtr._input.value = "";
      }
    };

    this._init(list);
  }

  _onDeleteListElement(event) {
    const id = event.detail;
    const view = this._getListElementViewById(id);
    this._element.removeChild(view.element);
    const index = this._list.elements.indexOf(view.listElement);
    this._list.elements.splice(index, 1);
    this._listElementViews.splice(index, 1);
  }

  _getListElementViewById(id) {
    for (const view of this._listElementViews) {
      if (view.id == id) {
        return view;
      }
    }
    return null;
  }

  _init(list) {
    for (let i = 0; i < list.elements.length; ++i) {
      this.addListElementView(list.elements[i])
    }

    this._element.style.position = 'absolute';
    this._element.style.left = list.position.x + 'px';
    this._element.style.top = list.position.y + 'px';
  }

  addListElementView(listElement) {
    const listElementView = this._viewsFactory.createListElementView(listElement, listElement.id, listElement.value);
    this._element.insertBefore(listElementView.element, this._input);
    this._listElementViews.push(listElementView);

    listElementView.element.addEventListener(EventType.DELETE_LIST_ELEMENT, this._onDeleteListElement.bind(this))
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
