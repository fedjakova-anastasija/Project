function moveElement(element, elementView) {
  elementView.onmousedown = function (e) {
    let dragElement = e.target;

    if (elementView != dragElement && elementView.contains(dragElement))
    {
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

      console.log(window.currentBoard);
      const WIDTH = window.currentBoard.element.getBoundingClientRect().width;
      const N = 3;
      const PADDING = 20;

      const columns = [];
      const COL_W = Math.floor((WIDTH - PADDING * (N + 1)) / N);

      let left = PADDING;
      for (let i = 0; i < N; ++i)
      {
        columns.push({left, right: left + COL_W});
		left += PADDING + COL_W;
      }
      for (const column of columns)
      {
		  if (x > column.left && x < column.right) {
			  x = column.left;
		  }
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
