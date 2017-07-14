'use strict';

class ImageView {
  constructor(image, viewsFactory) {
    this._element = viewsFactory.createElement("canvas");
    this._element.id = "image" + image.id;
    this._element.className = "image";

    this._input = viewsFactory.createElement("input");
    this._input.type = "file";

    moveElement(image, this._element);

    this._input.onchange = load(this);
    let c = document.getElementsByClassName("image");
    let ctx = c.getContext("2d");

    function load(doc) {
      let file = doc.files[0];
      let fileread = new FileReader();
      fileread.onload = function () {
        let image = new Image();
        image.src = fileread.result;
        image.onload = function () {
          c.width = 200;
          c.height = 200;
          ctx.drawImage(image, 0, 0);
        }
      };
      fileread.readAsDataURL(file);
    }
  }


  get element() {
    return this._element;
  }
}
