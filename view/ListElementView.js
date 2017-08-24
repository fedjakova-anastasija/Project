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

    //moveElement(listElement, this._element);

    this._input = viewsFactory.createElement("input");
    this._input.value = listElement.text;
    this._input.className = "list_element";
    this._element.appendChild(this._input);
    this._input.onkeyup = function (e) {
      e = e || window.event;
      if (e.keyCode === 46) {
        const event = new Event(EventType.DELETE_LIST_ELEMENT, listElement.id);
        event.dispatch(thisPtr._element);
      }
    };

    const thisPtr = this;
    this._input.onchange = function () {
      const newText = thisPtr._input.value;
      listElement.text = newText;
    };

    const element = this._element;
    element.onclick = function () {
      if (listElement.checked) {
        element.classList.remove("checked");
        thisPtr._input.classList.remove("line_through");
      } else {
        element.classList.add("checked");
        thisPtr._input.classList.add("line_through");
      }
	  listElement.checked = !listElement.checked;

		const event = new Event(EventType.CHECKED, listElement.id);
		event.dispatch(thisPtr._element);
    };

    this._delete = viewsFactory.createElement("input");
    this._delete.type = "delete";
    this._delete.value = "x";
    this._delete.className = "delete_element";

    this._delete.onclick = function () {
      const event = new Event(EventType.DELETE_LIST_ELEMENT, listElement.id);
      event.dispatch(thisPtr._element);
    };

    this._element.appendChild(this._delete);
  }

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
