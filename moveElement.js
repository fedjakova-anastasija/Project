function moveElement(element, elementView) {
  elementView.onmousedown = function (e) {

    let dragElement = e.target;

    if (!dragElement.classList.contains(elementView.className)) {
      return;
    }

    let coords;
    let shiftX;
    let shiftY;

    startDrag(e.clientX, e.clientY);

    document.onmousemove = function (e) {
      moveAt(e.clientX, e.clientY);
    };

    dragElement.onmouseup = function () {
      finishDrag();
    };

    function startDrag(clientX, clientY) {

      shiftX = clientX - dragElement.getBoundingClientRect().left;
      shiftY = clientY - dragElement.getBoundingClientRect().top;

      dragElement.style.position = 'fixed';

      moveAt(clientX, clientY);
    }

    function finishDrag() {
      let x = parseInt(dragElement.style.left);
      let y = parseInt(dragElement.style.top);

      const BOUNDINGS_FIRST = {left: 20, right: 300};

      if (x > BOUNDINGS_FIRST.left && x < BOUNDINGS_FIRST.right) {
        x = BOUNDINGS_FIRST.left;
      }

      const BOUNDINGS_SECOND = {left: 320, right: 600};

      if (x > BOUNDINGS_SECOND.left && x < BOUNDINGS_SECOND.right) {
        x = BOUNDINGS_SECOND.left;
      }

      const BOUNDINGS_THIRD = {left: 620, right: 900};

      if (x > BOUNDINGS_THIRD.left && x < BOUNDINGS_THIRD.right) {
        x = BOUNDINGS_THIRD.left;
      }

      element.position.x = x;
      element.position.y = y;

      dragElement.style.left = x + "px";
      dragElement.style.top = y + "px";

      document.onmousemove = null;
      dragElement.onmouseup = null;
    }

    function moveAt(clientX, clientY) {
      let newX = clientX - shiftX;
      let newY = clientY - shiftY;

      const boundings = dragElement.parentNode.getBoundingClientRect();
      const heightElement = dragElement.offsetHeight;
      const widthElement = dragElement.offsetWidth;

      // нижняя граница
      if (newY > boundings.bottom - heightElement) {
        newY = Math.min(newY, boundings.bottom - heightElement);
      }

      // верхняя граница
      if (newY < boundings.top) {
        newY = Math.max(newY, boundings.top);
      }

      // границы по горизонтали
      if (newX < boundings.left) {
        newX = boundings.left;
      }

     if (newX > boundings.right) {
        newX = boundings.right;
      }

      if (newX > document.documentElement.clientWidth - widthElement) {
        newX = document.documentElement.clientWidth - widthElement;
      }

      dragElement.style.left = newX + 'px';
      dragElement.style.top = newY + 'px';
    }

    return false;
  }
}
