'use strict';

class ModelView {
  constructor(model, viewsFactory) {
    this._viewsFactory = viewsFactory;

    this._element = viewsFactory.createElement("div");
    this._element.id = "model";

    this._boardsViews = [];

    this._headerView = this._viewsFactory.createHeaderView();

    this._element.appendChild(this._headerView.element);

    const thisPtr = this;

    document.addEventListener(EventType.DELETE_BOARD, function (event) {
      //TODO: if model.boards.length == 1 -> clearBoard()
      if (model.boards.length == 1) {
        function removeChildren(element) {
          while (element.lastChild) {
            element.removeChild(element.lastChild);
          }
        }
       // removeChildren();
      } else {
        const id = event.detail;
        const view = thisPtr._getBoardViewById(id);
        thisPtr._element.removeChild(view.element);
        const index = model.boards.indexOf(view.board);
        model.boards.splice(index, 1);
        thisPtr._boardsViews.splice(index, 1);

        //TODO:  _headerView.removeBoardHeaderViewWithId(id);

        if (model.boards.length > 0) {
          thisPtr.showBoardWithId(model.boards[index - 1].id);
        }
      }
    }, false);

    this._init(model);
  }

  _init(model) {
    for (let i = 0; i < model.boards.length; ++i) {
      this.addBoardView(model.boards[i])
    }
    this._showBoardView(this._boardsViews[0], true);
  }

  addBoardView(board) {
    const boardView = this._viewsFactory.createBoardView(board);
    this._element.appendChild(boardView.element);
    this._boardsViews.push(boardView);

    this._headerView.createBoardHeaderView(board);
  }

  showBoardWithId(id) {
    for (let i = 0; i < this._boardsViews.length; ++i) {
      const boardView = this._boardsViews[i];
      this._showBoardView(boardView, (boardView.id == id));
    }
  }

  _showBoardView(boardView, show) {
    boardView.redraw();
    if (show) {
      this._element.appendChild(boardView.element);
    }
    else {
      if (this._element.contains(boardView.element)) {
        this._element.removeChild(boardView.element);
      }
    }

    if (show) {
      window.currentBoard = boardView;
    }
  }

  _getBoardViewById(id) {
    for (const view of this._boardsViews) {
      if (view.id == id) {
        return view;
      }
    }
    return null;
  }

  get currentBoardView() {
    for (let i = 0; i < this._boardsViews.length; ++i) {
      const boardView = this._boardsViews[i];
      if (this._element.contains(boardView.element)) {
        return boardView;
      }
    }
    return null;
  }

  get element() {
    return this._element;
  }
}