'use strict';

class HeaderView {
  constructor(viewsFactory) {
    this._viewsFactory = viewsFactory;

    this._element = this._viewsFactory.createElement("div");
    this._element.id = "board_header";
    this._element.className = "board_header";

    this._boardHeaders = [];

    let parent = this._element;
    let lastClickedElement = null;

    document.addEventListener(EventType.SELECT_BOARD_EVENT, function (event) {
        //modelView.showBoardWithId(event.detail);
        const id = event.detail;
    }, false);

   /* this._element.onclick = function (event) {
      let target = event.target;

      if (target.tagName != "INPUT") return;

      selectSingle(target);

      lastClickedElement = target;
    };*/

    function deselectAll() {
      for (let i = 0; i < parent.children.length; i++) {
        parent.children[i].classList.remove('selected');
      }
    }

    function selectSingle(selectedElement) {
      deselectAll();
      selectedElement.classList.add('selected');
    }
  }

  createBoardHeaderView(board) {
    const boardHeaderView = this._viewsFactory.createBoardHeaderView(board.title, board.id, board);
    this._element.appendChild(boardHeaderView.element);
    this._boardHeaders.push(boardHeaderView);
  }


  get element() {
    return this._element;
  }
}
