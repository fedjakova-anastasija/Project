function createHeaderView(model, parent) {
  let boardHeader = createElement("div");
  boardHeader.id = "board_header";
  boardHeader.className = "board_header";

  let boardHeaderTitles = createElement("div");
  boardHeaderTitles.id = "board_header_titles";

  let newBoardButton = createElement("input");
  newBoardButton.type = "button";
  newBoardButton.value = "+";
  newBoardButton.className = "button_new_board";

  newBoardButton.onclick = function () {
    addBoard();
  };

  boardHeader.appendChild(newBoardButton);
  boardHeader.appendChild(boardHeaderTitles);
  parent.appendChild(boardHeader);

  const boardHeaders = [];
  for (let i = 0; i < model.boards.length; ++i) {
    boardHeaders.push(createBoardHeaderView(model.boards[i], boardHeaderTitles));
  }

  parent.addEventListener(EventType.ADD_BOARD, function (event) {
    const t = event.detail;
    createBoardHeaderView(t, boardHeaderTitles)
  }, false);

  return boardHeader;
}

function createBoardHeaderView(board, parent) {
  let title = createElement("input");
  title.type = "button";
  title.value = board.title;
  title.className = "title";
  title.id = "title" + TitleId++;

  parent.appendChild(title);

  title.onclick = function () {
    //selectBoard(board.id);
  };

  return title;
}

