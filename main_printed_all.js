function initialize() {
  const model = window.opener.model;
  const boards = model.boards;
  for (const board of boards) {
    const boardView = createBoardView(board);
    document.body.appendChild(boardView);
  }
}

function createBoardView(board) {
  const boardView = document.createElement("DIV");
  boardView.className = "board";
  boardView.innerHTML = board.title;

  const lists = board.lists;
  for (const list of lists) {
    const listView = createListView(list);
    boardView.appendChild(listView);
  }

  const notes = board.notes;
  for (const note of notes) {
    const noteView = createNoteView(note);
    boardView.appendChild(noteView);
  }

  const images = board.images;
  for (const image of images) {
    const imageView = createImageView(image);
    boardView.appendChild(imageView);
  }
  return boardView;
}

function createListView(list) {
  const listView = document.createElement("DIV");
  listView.className = "list";
  listView.innerHTML = list.title;

  const elements = list.elements;
  for (const element of elements) {
    const elementView = createListElementView(element);
    if (elementView.classList.contains('checked')) {
      listView.insertBefore(elementView, elements);
    } else {
      listView.appendChild(elementView);
    }
  }
  return listView;
}

function createListElementView(element) {
  const elementView = document.createElement("DIV");
  elementView.className = "list_element";
  elementView.innerHTML = element.text;
  return elementView;
}

function createNoteView(note) {
  const noteView = document.createElement("DIV");
  noteView.className = "note";
  noteView.innerHTML = note.title;
  return noteView;
}

function createImageView(image) {
  const imageView = document.createElement("DIV");
  imageView.className = "image";
  imageView.innerHTML = image.path;
  return imageView;
}