'use strict';

class ModelView {
  constructor(model, viewsFactory) {
    this._viewsFactory = viewsFactory;
<<<<<<< HEAD
=======

>>>>>>> d430978e75fd18ac767dc9519258daab07b32403
    this._element = viewsFactory.createElement("div");
    this._element.id = "model";
    this._boardsViews = [];

    this._headerView = this._viewsFactory.createHeaderView();
    this._element.appendChild( this._headerView.element);

    this._init(model);
  }

  _init (model) {
    for (let i = 0; i < model.boards.length; ++i) {
      this.addBoardView(model.boards[i])
    }
  }

  addBoardView (board) {
    const boardView = this._viewsFactory.createBoardView(board);
    this._element.appendChild(boardView.element);
    this._boardsViews.push(boardView);

    this._headerView.createBoardHeaderView(board);
  }
<<<<<<< HEAD

=======
  
>>>>>>> d430978e75fd18ac767dc9519258daab07b32403
  showBoardWithId(id) {
    for (let i = 0; i < this._boardsViews.length; ++i) {
      const boardView = this._boardsViews[i];
      if (boardView.id == id)
      {
        //show
<<<<<<< HEAD
        boardView.id.style.display = "block"
=======
>>>>>>> d430978e75fd18ac767dc9519258daab07b32403
      }
      else
      {
        //hide
<<<<<<< HEAD
        boardView.id.style.display = "none"
=======
>>>>>>> d430978e75fd18ac767dc9519258daab07b32403
      }
    }
  }

  get element() {
    return this._element;
  }
}