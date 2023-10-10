// 17
//
document.addEventListener("DOMContentLoaded", () => {
  // Инициализация карты
  ymaps.ready(init);
  let myMap;

  function init() {
    myMap = new ymaps.Map("addressDropdown", {
      center: [55.755814, 37.617635], // Москва
      zoom: 10,
    });
  }

  // Поле ввода адреса
  const addressInput = document.getElementById("addressInput");
  const addressDropdown = document.getElementById("addressDropdown");
  let lastQuery = "";

  addressInput.addEventListener("input", () => {
    const inputValue = addressInput.value.trim();

    // Очистить предыдущие результаты
    addressDropdown.innerHTML = "";

    if (inputValue.length > 0 && inputValue !== lastQuery) {
      // Выполнить геокодирование запроса
      ymaps.geocode(inputValue).then((res) => {
        const results = res.geoObjects;

        if (results.getLength() > 0) {
          results.each((result) => {
            const name = result.getAddressLine();
            const option = document.createElement("div");
            option.className = "address-option";
            option.textContent = name;

            option.addEventListener("click", () => {
              // Установить выбранное значение в поле ввода
              addressInput.value = name;
              addressDropdown.innerHTML = ""; // Закрыть выпадающий список
            });

            addressDropdown.appendChild(option);
          });
        }
      });

      lastQuery = inputValue; // Запомнить последний запрос
    }
  });
});
