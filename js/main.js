const COLUMN_COUNT = 3;
const COLUMN_PADDING = 10;

function initialize() {
  const contentDiv = document.getElementById("content");
  const viewsFactory = new ViewsFactory();

  const model = itemsFactory.createModel('Model');

  window["model"] = model;

  board.lists.push(list);
  board.lists[0].elements.push(element);
  board.lists[0].elements.push(element1);

  note.position.x = 500;
  board.notes.push(note);
  model.boards.push(board);
  model.boards.push(board1);
  model.boards.push(board2);

  const modelView = viewsFactory.createModelView(model);
  contentDiv.appendChild(modelView.element);

  const navigationView = viewsFactory.createNavigationView(modelView);
  contentDiv.appendChild(navigationView.element);

  //board
  modelView.element.addEventListener(EventType.ADD_BOARD, function (event) {
    const board = event.detail;
    modelView.addBoardView(board);
    modelView.showBoardWithId(board.id);
  }, false);

  document.addEventListener(EventType.CLICK_ADD_BOARD, function (event) {
    const metainfo = event.detail;
    const newBoard = itemsFactory.createBoard(metainfo.title);
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
    const metainfo = event.detail;
    const newList = itemsFactory.createList(metainfo.title);
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
    const metainfo = event.detail;
    const newNote = itemsFactory.createNote(metainfo.title);
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

