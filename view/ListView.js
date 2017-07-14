'use strict';

class ListView {
  constructor(list, viewsFactory) {
    this._viewsFactory = viewsFactory;

    this._id = list.id;
    this._element = viewsFactory.createElement("div");

    this._element.id = "list" + list.id; // счетчик!
    this._element.className = "list";

<<<<<<< HEAD
    this._listElementViews = [];

=======
>>>>>>> e7e974234e49b8127b3223e6a2126e3255f07d50
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
<<<<<<< HEAD
        const event = new Event(EventType.CLICK_ADD_LIST_ELEMENT);
        event.dispatch(document);
      };
=======
      //CLICK_ADD_LIST_ELEMENT id

      const value = listParent.getElementsByClassName("input_place")[0].value;
      const element = new ListElementView(listParent, viewsFactory, value);

     /* const value = listParent.getElementsByClassName("input_place")[0].value;
      const element = new ListElement(listParent, viewsFactory, value);

      element.element.addEventListener(EventType.DELETE_ELEMENT, function (event) {
        listParent.removeChild(element.element);

        const index = list.elements.indexOf(element);

        list.elements.splice(index, 1);
      }, false);

      list.elements.push(element);


      listParent.appendChild(element.element)*/
    };
  }
>>>>>>> e7e974234e49b8127b3223e6a2126e3255f07d50

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
<<<<<<< HEAD

  get element() {
    return this._element;
  }

  get header() {
    return this._header;
  }

  get input() {
    return this._input;
=======
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
>>>>>>> e7e974234e49b8127b3223e6a2126e3255f07d50
  }

  get button() {
    return this._button;
  }

  get id() {
    return this._id;
  }
}
