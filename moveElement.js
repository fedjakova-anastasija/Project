function moveElement(element, elementView) {
  elementView.onmousedown = function (e) {
    const dragElement = e.target;
	const parentView = dragElement.parentNode;

    if (elementView != dragElement && elementView.contains(dragElement)) {
      return;
    }

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

		//dragElement.style.position = 'fixed';
		dragElement.style.position = 'absolute';

      moveAt(clientX, clientY);
    }

    function finishDrag() {
      let x = parseInt(dragElement.style.left);
      let y = parseInt(dragElement.style.top);

      const WIDTH = parentView.getBoundingClientRect().width;
      const N = 3;
      const PADDING = 20;

      const columns = [];
      const COL_W = Math.floor((WIDTH - PADDING * (N + 1)) / N);

      let left = PADDING;
      for (let i = 0; i < N; ++i) {
        columns.push({left, right: left + COL_W});
        left += PADDING + COL_W;
      }
      for (const column of columns) {
        if (x > column.left && x < column.right) {
          x = column.left;
        }
      }

      const boundings = dragElement.parentNode.getBoundingClientRect();

      element.position.x = x;// - boundings.left;
      element.position.y = y;//- boundings.top;

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
      const PADDING = 10;

      // нижняя граница
      if (newY > boundings.bottom - heightElement - PADDING) {
        newY = Math.min(newY, boundings.bottom - PADDING - heightElement);
      }

      // верхняя граница
      if (newY < boundings.top + PADDING) {
        newY = Math.max(newY, boundings.top + PADDING);
      }

      // границы по горизонтали
      if (newX < boundings.left + PADDING) {
        newX = boundings.left + PADDING;
      }

      if ((newX + widthElement) > boundings.right) {
        newX = boundings.right - widthElement - PADDING;
      }

      if (newX > document.documentElement.clientWidth - widthElement) {
        newX = document.documentElement.clientWidth - widthElement;
      }

      const left = parentView.getBoundingClientRect().left;
      const top = parentView.getBoundingClientRect().top  - parentView.scrollTop;

      dragElement.style.left = newX - left + 'px';
      dragElement.style.top = newY - top + 'px';
    }

    return false;
  }
}
