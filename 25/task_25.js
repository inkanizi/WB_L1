// 25

function createAndStyleElement(tagName, styles, text = "") {
  // Создаем новый элемент
  const element = document.createElement(tagName);
  // Устанавливаем стили для элемента
  for (const property in styles) {
    element.style[property] = styles[property];
  }
  // Добавляем элемент в DOM
  document.body.appendChild(element);
  //Текст если есть
  element.textContent = text;
  // Возвращаем созданный элемент
  return element;
}

// Пример использования функции:
const styles = {
  backgroundColor: "lightblue",
  color: "white",
  padding: "10px",
  borderRadius: "5px",
};

const divElement = createAndStyleElement("div", styles, "Созданный элемент");
