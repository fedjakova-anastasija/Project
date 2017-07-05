'use strict';

class HeaderView {
  constructor(model, viewsFactory) {
    this._boardHeader = viewsFactory.createElement("div");
    this._boardHeader.id = "board_header";
    this._boardHeader.className = "board_header";

    this._boardHeaderTitles = viewsFactory.createElement("div");
    this._boardHeaderTitles.id = "board_header_titles";

    this._newBoardButton = viewsFactory.createElement("input");
    this._newBoardButton.type = "button";
    this._newBoardButton.value = "+";
    this._newBoardButton.className = "button_new_board";

    this._newBoardButton.onclick = function () {
      addBoard();
    };

    this._boardHeaders = [];

    for (let i = 0; i < model.boards.length; ++i) {
      const boardView = viewsFactory.createListView(model.boards[i]);
      this._boardHeader.appendChild(boardView.boardHeader);
      this._boardHeaders.push(boardView);
    }

    parent.addEventListener(EventType.ADD_BOARD, function (event) {
      const t = event.detail;
      createBoardHeaderView(t, boardHeaderTitles)
    }, false);
  }

  get boardHeader() {
    return this._boardHeader;
  }

  get boardHeaderTitles() {
    return this._boardHeaderTitles;
  }

  get newBoardButton() {
    return this._newBoardButton;
  }
}

class createBoardHeaderView {
  constructor(board, viewsFactory) {
    this._title = viewsFactory.createElement("input");
    this._title.type = "button";
    this._title.value = board.title;
    this._title.className = "title";
    this._title.id = "title" + TitleId++;

    this._title.onclick = function () {
      //selectBoard(board.id);
    };
  }

  get title() {
    return this._title;
  }

  get input() {
    return this._input;
  }
}

