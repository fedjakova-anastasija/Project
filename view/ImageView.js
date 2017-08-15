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

    const thisPtr = this;

    this._close.onclick = function () {
      const event = new Event(EventType.DELETE_IMAGE, image.id);
      event.dispatch(thisPtr._element);
    };

    this._loupe = viewsFactory.createElement("input");
    this._loupe.type = "button";
    this._loupe.className = "loupe";
    this._loupe.id = "loupe_id";
    this._element.appendChild(this._loupe);

    let imageView = new Image();
    imageView.src = image.path;


    this._loupe.onclick = function () {
      let width = imageView.getBoundingClientRect().width;
      let height = imageView.getBoundingClientRect().height;

      if (width == 200) {
        imageView.width = 300;
        imageView.height = 300;
      } else {
        imageView.width = 200;
        imageView.height = 200;
      }
    };

    imageView.onload = function () {
      let width = imageView.getBoundingClientRect().width;
      let height = imageView.getBoundingClientRect().height;

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

      imageView.width = width;
      imageView.height = height;
    };

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
