// 26

function recursiveDOMTraversal(node, action) {
  //Проверяем, является ли текущий узел элементом (узлом с типом Node.ELEMENT_NODE)
  if (node.nodeType === Node.ELEMENT_NODE) {
    // Выполняем действие с текущим элементом (например, выводим информацию о теге в консоль)
    action(node);

    // Рекурсивно вызываем функцию для каждого дочернего элемента
    for (let i = 0; i < node.childNodes.length; i++) {
      recursiveDOMTraversal(node.childNodes[i], action);
    }
  }
}

const startingElement = document.getElementById("startElement");

recursiveDOMTraversal(startingElement, function (node) {
  console.log("Тег:", node.tagName);
});
