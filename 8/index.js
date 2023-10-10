// 8 Задание
// Массив функций

function createClosureFunction(funcArray) {
  // Возвращает анонимную функцию (замыкание).
  return function () {
    const results = [];

    for (let i = 0; i < funcArray.length; i++) {
      // Вызываем текущую функцию из funcArray, передавая ей аргументы, переданные данной анонимной функции.
      const result = funcArray[i].apply(null, arguments);
      results.push(result);
    }

    return results;
  };
}

// Пример использования

const functions = [
  function (x) {
    return x * 2;
  },
  function (x) {
    return x + 1;
  },
  function (x) {
    return x - 1;
  },
];

// Создаем новую функцию-замыкание
const closureFunction = createClosureFunction(functions);

console.log(closureFunction(5));
