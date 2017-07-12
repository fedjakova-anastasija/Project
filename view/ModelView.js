'use strict';

class ModelView {
  constructor(model, viewsFactory) {
    this._viewsFactory = viewsFactory;
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

  showBoardWithId(id) {
    for (let i = 0; i < this._boardsViews.length; ++i) {
      const boardView = this._boardsViews[i];
      if (boardView.id == id)
      {
        //show
        boardView.id.style.display = "block"
      }
      else
      {
        //hide
        boardView.id.style.display = "none"
      }
    }
  }

  get element() {
    return this._element;
  }
}