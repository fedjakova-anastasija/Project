'use strict';

class ImageView {
  constructor(image, viewsFactory) {
    this._element = viewsFactory.createElement("div");
    this._element.id = "image" + image.id;
    this._element.className = "image";

    this._element.style.position = 'absolute';
    this._element.style.left = image.position.x + 'px';
    this._element.style.top = image.position.y + 'px';

    this._image = image;
    this._id = image.id;

    this._close = viewsFactory.createElement("input");
    this._close.type = "button";
    this._close.className = "close";
    this._element.appendChild(this._close);

    this._close.onclick = function () {
      const event = new Event(EventType.DELETE_IMAGE, image.id);
      event.dispatch(document);
    };

    let imageView = new Image();
    imageView.src = image.path;

    /*let MAX_WIDTH = 200;
     let MAX_HEIGHT = 200;
     let width = .getBoundingClientRect().width;
     let height = .getBoundingClientRect().height;

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
     }*/

    this._element.appendChild(imageView);

    moveElement(image, this._element);
  }

  get element() {
    return this._element;
  }

  get id() {
    return this._id;
  }

  get image() {
    return this._image;
  }
}
