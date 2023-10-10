// 7 Задание
// Коллекции

const functionsArray = [
  () => {
    console.log("Функция 1");
    // Вызывает следующую функцию после завершения текущей
    if (functionsArray.length > 1) {
      functionsArray[1]();
    }
  },
  () => {
    console.log("Функция 2");
    if (functionsArray.length > 2) {
      functionsArray[2]();
    }
  },
  () => {
    console.log("Функция 3");
  },
];

// Начинаем выполнение с первой функции
functionsArray[0]();