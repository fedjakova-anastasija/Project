'use strict';

class HeaderView {
  constructor(viewsFactory) {
    this._viewsFactory = viewsFactory;

    this._element = this._viewsFactory.createElement("div");
    this._element.id = "board_header";
    this._element.className = "board_header";

    /*this._boardHeaderTitles = this._viewsFactory.createElement("div");
    this._boardHeaderTitles.id = "board_header_titles";

    this._newBoardButton = this._viewsFactory.createElement("input");

    this._boardHeader = this._viewsFactory.createElement("div");
    this._boardHeader.id = "board_header";
    this._boardHeader.className = "board_header";

    this._boardHeaderTitles = this._viewsFactory.createElement("div");
    this._boardHeaderTitles.id = "board_header_titles";

    this._newBoardButton = this._viewsFactory.createElement("input");
    this._newBoardButton.type = "button";
    this._newBoardButton.value = "+";
    this._newBoardButton.className = "button_new_board";

    this._newBoardButton.onclick = function () {
      const event = new Event(EventType.CLICK_ADD_BOARD);
      event.dispatch(document);
      //addBoard();

    };

    this._element.appendChild(this._boardHeaderTitles);
    this._element.appendChild(this._newBoardButton);*/

    this._boardHeaders = [];
  }

  createBoardHeaderView (board) {
    const boardHeaderView = this._viewsFactory.createBoardHeaderView(board.title, board.id);
    this._element.appendChild(boardHeaderView.element);
    this._boardHeaders.push(boardHeaderView);
  }

  get element() {
    return this._element;
  }

  /*get newBoardButton() {
    return this._newBoardButton;
  }*/

}
