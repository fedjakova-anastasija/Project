'use strict';

class NoteView {
  constructor(note, viewsFactory) {
    this._element = viewsFactory.createElement("div");
    this._element.id = "note" + note.id;
    this._element.className = "note";

    moveElement(note, this._element);

    this._header = viewsFactory.createElement("input");
    this._header.className = "title_element";
    this._header.value = note.title;
    this._element.appendChild(this._header);

    //this._input = viewsFactory.createElement("input");
    this._input = viewsFactory.createElement("textarea");
    this._input.className = "textarea_place";
    this._input.placeholder = "You should do...";
    this._input.value = note.text;
    this._element.appendChild(this._input);

    const thisPtr = this;
    this._header.onchange = function () {
      const newTitle = thisPtr._header.value;
      note.title = newTitle;
    };

    this._input.onchange = function () {
      const newText = thisPtr._input.value;
      note.text = newText;
    };
  }

  get element() {
    return this._element;
  }
}
