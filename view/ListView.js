'use strict';

class ListView {
  constructor(list, viewsFactory) {
    this._element = viewsFactory.createElement("div");

    this._element.id = "list" + list.id; // счетчик!
    this._element.className = "list";
<<<<<<< HEAD
    moveElement(list, this._element);
=======
>>>>>>> d430978e75fd18ac767dc9519258daab07b32403

    this._header = viewsFactory.createElement("input");
    this._header.className = "title_element";
    this._header.value = list.title;
    this._element.appendChild(this._header);

    this._input = viewsFactory.createElement("input");
    this._input.className = "input_place";
    this._input.placeholder = "You should do...";
    this._element.appendChild(this._input);

    this._button = viewsFactory.createElement("input");
    this._button.className = "add";
    this._button.type = "button";
    this._button.value = "add";
    this._element.appendChild(this._button);

    const listParent = this._element;
    this._button.onclick = function () {
      //CLICK_ADD_LIST_ELEMENT id
<<<<<<< HEAD
      const value = listParent.getElementsByClassName("input_place")[0].value;
      const element = new ListElementView(listParent, viewsFactory, value);
=======
     /* const value = listParent.getElementsByClassName("input_place")[0].value;
      const element = new ListElement(listParent, viewsFactory, value);
>>>>>>> d430978e75fd18ac767dc9519258daab07b32403

      element.element.addEventListener(EventType.DELETE_ELEMENT, function (event) {
        listParent.removeChild(element.element);

        const index = list.elements.indexOf(element);

        list.elements.splice(index, 1);
      }, false);

      list.elements.push(element);

<<<<<<< HEAD
      listParent.appendChild(element.element)
=======
      listParent.appendChild(element.element)*/
>>>>>>> d430978e75fd18ac767dc9519258daab07b32403
    };
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
}

<<<<<<< HEAD
=======
class ListElement {
  constructor(list, viewsFactory, value) {
    this._liPoint = viewsFactory.createElement("li");
    this._liPoint.className = "list_element";

    this._liPoint.setAttribute("id", list.id);

    this._input = viewsFactory.createElement("input");
    this._input.value = value;
    list.getElementsByClassName("input_place")[0].value = "";
  }

  get element() {
    return this._liPoint;
  }

  get input() {
    return this._input;
  }
}


>>>>>>> d430978e75fd18ac767dc9519258daab07b32403
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
