'use strict';

class HeaderView {
  constructor(viewsFactory) {
    this._viewsFactory = viewsFactory;

    this._element = this._viewsFactory.createElement("div");
    this._element.id = "board_header";
    this._element.className = "board_header";

    this._boardHeaders = [];
  }

  createBoardHeaderView (board) {
    const boardHeaderView = this._viewsFactory.createBoardHeaderView(board.title, board.id, board);
    this._element.appendChild(boardHeaderView.element);
    this._boardHeaders.push(boardHeaderView);
  }

  get element() {
    return this._element;
  }
}
