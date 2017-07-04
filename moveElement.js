function moveElement(list, listView) {
  listView.onmousedown = function (e) {

    let dragElement = e.target;

    if (!dragElement.classList.contains(listView.className)) {
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

      /*const BOUNDINGS = {left: 600, right: 1200};

      if (x > BOUNDINGS.left && x < BOUNDINGS.right) {
        x = BOUNDINGS.left;
      }*/

      list.position.x = x;
      list.position.y = y;

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

      if (newX > document.documentElement.clientWidth - heightElement) {
        newX = document.documentElement.clientWidth - heightElement;
      }

      dragElement.style.left = newX + 'px';
      dragElement.style.top = newY + 'px';
    }

    return false;
  }
}
