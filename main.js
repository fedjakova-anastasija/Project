function initialize() {
  const contentDiv = document.getElementById("content");
  const itemsFactory = new ItemsFactory();
  const viewsFactory = new ViewsFactory();
  
  const model = itemsFactory.createModel('Model');
  window["model"] = model; //TODO: remove
  const board = itemsFactory.createBoard("1");
  board.lists.push(itemsFactory.createList("1"));
  board.lists.push(itemsFactory.createList("2"));
  model.boards.push(board);

  const modelView = viewsFactory.createModelView(model);
  contentDiv.appendChild(modelView.element);

  modelView.element.addEventListener(EventType.ADD_BOARD, function (event) {
    const board = event.detail;
    modelView.addBoardView(board);
  }, false);

  document.addEventListener(EventType.CLICK_ADD_BOARD, function (event) {
    const newBoard = itemsFactory.createBoard("New");
    newBoard.lists.push(itemsFactory.createList("3"));
    model.boards.push(newBoard);

    const e = new Event(EventType.ADD_BOARD, newBoard);
    e.dispatch(modelView.element);
  }, false);
}
