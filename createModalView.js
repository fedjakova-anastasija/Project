function createModelView(model, parent) {
  let modelView = createElement("div");
  modelView.id = "model";

  parent.appendChild(modelView);

  const headerView = createHeaderView(model, modelView);

  const boardsViews = [];
  /*for (let i = 0; i < model.boards.length; ++i) {
    boardsViews.push(createBoardView(model.boards[i], modelView));
  }*/

  return modelView;
}