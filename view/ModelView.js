'use strict';

class ModelView {
  constructor(model, viewsFactory) {
    this._viewsFactory = viewsFactory;

    this._element = viewsFactory.createElement("div");
    this._element.id = "model";

    this._boardsViews = [];

    const thisPtr = this;

    this._headerView = this._viewsFactory.createHeaderView();
    this._headerView.element.addEventListener(EventType.SELECT_BOARD_EVENT, function (event) {
      thisPtr.showBoardWithId(event.detail);
    }, false);

    this._element.appendChild(this._headerView.element);

    this._headerView.element.addEventListener(EventType.DELETE_BOARD, function (event) {
        const id = event.detail;
        if (model.boards.length == 1) {
          const board = model.boards[0];
          const countOfLists = board.lists.length;
          const countOfNotes = board.notes.length;
          const countOfImages = board.images.length;

          if ((countOfLists != 0) || (countOfNotes != 0) || (countOfImages != 0)) {
			  board.lists.splice(0, countOfLists);
			  board.notes.splice(0, countOfNotes);
			  board.images.splice(0, countOfImages);
			  thisPtr._boardsViews[0].redraw();
          } else {
            alert("Your board is already empty.")
          }
	    } else {
			 const view = thisPtr._getBoardViewById(id);
			 const index = model.boards.indexOf(view.board);
			 model.boards.splice(index, 1);
			 thisPtr._boardsViews.splice(index, 1);

			 thisPtr._headerView.removeHeader(id);

			 if (thisPtr._element.contains(view.element)) {
				 thisPtr._element.removeChild(view.element);
				 if (model.boards.length > 0) {
					 const nextIndex = index == 0 ? 0 : index - 1;
					 thisPtr.showBoardWithId(model.boards[nextIndex].id);
				 }
			 }
		 }
      },false);

    this._init(model);
  }

  _init(model) {
    for (let i = 0; i < model.boards.length; ++i) {
      this.addBoardView(model.boards[i])
    }
    this.showBoardWithId(this._boardsViews[0].id);
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
    this._headerView.selectHeader(id);
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