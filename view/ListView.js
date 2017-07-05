'use strict';

class ListView {
  constructor(list, viewsFactory) {
    this._list = viewsFactory.createElement("div");

    this._list.id = "list" + listId++; // счетчик!
    this._list.className = "list";

    this._header = viewsFactory.createElement("input");
    this._header.className = "title_list";
    this._header.value = list.title;

    this._input = viewsFactory.createElement("input");
    this._input.className = "input_place";
    this._input.placeholder = "You should do...";

    this._button = viewsFactory.createElement("input");
    this._button.className = "add";
    this._button.type = "button";
    this._button.value = "add";

    this._button.onclick = function () {
      let value = this._list.getElementsByClassName("input_place")[0].value;

      const element = ListElement(this._list, value);

      element.view.addEventListener(EventType.DELETE_ELEMENT, function (event) {
        this._list.removeChild(element.view);

        const index = list.elements.indexOf(element);

        list.elements.splice(index, 1);
      }, false);
      list.elements.push(element);
    };
  }

  get list() {
    return this._list;
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
}

class ListElement {
  constructor(list, viewsFactory, value) {
    this._liPoint = viewsFactory.createElement("li");
    this._liPoint.className = "list_element";

    this._liPoint.setAttribute("id", number++);

    this._input = viewsFactory.createElement("input");
    this._input.value = value;
    list.getElementsByClassName("input_place")[0].value = "";
  }

  get liPoint() {
    return this._liPoint;
  }

  get input() {
    return this._input;
  }
}


class buttonClose {
  constructor(item, viewsFactory, id) {
    this._button = viewsFactory.createElement("input");
    this._button.type = "button";
    this._button.value = "x";
    this._button.className = "close_point";

    this._button.onclick = function () {
      var event = new CustomEvent(EventType.DELETE_ELEMENT, {
        detail: id
      });
      item.dispatchEvent(event);
    }
  }

  get button() {
    return this._button;
  }
}

class buttonCheck {
  constructor(item, viewsFactory, id) {
    this._check = viewsFactory.createElement("input");
    this._check.type = "checkbox";
    this._check.id = "checkbox";

    this._check.onclick = function () {
      document.getElementById('checkbox').setAttribute('checked', 'checked');
    }
  }

  get check() {
    return this._check;
  }
}
