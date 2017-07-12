function initialize() {
  const contentDiv = document.getElementById("content");
  const itemsFactory = new ItemsFactory();
  const viewsFactory = new ViewsFactory();
<<<<<<< HEAD

  const model = itemsFactory.createModel('Model');
  const navigation = itemsFactory.createNavigation('ModelNav');

=======
  
  const model = itemsFactory.createModel('Model');
>>>>>>> d430978e75fd18ac767dc9519258daab07b32403
  window["model"] = model; //TODO: remove
  const board = itemsFactory.createBoard("1");
  board.lists.push(itemsFactory.createList("1"));
  board.lists.push(itemsFactory.createList("2"));
  model.boards.push(board);

  const modelView = viewsFactory.createModelView(model);
  contentDiv.appendChild(modelView.element);

<<<<<<< HEAD
  const navigationView = viewsFactory.createNavigationView(navigation);
  contentDiv.appendChild(navigationView.element);

=======
>>>>>>> d430978e75fd18ac767dc9519258daab07b32403
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
<<<<<<< HEAD

  /* modelView.element.addEventListener(EventType.ADD_LIST, function (event) {
   const list = event.detail;
   modelView.addListView(list);
   }, false);

   document.addEventListener(EventType.CLICK_ADD_LIST, function (event) {
   const newList = itemsFactory.createList("New");
   newList.elements.push(itemsFactory.createList("3"));
   model.boards.push(newList);

   const e = new Event(EventType.ADD_LIST, newList);
   e.dispatch(modelView.element);
   }, false);*/
}

=======
}
>>>>>>> d430978e75fd18ac767dc9519258daab07b32403
