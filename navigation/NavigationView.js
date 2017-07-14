'use strict';

class NavigationView {
  constructor(model, viewsFactory) {
    this._viewsFactoryNav = viewsFactory;
    this._element = viewsFactory.createElement("div");
    this._element.id = "model_nav";

    this._about = viewsFactory.createElement("div");
    this._about.id = "about";
    this._element.appendChild(this._about);

    this._calendar = viewsFactory.createElement("div");
    this._calendar.id = "calendar";
    this._element.appendChild(this._calendar);

    this._navigation = viewsFactory.createElement("div");
    this._navigation.id = "navigation";
    this._element.appendChild(this._navigation);

    this._upload = viewsFactory.createElement("div");
    this._upload.id = "upload";
    this._element.appendChild(this._upload);

    this._buttonNewBoard = viewsFactory.createElement("input");
    this._buttonNewBoard.id = "button_new";
    this._buttonNewBoard.className = "button_board_new";
    this._buttonNewBoard.type = "button";
    this._buttonNewBoard.value = "New board";
    this._navigation.appendChild(this._buttonNewBoard);

    this._buttonNewBoard.onclick = function () {
      const event = new Event(EventType.CLICK_ADD_BOARD);
      event.dispatch(document);
    };

    this._buttonNewList = viewsFactory.createElement("input");
    this._buttonNewList.id = "button_new";
    this._buttonNewList.className = "button_new_list";
    this._buttonNewList.type = "button";
    this._buttonNewList.value = "New list";
    this._navigation.appendChild(this._buttonNewList);

    this._buttonNewList.onclick = function () {
      const event = new Event(EventType.CLICK_ADD_LIST);
      event.dispatch(document);
    };

    this._buttonNewNote = viewsFactory.createElement("input");
    this._buttonNewNote.id = "button_new";
    this._buttonNewNote.className = "button_new_note";
    this._buttonNewNote.type = "button";
    this._buttonNewNote.value = "New note";
    this._navigation.appendChild(this._buttonNewNote);

    this._buttonNewNote.onclick = function () {
      const event = new Event(EventType.CLICK_ADD_NOTE);
      event.dispatch(document);
    };

    this._buttonNewMap = viewsFactory.createElement("input");
    this._buttonNewMap.id = "button_new";
    this._buttonNewMap.className = "button_new_map";
    this._buttonNewMap.type = "button";
    this._buttonNewMap.value = "New map";
    this._navigation.appendChild(this._buttonNewMap);

    this._buttonNewPicture = viewsFactory.createElement("input");
    this._buttonNewPicture.id = "button_new";
    this._buttonNewPicture.className = "button_new_picture";
    this._buttonNewPicture.type = "button";
    this._buttonNewPicture.value = "New picture";
    this._navigation.appendChild(this._buttonNewPicture);

    this._buttonNewPicture.onclick = function () {
      const event = new Event(EventType.CLICK_ADD_IMAGE);
      event.dispatch(document);
    };

    this._buttonUpload = viewsFactory.createElement("input");
    this._buttonUpload.id = "button_new";
    this._buttonUpload.className = "button_upload";
    this._buttonUpload.type = "button";
    this._buttonUpload.value = "Upload this board";
    this._upload.appendChild(this._buttonUpload);

    this._buttonPrint = viewsFactory.createElement("input");
    this._buttonPrint.id = "button_new";
    this._buttonPrint.className = "button_print";
    this._buttonPrint.type = "button";
    this._buttonPrint.value = "Print this board";
    this._upload.appendChild(this._buttonPrint);
  }

  get element() {
    return this._element;
  }
}