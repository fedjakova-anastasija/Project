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

	createHeaderView() {
		return new HeaderView(this);
	}

	createBoardHeaderView(title, id) {
		return new BoardHeaderView(title, id, this);
	}

	createBoardView(board) {
		return new BoardView(board, this);
	}

	createListView(list) {
		return new ListView(list, this);
	}

  createListElementView(list_element) {
    return new ListElementView(list_element, this, value);
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