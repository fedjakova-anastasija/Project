'use strict';

class HeaderView {
  constructor(viewsFactory) {
    this._viewsFactory = viewsFactory;
<<<<<<< HEAD

    this._element = this._viewsFactory.createElement("div");
    this._element.id = "board_header";
    this._element.className = "board_header";

    this._boardHeaderTitles = this._viewsFactory.createElement("div");
    this._boardHeaderTitles.id = "board_header_titles";

    /*this._newBoardButton = this._viewsFactory.createElement("input");
=======

    this._boardHeader = this._viewsFactory.createElement("div");
    this._boardHeader.id = "board_header";
    this._boardHeader.className = "board_header";

    this._boardHeaderTitles = this._viewsFactory.createElement("div");
    this._boardHeaderTitles.id = "board_header_titles";

    this._newBoardButton = this._viewsFactory.createElement("input");
>>>>>>> d430978e75fd18ac767dc9519258daab07b32403
    this._newBoardButton.type = "button";
    this._newBoardButton.value = "+";
    this._newBoardButton.className = "button_new_board";

    this._newBoardButton.onclick = function () {
      const event = new Event(EventType.CLICK_ADD_BOARD);
      event.dispatch(document);
      //addBoard();
<<<<<<< HEAD
    };*/

    this._element.appendChild(this._boardHeaderTitles);
    //this._element.appendChild(this._newBoardButton);
=======
    };

    this._boardHeader.appendChild(this._boardHeaderTitles);
    this._boardHeader.appendChild(this._newBoardButton);
>>>>>>> d430978e75fd18ac767dc9519258daab07b32403

    this._boardHeaders = [];
  }

  createBoardHeaderView (board) {
    const boardHeaderView = this._viewsFactory.createBoardHeaderView(board.title, board.id);
    this._boardHeaderTitles.appendChild(boardHeaderView.element);
    this._boardHeaders.push(boardHeaderView);
  }

  get element() {
<<<<<<< HEAD
    return this._element;
=======
    return this._boardHeader;
>>>>>>> d430978e75fd18ac767dc9519258daab07b32403
  }

  /*get newBoardButton() {
    return this._newBoardButton;
<<<<<<< HEAD
  }*/
=======
  }
>>>>>>> d430978e75fd18ac767dc9519258daab07b32403
}
