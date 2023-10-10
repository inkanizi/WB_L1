// 9 Задание
// JSON в строку

function jsonToJSString(jsonObj) {
  // Проверяем, является ли jsonObj примитивным значением или null
  if (typeof jsonObj !== "object" || jsonObj === null) {
    // Если jsonObj - null, возвращаем строку "null"
    if (jsonObj === null) {
      return "null";
    }
    // Если jsonObj - строка, обрамляем её в одинарные кавычки и возвращаем
    else if (typeof jsonObj === "string") {
      return "'" + jsonObj + "'";
    }
    // В противном случае возвращаем строковое представление значения
    else {
      return jsonObj.toString();
    }
  }

  // Если jsonObj - массив
  if (Array.isArray(jsonObj)) {
    // Обрабатываем каждый элемент массива рекурсивно и объединяем их в строку
    let resultArray = jsonObj.map(function (item) {
      return jsonToJSString(item);
    });
    return "[" + resultArray.join(", ") + "]";
  }

  // Если jsonObj - объект
  let result = "{";
  let keys = Object.keys(jsonObj);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = jsonObj[key];

    if (i > 0) {
      result += ", ";
    }

    // Рекурсивно вызываем jsonToJSString для значений объекта
    result += "'" + key + "': " + jsonToJSString(value);
  }
  result += "}";
  return result;
}

// Пример использования
let jsonObject = {
  name: "John",
  age: 30,
  city: "New York",
  friends: ["Alice", "Bob"],
  address: {
    street: "123 Main St",
    zip: "10001",
  },
};

let jsonString = jsonToJSString(jsonObject);
console.log(jsonString);
