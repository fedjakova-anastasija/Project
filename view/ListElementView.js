'use strict';

class ListElementView {
  constructor(listElement, viewsFactory, value, id) {
    this._viewsFactory = viewsFactory;

    this._id = listElement.id;
    this._element = viewsFactory.createElement("li");
    this._element.id = "listElement" + listElement.id; // счетчик!
    this._element.setAttribute("id", this._element.id);

    this._input = viewsFactory.createElement("input");
    this._input.value = value;
    this._input.className = "list_element";
    this._element.appendChild(this._input);

    this._button = viewsFactory.createElement("input");
    this._button.type = "button";
    this._button.value = "x";
    this._button.className = "close_point";

    this._button.onclick = function () {
      var event = new Event(EventType.DELETE_ELEMENT, {
        detail: id
      });
      event.dispatch(document);
    };

    this._element.appendChild(this._button);

    this._check = viewsFactory.createElement("input");
    this._check.type = "checkbox";
    this._check.id = "checkbox";

    this._check.onclick = function () {
      document.getElementById('checkbox').setAttribute('checked', 'checked');
    };

    this._element.appendChild(this._check);
  }

  /*const listParent = this._element;
   const new_value = listParent.getElementsByClassName("input_place")[0].value;
   const element = new ListElementView(listParent, viewsFactory, new_value);

   element.element.addEventListener(EventType.DELETE_ELEMENT, function (event) {
   listParent.removeChild(element.element);

   const index = listElement.elements.indexOf(element);

   listElement.elements.splice(index, 1);
   }, false);

   listElement.elements.push(element);

   listParent.appendChild(this._element)*/

  get element() {
    return this._element;
  }

  get id() {
    return this._id;
  }
}
