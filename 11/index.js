// 11 Задание
// Замыкания

function createClosure() {
  // Внешняя функция, которая определяет переменную
  let outerVariable = 0;

  // Внутренняя функция, которая имеет доступ к outerVariable
  function innerFunction() {
    // Внутренняя функция может использовать outerVariable
    console.log(outerVariable);
  }
  return innerFunction;
}

const closure = createClosure();

// Вызываем внутреннюю функцию, которая все равно имеет доступ к outerVariable
closure();
