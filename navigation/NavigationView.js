'use strict';

class NavigationView {
  constructor(viewsFactory) {
    this._viewsFactory = viewsFactory;

    this._element = viewsFactory.createElement("div");
    this._element.className = "block_menu";

    this._navigation = viewsFactory.createElement("div");
    this._navigation.className = "navigation";
    this._element.appendChild(this._navigation);

    this._menu = viewsFactory.createElement("div");
    this._menu.textContent = "Меню";
    this._menu.className = "menu";
    this._navigation.appendChild(this._menu);

    this._navigation.onmousemove = function () {
      thisPtr._ul.classList.add("open_block_ul")
    };

    this._navigation.onmouseout = function () {
      thisPtr._ul.classList.remove("open_block_ul")
    };

    this._ul = viewsFactory.createElement("ul");
    this._ul.className = "ul";
    this._navigation.appendChild(this._ul);

    this._buttonNewList = viewsFactory.createElement("li");
    this._buttonNewList.textContent = "Создать новый список";
    this._buttonNewList.className = "new";
    this._ul.appendChild(this._buttonNewList);

    this._buttonNewList.onclick = function () {
      const event = new Event(EventType.CLICK_ADD_LIST);
      event.dispatch(document);
    };

    this._buttonNewNote = viewsFactory.createElement("li");
    this._buttonNewNote.textContent = "Создать новую заметку";
    this._buttonNewNote.className = "new";
    this._ul.appendChild(this._buttonNewNote);

    this._buttonNewNote.onclick = function () {
      const event = new Event(EventType.CLICK_ADD_NOTE);
      event.dispatch(document);
    };

    this._buttonNewImage = viewsFactory.createElement("input");
    this._buttonNewImage.className = "new";
    this._buttonNewImage.id = "new_image";
    this._buttonNewImage.type = "file";
    this._buttonNewImage.accept = "image/!*";
    this._ul.appendChild(this._buttonNewImage);

    this._visible = viewsFactory.createElement("li");
    this._visible.textContent = "Добавить изображение";
    this._visible.className = "new";
    this._visible.id = "visible";
    this._ul.appendChild(this._visible);

    const thisPtr = this;
    this._buttonNewImage.onchange = function () {
      const fileread = new FileReader();
      fileread.onload = function () {
        const dataURL = fileread.result;
        const event = new Event(EventType.CLICK_ADD_IMAGE, dataURL);
        event.dispatch(document);
      };
      fileread.readAsDataURL(thisPtr._buttonNewImage.files[0]);
    };

    this._buttonNewBoard = viewsFactory.createElement("input");
    this._buttonNewBoard.className = "button_board_new";
    this._buttonNewBoard.type = "button";
    this._buttonNewBoard.value = "+";
    this._element.appendChild(this._buttonNewBoard);

    this._buttonNewBoard.onclick = function () {
      const event = new Event(EventType.CLICK_ADD_BOARD);
      event.dispatch(document);
    };

    this._buttonPrintAll = viewsFactory.createElement("li");
    this._buttonPrintAll.className = "button_print";
    this._buttonPrintAll.type = "button";
    this._buttonPrintAll.textContent = "Полная версия для печати";
    this._ul.appendChild(this._buttonPrintAll);

    this._buttonPrintAll.onclick = function () {
      const printedWindow = window.open("printed_all.html", "_blank");
      printedWindow.onload = function () {
        printedWindow.model = window.model;
      }
      //const newWindow = window.print();
    };

    this._buttonPrint = viewsFactory.createElement("li");
    this._buttonPrint.className = "new";
    this._buttonPrint.type = "button";
    this._buttonPrint.textContent = "Печать одной доски";
    this._ul.appendChild(this._buttonPrint);

    this._buttonPrint.onclick = function () {
      const printedWindow = window.open("printed.html", "_blank");
      printedWindow.onload = function () {
        printedWindow.model = window.model;
      }
      //const newWindow = window.print();
    };

  } /*{
    this._viewsFactory = viewsFactory;

    this._element = viewsFactory.createElement("ul");
    this._element.id = "model_nav";

    this._about = viewsFactory.createElement("li");
    this._about.id = "about";
    this._element.appendChild(this._about);

    this._calendar = viewsFactory.createElement("li");
    this._calendar.id = "calendar";
    this._element.appendChild(this._calendar);

    this._navigation = viewsFactory.createElement("li");
    this._navigation.id = "navigation";
    this._element.appendChild(this._navigation);

    this._upload = viewsFactory.createElement("li");
    this._upload.id = "upload";
    this._element.appendChild(this._upload);

    /!*this._buttonNewBoard = viewsFactory.createElement("input");
    this._buttonNewBoard.id = "button_new";
    this._buttonNewBoard.className = "button_board_new";
    this._buttonNewBoard.type = "button";
    this._buttonNewBoard.value = "New board";
    this._navigation.appendChild(this._buttonNewBoard);

    this._buttonNewBoard.onclick = function () {
      const event = new Event(EventType.CLICK_ADD_BOARD);
      event.dispatch(document);
    };*!/

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
    //this._navigation.appendChild(this._buttonNewMap);

    this._buttonNewPicture = viewsFactory.createElement("input");
    this._buttonNewPicture.id = "button_new";
    this._buttonNewPicture.className = "button_new_picture";
    this._buttonNewPicture.value = "New picture";
    this._buttonNewPicture.type = "file";
    this._buttonNewPicture.accept = "image/!*";
    this._navigation.appendChild(this._buttonNewPicture);

    const thisPtr = this;
    this._buttonNewPicture.onchange = function () {
      const fileread = new FileReader();
      fileread.onload = function () {
        const dataURL = fileread.result;
        const event = new Event(EventType.CLICK_ADD_IMAGE, dataURL);
        event.dispatch(document);
      };
      fileread.readAsDataURL(thisPtr._buttonNewPicture.files[0]);
    };

    /!*this._buttonUpload = viewsFactory.createElement("input");
     this._buttonUpload.id = "button_new";
     this._buttonUpload.className = "button_upload";
     this._buttonUpload.type = "button";
     this._buttonUpload.value = "Upload this board";
     this._upload.appendChild(this._buttonUpload);*!/

    this._buttonPrint = viewsFactory.createElement("input");
    this._buttonPrint.id = "button_new";
    this._buttonPrint.className = "button_print";
    this._buttonPrint.type = "button";
    this._buttonPrint.value = "Print this board";
    this._upload.appendChild(this._buttonPrint);

    this._buttonPrint.onclick = function () {
      const printedWindow = window.open("printed.html", "_blank");
      printedWindow.onload = function () {
        printedWindow.model = window.model;
      }
      //const newWindow = window.print();
    };
  }

  get element() {
    return this._element;
  }*/

  get element() {
    return this._element;
  }
}