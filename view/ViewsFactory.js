'use strict';

class ViewsFactory {

  ItemsFactory() {
  }

  getRandomColor() {
    return "#" + (Math.round(Math.random() * 0XFFFFFF)).toString(16);
  }

  createElement(tag) {
    const element = document.createElement(tag);
    return element;
  }

  createModelView(model) {
    return new ModelView(model, this);
  }

  createHeaderView() {
    return new HeaderView(this);
  }

  createBoardHeaderView(title, id, board) {
    return new BoardHeaderView(title, id, board, this);
  }

  createBoardView(board) {
    return new BoardView(board, this, this.getRandomColor());
  }

  createListView(list) {
    return new ListView(list, this);
  }

  createListElementView(listElement) {
    return new ListElementView(listElement, this);
  }

  createNoteView(note) {
    return new NoteView(note, this);
  }

  createImageView(image) {
    return new ImageView(image, this);
  }

  createNavigationView(model) {
    return new NavigationView(model, this);
  }
}