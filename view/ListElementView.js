'use strict';

class ListElementView {
  constructor(list, viewsFactory, value) {
    this._element = viewsFactory.createElement("li");
    this._element.className = "list_element";

    this._element.setAttribute("id", list.id);

    this._input = viewsFactory.createElement("input");
    this._input.value = value;
    list.getElementsByClassName("input_place")[0].value = "";

    const listParent = this._element;
    const new_value = listParent.getElementsByClassName("input_place")[0].value;
    const element = new ListElementView(listParent, viewsFactory, new_value);

    element.element.addEventListener(EventType.DELETE_ELEMENT, function (event) {
      listParent.removeChild(element.element);

      const index = list.elements.indexOf(element);

      list.elements.splice(index, 1);
    }, false);

    list.elements.push(element);

    listParent.appendChild(element.element)
  }

  get element() {
    return this._element;
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