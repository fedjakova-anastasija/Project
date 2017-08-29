function initialize() {
  const boards = window.opener.printedBoards;
  const contentDiv = document.getElementById("content");

  const print = document.createElement("DIV");
  print.className = "print";
  print.innerHTML = "Печать";

  print.onclick = function () {
    window.print();
  };

  contentDiv.appendChild(print);

  for (const board of boards) {
    const boardView = createBoardView(board);

    contentDiv.appendChild(boardView);
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
    if (element.checked) {
      listView.appendChild(elementView);
      elementView.classList.add("checked");
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

  const noteText = document.createElement("DIV");
  noteText.className = "note_text";
  noteText.innerHTML = note.text;
  noteView.appendChild(noteText);

  return noteView;
}

function createImageView(image) {
  const imageView = document.createElement("DIV");
  imageView.className = "image";

  let newImage = new Image();
  newImage.src = image.path;

  newImage.onload = function () {

    let width = newImage.getBoundingClientRect().width;
    let height = newImage.getBoundingClientRect().height;

    let MAX_WIDTH = 200;
    let MAX_HEIGHT = 200;

    if (width > height) {
      if (width > MAX_WIDTH) {
        height *= MAX_WIDTH / width;
        width = MAX_WIDTH;
      }
    } else {
      if (height > MAX_HEIGHT) {
        width *= MAX_HEIGHT / height;
        height = MAX_HEIGHT;
      }
    }

    newImage.width = width;
    newImage.height = height;

  };

  imageView.appendChild(newImage);

  return imageView;
}