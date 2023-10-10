// Подключаем библиотеку Moment.js
import moment from "moment";

// Функция для получения текущей даты
export function getCurrentDate() {
  return moment().format("YYYY-MM-DD");
}
