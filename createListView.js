function createListView(list, parent) {
  let listView = createElement("div");
  listView.id = "list" + listId++;
  listView.className = "list";
  moveElement(list, listView);

  let header = createElement("input");
  header.className = "title_list";
  header.value = list.title;
  // header.innerHTML = list.title;

  let input = createElement("input");
  input.id = "input_place";
  input.className = "input_place";
  input.placeholder = "You should do...";

  let button = createElement("input");
  button.type = "button";
  button.className = "add";
  button.onclick = function () {
   let value = listView.getElementsByClassName("input_place")[0].value;

   const element = createListElement(listView, value);

     element.view.addEventListener(DELETE_ELEMENT, function (event) {
      listView.removeChild(element.view);

      const index = list.elements.indexOf(element);

      list.elements.splice(index, 1);
    }, false);
    list.elements.push(element);
  };
  button.value = "add";

  listView.appendChild(header);
  listView.appendChild(input);
  listView.appendChild(button);

  parent.appendChild(listView);
}


function createListElement(parent, value) {
  let liPoint = createElement("li");
  liPoint.className = "list_element";
  //moveElement("list_element");

  liPoint.setAttribute("id", number++);

  let input = createElement("input");
  input.value = value;

  liPoint.appendChild(input);
  parent.appendChild(liPoint);
  parent.getElementsByClassName("input_place")[0].value = "";

  //let button = createElement("input");
  buttonClose(liPoint, parent.id);
  buttonCheck(liPoint, parent.id);

  const element = {
    view: liPoint,
    value: value
  };

  return element;
}

function buttonClose(item, id) {
  let button = createElement("input");

  button.type = "button";
  button.value = "x";
  button.className = "close_point";
  item.appendChild(button);

  button.onclick = function () {
    var event = new CustomEvent(DELETE_ELEMENT, {
      detail: id
    });
    item.dispatchEvent(event);
  }
}

function buttonCheck(item, id) {
  let check = createElement("input");

  check.type = "checkbox";
  check.id = "checkbox";
  item.appendChild(check);

  check.onclick = function () {
    document.getElementById('checkbox').setAttribute('checked', 'checked');
  }
}

