function initialize() {
  const model = window.opener.model;
  const boards = model.boards;
  for(const board of boards)
  {
      const boardView = createBoardView(board);
	  document.body.appendChild(boardView);
  }
}

function createBoardView(board) {
	const boardView = document.createElement("DIV");
	boardView.className = "board";
	boardView.innerHTML = board.title;

	const lists = board.lists;
	for(const list of lists)
	{
		const listView = createListView(list);
		boardView.appendChild(listView);
	}
	return boardView;
}

function createListView(list) {
	const listView = document.createElement("DIV");
	listView.className = "list";
	listView.innerHTML = list.title;

	const elements = list.elements;
	for(const element of elements)
	{
		const elementView = createListElementView(element);
		listView.appendChild(elementView);
	}
	return listView;
}

function createListElementView(element) {
	const elementView = document.createElement("DIV");
	elementView.className = "element";
	elementView.innerHTML = element.text;
	return elementView;
}