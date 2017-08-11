'use strict';

class BoardView {
  constructor(board, viewsFactory, color) {
    this._viewsFactory = viewsFactory;

    this._color = color;
    this._id = board.id;
    this._element = viewsFactory.createElement("div");

    this._element.id = "board" + this._id; //TODO: перенести счетчик в другое место
    this._element.className = "board"; //todo: "boardView" -

    const parent = this._element;
    let lastClickedElement = null;

    this._element.onclick = function () {
      const event = new Event(EventType.SELECT_BOARD_EVENT, id);
      event.dispatch(document);
    };

    this._element.onclick = function (event) {
      let target = event.target;

      if (target.tagName != "DIV") return;


      selectSingle(target);

      lastClickedElement = target;
    };

    function toggleSelect(selectedElement) {
      selectedElement.classList.toggle('selected_border');
    }

    function deselectAll() {
      for (let i = 0; i < parent.children.length; i++) {
        parent.children[i].classList.remove('selected_border');
      }
    }

    function selectSingle(selectedElement) {
      deselectAll();
      if (selectedElement == parent) {
        return;
      }
      selectedElement.classList.add('selected_border');
    }

    const thisPtr = this;

    document.addEventListener(EventType.DELETE_LIST, function(event) {
      const id = event.detail;
      const view = thisPtr._getListViewById(id);
      thisPtr._element.removeChild(view.element);
      const index = board.lists.indexOf(view.list);
      board.lists.splice(index, 1);
    }, false);

    document.addEventListener(EventType.DELETE_NOTE, function(event) {
      const id = event.detail;
      const view = thisPtr._getNoteViewById(id);
      thisPtr._element.removeChild(view.element);
      const index = board.notes.indexOf(view.note);
      board.notes.splice(index, 1);
    }, false);

    document.addEventListener(EventType.DELETE_IMAGE, function(event) {
      const id = event.detail;
      const view = thisPtr._getImageViewById(id);
      thisPtr._element.removeChild(view.element);
      const index = board.images.indexOf(view.image);
      board.images.splice(index, 1);
    }, false);

    this._board = board;
    this.redraw();
  }

  _init(board) {
    for (let i = 0; i < board.lists.length; ++i) {
      this.addListView(board.lists[i])
    }

    for (let i = 0; i < board.notes.length; ++i) {
      this.addNoteView(board.notes[i])
    }

    for (let i = 0; i < board.images.length; ++i) {
      this.addImageView(board.images[i])
    }
  }

  redraw() {
    function removeChildren(element) {
      while (element.lastChild) {
        element.removeChild(element.lastChild);
      }
    }

    removeChildren(this._element);

    this._listViews = [];
    this._noteViews = [];
    this._imageViews = [];

    this._init(this._board);
    this.element.style.backgroundColor = this._color;
  }

  addListView(list) {
    const listView = this._viewsFactory.createListView(list);
    this._element.appendChild(listView.element);
    this._listViews.push(listView);
  }

  addNoteView(note) {
    const noteView = this._viewsFactory.createNoteView(note);
    this._element.appendChild(noteView.element);
    this._noteViews.push(noteView);
  }

  addImageView(image) {
    const imageView = this._viewsFactory.createImageView(image);
    this._element.appendChild(imageView.element);
    this._imageViews.push(imageView);
  }

  _getListViewById(id) {
    for (const view of this._listViews)
    {
      if (view.id == id)
      {
        return view;
      }
    }
    return null;
  }

  _getNoteViewById(id) {
    for (const view of this._noteViews)
    {
      if (view.id == id)
      {
        return view;
      }
    }
    return null;
  }

  _getImageViewById(id) {
    for (const view of this._imageViews)
    {
      if (view.id == id)
      {
        return view;
      }
    }
    return null;
  }

  get element() {
    return this._element;
  }

  get board() {
    return this._board;
  }

  get id() {
    return this._id;
  }
}
