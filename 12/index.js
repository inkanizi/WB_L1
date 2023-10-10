// 12 Задание
// Объект книги

const book = {
  title: "",
  author: "",
  publicationYear: 0,

  setTitle: function (title) {
    this.title = title;
  },

  getTitle: function () {
    return this.title;
  },

  setAuthor: function (author) {
    this.author = author;
  },

  getAuthor: function () {
    return this.author;
  },

  setPublicationYear: function (year) {
    this.publicationYear = year;
  },

  getPublicationYear: function () {
    return this.publicationYear;
  },
};

// Пример использования объекта книги
book.setTitle("The Great Gatsby");
book.setAuthor("F. Scott Fitzgerald");
book.setPublicationYear(1925);

console.log("Название книги:", book.getTitle());
console.log("Автор книги:", book.getAuthor());
console.log("Год издания:", book.getPublicationYear());
