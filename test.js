const itemsFactory = new ItemsFactory();
const board = itemsFactory.createBoard("Покупки");
const board1 = itemsFactory.createBoard("Дела");
const board2 = itemsFactory.createBoard("Картинки");
const list = itemsFactory.createList("Продукты");
const note = itemsFactory.createNote("Не забыть", "Позвонить маме");
const element = itemsFactory.createListElement("Молоко");
const element1 = itemsFactory.createListElement("Колбаса");