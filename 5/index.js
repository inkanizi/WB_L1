// 5 Задание
// JSON в односвязный список

// Определение структуры элемента связного списка
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Функция для создания связанного списка из JSON
function jsonToLinkedList(jsonData) {
  try {
    const data = JSON.parse(jsonData); // Парсим JSON
    if (!Array.isArray(data)) {
      throw new Error("Входные данные должны быть массивом JSON объектов.");
    }

    // Создаем голову связанного списка
    let head = null;
    let current = null;

    // Проходим по каждому объекту JSON и создаем элементы списка
    for (const item of data) {
      const newNode = new Node(item);

      if (!head) {
        // Если это первый элемент, делаем его головой
        head = newNode;
        current = newNode;
      } else {
        // Иначе добавляем элемент в конец списка
        current.next = newNode;
        current = newNode;
      }
    }

    return head; // Возвращаем голову связанного списка
  } catch (error) {
    console.error("Ошибка при преобразовании JSON в связанный список:", error);
    return null; // В случае ошибки возвращаем null
  }
}

// Пример использования
const jsonData = '[{"value": 1}, {"value": 2}, {"value": 3}]';
const linkedList = jsonToLinkedList(jsonData);

let currentNode = linkedList;
while (currentNode !== null) {
  console.log(currentNode.data);
  currentNode = currentNode.next;
}
