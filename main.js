function initialize() {
  const contentDiv = document.getElementById("content");
  const itemsFactory = new ItemsFactory();
  const viewsFactory = new ViewsFactory();

  const model = itemsFactory.createModel('Model');
  const navigation = itemsFactory.createNavigation('ModelNav');

  window["model"] = model; //TODO: remove
  const board = itemsFactory.createBoard("1");
  board.lists.push(itemsFactory.createList("1"));
  model.boards.push(board);

  const modelView = viewsFactory.createModelView(model);
  contentDiv.appendChild(modelView.element);

  const navigationView = viewsFactory.createNavigationView(navigation);
  contentDiv.appendChild(navigationView.element);


  //board
  modelView.element.addEventListener(EventType.ADD_BOARD, function (event) {
    const board = event.detail;
    modelView.addBoardView(board);
    modelView.showBoardWithId(board.id);
  }, false);

  document.addEventListener(EventType.CLICK_ADD_BOARD, function (event) {
    let title = prompt("Title:", "");
    if (!title) return;
    const newBoard = itemsFactory.createBoard(title);
    model.boards.push(newBoard);

    const e = new Event(EventType.ADD_BOARD, newBoard);
    e.dispatch(modelView.element);
  }, false);

  //list
  modelView.element.addEventListener(EventType.ADD_LIST, function (event) {
    const list = event.detail;
    modelView.currentBoardView.addListView(list);
  }, false);

  document.addEventListener(EventType.CLICK_ADD_LIST, function (event) {
    let title = prompt("Title:", "");
    if (!title) return;
    const newList = itemsFactory.createList(title);
    modelView.currentBoardView.board.lists.push(newList);

    const e = new Event(EventType.ADD_LIST, newList);
    e.dispatch(modelView.element);
  }, false);

  //note
  modelView.element.addEventListener(EventType.ADD_NOTE, function (event) {
    const note = event.detail;
    modelView.currentBoardView.addNoteView(note);
  }, false);

  document.addEventListener(EventType.CLICK_ADD_NOTE, function (event) {
    let title = prompt("Title:", "");
    if (!title) return;
    const newNote = itemsFactory.createNote(title);
    //newNote.elements.push(itemsFactory.createNote("3"));
    modelView.currentBoardView.board.notes.push(newNote);

    const e = new Event(EventType.ADD_NOTE, newNote);
    e.dispatch(modelView.element);
  }, false);

  //list_element
  document.addEventListener(EventType.CLICK_ADD_LIST_ELEMENT, function (event) {
    const metainfo = event.detail;
    const newListElement = itemsFactory.createListElement(metainfo.value);
    metainfo.list.elements.push(newListElement);

    const e = new Event(EventType.ADD_LIST_ELEMENT, {element: newListElement, listId: metainfo.list.id});
    e.dispatch(document);
  }, false);

  document.addEventListener(EventType.ADD_LIST_ELEMENT, function (event) {
    const listElement = event.detail.element;
    const listView = modelView.currentBoardView._getListViewById(event.detail.listId);
    listView.addListElementView(listElement);
  }, false);

  //image
  modelView.element.addEventListener(EventType.ADD_IMAGE, function (event) {
    const image = event.detail;
    modelView.currentBoardView.addImageView(image);
  }, false);

  document.addEventListener(EventType.CLICK_ADD_IMAGE, function (event) {
    const path = event.detail;
    const newImage = itemsFactory.createImage(path);
    modelView.currentBoardView.board.images.push(newImage);

    const e = new Event(EventType.ADD_IMAGE, newImage);
    e.dispatch(modelView.element);
  }, false);

}