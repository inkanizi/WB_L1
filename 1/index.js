// 1 Задание
// Проверка на палиндром

const isPalindrome = (string) => {
  //Форматируем строку, все буквы в нижний регистр и убераем спецсимбволы
  string = string.toLowerCase().replace(/[^a-zA-Zа-яA-Я0-9]+/g, "");
  //Разделяем строку, переворачиваем и соединяем обратно
  const reversedString = string.split("").reverse().join("");
  //Сравниеваем строки
  return string === reversedString;
};

// console.log("Тест 1:", isPalindrome("testing"));

// console.log("Тест 2:", isPalindrome("Муха! О, муха! Велика аки лев! Ах, ум! О ах, ум!"));

// console.log("Тест 3:", isPalindrome("Учуя молоко, я около мяучу"));

// console.log("Тест 4:", isPalindrome("182281"));

// console.log("Тест 5:", isPalindrome("Лёша на полке клопа нашёл"));

// console.log("Тест 6:", isPalindrome("race car"));

// console.log("Тест 7:", isPalindrome("A man, a plan, a canal, Panama!"));

// console.log("Тест 8:", isPalindrome("Madam, in Eden, I’m Adam."));

// console.log("Тест 9:", isPalindrome("Аргентина манит негра"));
