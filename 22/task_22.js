// 22
// Сколько раз можно вызвать document.write()

let count = 0;

// Примерно тоже самое, что и с размером коллстека, только добавляем document.write()
function testDocumentWrite() {
  try {
    document.write("Write, ");
    document.write("and write...<br>");
    count++;
    testDocumentWrite();
  } catch (error) {
    console.log(`Количество успешных вызовов document.write(): ${count}`);
    console.error(error);
  }
}

testDocumentWrite();

// Этот код будет выполняться до тех пор, пока не будет сгенерировано исключение.
// После этого выведет количество успешных вызовов document.write().
