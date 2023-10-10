// 15 Задание
// Асинхронность

async function asyncFunction() {
  try {
    const result1 = await someAsyncOperation1();
    const result2 = await someAsyncOperation2();
  } catch (error) {
    console.error("Произошла ошибка:", error);
    throw error;
  }
}

async function someAsyncOperation1() {
  return 10;
}

async function someAsyncOperation2() {
  return 20;
}

asyncFunction()
  .then((result) => {
    console.log("Результат:", result);
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  });
