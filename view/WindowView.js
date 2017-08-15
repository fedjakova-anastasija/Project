'use strict';

class ImageView {
  constructor(image, viewsFactory) {
    this._element = viewsFactory.createElement("div");

    const thisPtr = this;

    this._element = viewsFactory.createElement("div");
    this._element.className = "modal_common";
    this._element.id = "modal";

    this._modal = viewsFactory.createElement("div");
    this._modal.className = "modal_common";
    this._modal.id = "modal";
    this._element.appendChild(this._modal);

    const showModalWindow = this._modal;
    function OpenModal() {
      const loupe = document.getElementsByClassName("loupe");
      loupe.onclick =  function(event) {
        event.preventDefault();
        setTimeout(function() {
          showModalWindow.classList.add('opacity_visible');
        }, 50);
        showModalWindow.classList.add('open_block');
      }
    }
    OpenModal();

    this._element.appendChild(imageView);
  }

  get element() {
    return this._element;
  }
}
