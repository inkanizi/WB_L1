// 10

function convertStringToJSON(jsonString) {
  // Удаляем пробелы из начала и конца строки
  jsonString = jsonString.trim();

  // Проверяем, что строка начинается с "{", заканчивается "}", и они сбалансированы
  if (jsonString[0] !== "{" || jsonString[jsonString.length - 1] !== "}") {
    throw new Error('Неверный формат JSON: строка должна начинаться с "{" и заканчиваться "}"');
  }

  // Удаляем начальную "{" и закрывающую "}" из строки
  jsonString = jsonString.slice(1, -1);

  // Разделяем строку на пары ключ-значение по ","
  const keyValuePairs = jsonString.split(",");

  // Создаем пустой объект JSON
  const jsonObject = {};

  // Проходимся по каждой паре ключ-значение и добавляем их в объект JSON
  for (const pair of keyValuePairs) {
    // Разделяем пару ключ-значение по ":"
    const [key, value] = pair.split(":");

    // Удаляем лишние пробелы из ключа и значения
    const cleanedKey = key.trim();
    const cleanedValue = value.trim();

    // Добавляем пару в объект JSON
    jsonObject[cleanedKey] = cleanedValue;
  }

  return jsonObject;
}

// Пример использования
const jsonString = '{"name": "John", "age": 30}';
try {
  const parsedData = convertStringToJSON(jsonString);
  console.log("Успешно разобран JSON:", parsedData);
} catch (error) {
  console.error("Ошибка при разборе JSON:", error.message);
}
