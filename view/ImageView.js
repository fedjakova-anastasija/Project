'use strict';

class ImageView {
  constructor(image, viewsFactory) {
    this._element = viewsFactory.createElement("div");
    this._element.id = "image" + image.id;
    this._element.className = "image";

    let imageView = new Image();
    imageView.src = image.path;
    this._element.appendChild(imageView);

    moveElement(image, this._element);
  }

  get element() {
    return this._element;
  }
}
