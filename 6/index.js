// 6 Задание
// Сортировка

const sortArray = (arr) => {
  arr.sort((a, b) => {
    // Сравниваем возраст
    if (a.age !== b.age) {
      return a.age - b.age;
    }

    // Если возрасты равны, сравниваем по имени (алфавиту)
    return a.name.localeCompare(b.name);
  });
  return arr;
};

const people = [
  { name: "John", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Eve", age: 23 },
  { name: "Alex", age: 12 },
  { name: "Bob", age: 12 },
  { name: "Eve", age: 3 },
];

console.log("До");
console.log(people);
people.forEach((item) => {
  console.log(item);
});
console.log("После");
sortArray(people).forEach((item) => {
  console.log(item);
});
