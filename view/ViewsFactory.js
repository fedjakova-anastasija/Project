'use strict';

class ViewsFactory {

	ItemsFactory() {
	}

	createElement(tag) {
		const element = document.createElement(tag);
		return element;
	}

	createModelView(model) {
		return new ModelView(model, this);
	}
<<<<<<< HEAD

	createHeaderView() {
		return new HeaderView(this);
	}

=======

	createHeaderView() {
		return new HeaderView(this);
	}

>>>>>>> d430978e75fd18ac767dc9519258daab07b32403
	createBoardHeaderView(title, id) {
		return new BoardHeaderView(title, id, this);
	}

	createBoardView(board) {
		return new BoardView(board, this);
	}

	createListView(list) {
		return new ListView(list, this);
	}

  createNavigationView(model) {
    return new NavigationView(model, this);
  }
}