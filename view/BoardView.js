'use strict';

class BoardView {
  constructor(board, viewsFactory/*, color*/) {
    this._viewsFactory = viewsFactory;

    this._board = board;

    this._listViews = [];
    this._noteViews = [];
    this._imageViews = [];

    /*this._color = color;*/
    this._id = board.id;

    this._element = viewsFactory.createElement("div");
    this._element.id = "board" + this._id;
    this._element.className = "board";

    const parent = this._element;
    let lastClickedElement = null;

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

    function intersect(a, b) {
      return Math.max(a.left, b.left) < Math.min(a.right, b.right) &&
        Math.max(a.top, b.top) < Math.min(a.bottom, b.bottom);
    }

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
    for (const listView of this._listViews) {
      this._element.removeChild(listView.element);
    }

    for (const noteView of this._noteViews) {
      this._element.removeChild(noteView.element);
    }

    for (const imageView of this._imageViews) {
      this._element.removeChild(imageView.element);
    }

    this._listViews = [];
    this._noteViews = [];
    this._imageViews = [];

    this._init(this._board);
    //this.element.style.backgroundColor = this._color;
  }

  addListView(list) {
    const listView = this._viewsFactory.createListView(list);
    this._element.appendChild(listView.element);
    /*if (this._element.children.length == 1) {
      listView.element.style.left = list.position.x + 'px';
    } else {
      if (this._element.children.length != 0) {
        listView.element.style.left = list.position.x + 200 + 'px';
      }
    }*/
    this._listViews.push(listView);

    listView.element.addEventListener(EventType.DELETE_LIST, this._onDeleteList.bind(this));
  }

  addNoteView(note) {
    const noteView = this._viewsFactory.createNoteView(note);
    this._element.appendChild(noteView.element);
    this._noteViews.push(noteView);

    noteView.element.addEventListener(EventType.DELETE_NOTE, this._onDeleteNote.bind(this));
  }

  addImageView(image) {
    const imageView = this._viewsFactory.createImageView(image);
    this._element.appendChild(imageView.element);
    this._imageViews.push(imageView);

    imageView.element.addEventListener(EventType.DELETE_IMAGE, this._onDeleteImage.bind(this));
  }

  _onDeleteList(event) {
    const id = event.detail;
    const view = this._getListViewById(id);
    this._element.removeChild(view.element);
    const index = this._board.lists.indexOf(view.list);
    this._board.lists.splice(index, 1);
    this._listViews.splice(index, 1);
  }

  _onDeleteNote(event) {
    const id = event.detail;
    const view = this._getNoteViewById(id);
    this._element.removeChild(view.element);
    const index = this._board.notes.indexOf(view.note);
    this._board.notes.splice(index, 1);
    this._noteViews.splice(index, 1);
  }

  _onDeleteImage(event) {
    const id = event.detail;
    const view = this._getImageViewById(id);
    this._element.removeChild(view.element);
    const index = this._board.images.indexOf(view.image);
    this._board.images.splice(index, 1);
    this._imageViews.splice(index, 1);
  }

  _getListViewById(id) {
    for (const view of this._listViews) {
      if (view.id == id) {
        return view;
      }
    }
    return null;
  }

  _getNoteViewById(id) {
    for (const view of this._noteViews) {
      if (view.id == id) {
        return view;
      }
    }
    return null;
  }

  _getImageViewById(id) {
    for (const view of this._imageViews) {
      if (view.id == id) {
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
