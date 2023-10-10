// 14
// Промис c изображением

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    //На загузку
    image.onload = () => {
      resolve(image);
    };
    //На ошибку
    image.onerror = () => {
      reject(new Error("Не удалось загрузить изображение"));
    };

    image.src = url;
  });
}

// Пример использования функции:
// const imageUrl = "https://www.example.com/images";
const imageUrl = "https://via.placeholder.com/150";

loadImage(imageUrl)
  .then((image) => {
    console.log("Изображение успешно загружено:", image);
    // Здесь вы можете выполнять операции с изображением, например, добавить его на страницу.
  })
  .catch((error) => {
    console.error("Произошла ошибка:", error);
  });
