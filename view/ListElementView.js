'use strict';

class ListElementView {
  constructor(listElement, viewsFactory, id) {
    this._listElement = listElement;
    this._viewsFactory = viewsFactory;

    const text = listElement.text;

    this._id = listElement.id;
    this._element = viewsFactory.createElement("li");
    this._element.id = "listElement" + listElement.id; // счетчик!
    this._element.setAttribute("id", this._element.id);

    this._input = viewsFactory.createElement("input");
    this._input.value = listElement.text;
    this._input.className = "list_element";
    this._element.appendChild(this._input);

    const thisPtr = this;
    this._input.onchange = function () {
      const newText = thisPtr._input.value;
      listElement.text = newText;
    };

    this._button = viewsFactory.createElement("input");
    this._button.type = "button";
    this._button.value = "x";
    this._button.className = "close_point";

    this._button.onclick = function () {
      const event = new Event(EventType.DELETE_LIST_ELEMENT, listElement.id);
      event.dispatch(thisPtr._element);
    };

    this._element.appendChild(this._button);

    this._check = viewsFactory.createElement("input");
    this._check.type = "checkbox";
    this._check.id = "checkbox";
    //this._check.className = "not_checked";

    const element = this._element;
    let k = 0;

    this._check.onclick = function () {
      if (k % 2) {
        element.classList.remove('check');

        listElement._checked = !listElement._checked;
        //text-decoration: line-through;
      } else {
        element.classList.add('check');
      }
      k++;
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

  get listElement() {
      return this._listElement;
  }
}
