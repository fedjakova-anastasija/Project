'use strict';

class WindowView {
  constructor(image, viewsFactory) {
    this._element = viewsFactory.createElement("div");

    const thisPtr = this;

    this._element = viewsFactory.createElement("div");
    this._element.className = "modal_common";
    this._element.id = "modal";

    this._modal = viewsFactory.createElement("div");
    this._modal.className = "modal";
    this._element.appendChild(this._modal);

    this._close = viewsFactory.createElement("input");
    this._close.type = "button";
    this._close.value = "close";
    this._close.id = "close";
    this._element.appendChild(this._close);

    this._close.onclick = function () {
    };

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
    function CloseModal() {
      var close = document.getElementById('close');
      close.addEventListener("click", function (event) {
        event.preventDefault();
        setTimeout(function () {
          showModalWindow.classList.remove('opacity_visible');
        }, 50);
        setTimeout(function () {
          showModalWindow.classList.remove('open_block');
        }, 500);
      }, false);
    }
    OpenModal();
    CloseModal();
  }

  get element() {
    return this._element;
  }
}
