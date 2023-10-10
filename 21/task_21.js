// 21
// Размер коллстека

let i = 0;

const getCallstackSize = () => {
  i++;

  getCallstackSize();
};

try {
  getCallstackSize();
} catch (e) {
  // Словили ошибку переполнения стэка и вывели значение счетчика в консоль
  console.log(i);
}
