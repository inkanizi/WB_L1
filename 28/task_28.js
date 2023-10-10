// 28

function createElement() {
  const container = document.getElementById("container");
  const template = document.getElementById("template");

  // Клонируем содержимое шаблона
  const clone = document.importNode(template.content, true);

  // Добавляем клон в DOM
  container.appendChild(clone);
}

document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("addButton");
  addButton.addEventListener("click", createElement);
});
