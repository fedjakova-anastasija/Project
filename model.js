const contentDiv = document.getElementById("content");

const itemsFactory = new ItemsFactory();
const viewsFactory = new ViewsFactory();

let number = 0;
let listId = 0;
let BoardId = 0;
let TitleId = 0;

//const ADD_ELEMENT = "addElement";
//const DELETE_ELEMENT = "deleteElement";

const aboutObj = {
  name: "12",
  lastName: "3432",
  img: "1.png"
};

function createElement(tag) {
  return document.createElement(tag);
}

const model = itemsFactory.createModel('Model');
const title = itemsFactory.createHeader();
const board = itemsFactory.createBoard("1");

board.lists.push(itemsFactory.createList("1"));
board.lists.push(itemsFactory.createList("2"));
model.boards.push(board);

const modelView = viewsFactory.createModelView(model, contentDiv);

modelView.addEventListener(EventType.ADD_BOARD, function (event) {
  const board = event.detail;
  const boardView = viewsFactory.createBoardView(board);
  modelView.appendChild(boardView.element);
}, false);


function addBoard() {
  const newBoard = itemsFactory.createBoard("New");
  newBoard.lists.push(itemsFactory.createList("3"));
  model.boards.push(newBoard);

  const event = new Event(EventType.ADD_BOARD, newBoard);
  event.dispatch(modelView);
}

document.getElementById('title0').onclick = function openBoard() {
  let i;

  let board = document.getElementsByClassName("board");
  for (i = 0; i < board.length; i++) {
    board[i].style.display = "none";
  }

  /* let title = document.getElementsByClassName("title");
   for (i = 0; i < title.length; i++) {
   title[i].className = title[i].className.replace(" active", "");
   }*/

  document.getElementById('board0').style.display = "block";
  //event.currentTarget.className += " active";
};

