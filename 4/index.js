// 4 Задание
// Окончание слов в зависимости от падежа (кол-ва)

export const WordDeclension = {
  declineWord(number, wordForms) {
    // Проверка, оканчивается ли число на 1 и не находится ли в диапазоне '11' (например, 21, 31, 41)
    if (number % 10 === 1 && number % 100 !== 11) {
      // Если условие выполняется, возвращается первая форма слова из массива
      return wordForms[0];
    } else if ([2, 3, 4].includes(number % 10) && ![12, 13, 14].includes(number % 100)) {
      // Иначе, если число оканчивается на 2, 3 или 4 и не находится в диапазоне '12', '13' или '14'
      return wordForms[1];
    } else {
      // В остальных случаях возвращается третья форма слова из массива
      return wordForms[2];
    }
  },
};

const messageWordForms = ["сообщение", "сообщения", "сообщений"];
const userWordForms = ["пользователь", "пользователя", "пользователей"];

// console.log(`1 ${WordDeclension.declineWord(1, messageWordForms)}`);
// console.log(`2 ${WordDeclension.declineWord(2, messageWordForms)}`);
// console.log(`5 ${WordDeclension.declineWord(5, messageWordForms)}`);
// console.log(`11 ${WordDeclension.declineWord(11, messageWordForms)}`);
// console.log(`21 ${WordDeclension.declineWord(21, messageWordForms)}`);
// console.log(`22 ${WordDeclension.declineWord(22, messageWordForms)}`);
// console.log(`25 ${WordDeclension.declineWord(25, messageWordForms)}`);
// console.log(`101 ${WordDeclension.declineWord(101, userWordForms)}`);
// console.log(`112 ${WordDeclension.declineWord(112, userWordForms)}`);
// console.log(`125 ${WordDeclension.declineWord(125, userWordForms)}`);
