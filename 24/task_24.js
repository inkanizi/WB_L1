// 24
// Вывод данных

document.addEventListener("DOMContentLoaded", function () {
  const contactsTable = document.getElementById("contacts-table");
  const tableHead = document.getElementById("table-head");
  const contactsBody = document.getElementById("contacts-body");
  const pagination = document.getElementById("pagination");

  const itemsPerPage = 50; // Количество элементов на странице
  let contactsData = []; // Массив данных контактов
  let currentPage = 1; // Текущая страница

  let sortColumn = null; // Колонка для сортировки
  let sortDirection = 1; // Направление сортировки (1 - по возрастанию, -1 - по убыванию)

  // Функция для отображения определенной страницы контактов
  function displayContactsPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const contactsPage = contactsData.slice(start, end);

    contactsBody.innerHTML = "";
    contactsPage.forEach((contact) => {
      const row = document.createElement("tr");

      for (const key in contact) {
        if (contact.hasOwnProperty(key)) {
          const cell = document.createElement("td");
          cell.textContent = contact[key];
          row.appendChild(cell);
        }
      }

      contactsBody.appendChild(row);
    });
  }

  // Функция для сортировки данных
  function sortContacts(column) {
    contactsData.sort((a, b) => {
      const valueA = a[column].toLowerCase();
      const valueB = b[column].toLowerCase();

      if (valueA < valueB) return -sortDirection;
      if (valueA > valueB) return sortDirection;
      return 0;
    });

    displayContactsPage(currentPage);
  }

  // Добавление обработчика события для сортировки при клике на заголовок колонки
  tableHead.addEventListener("click", function (event) {
    if (event.target.tagName === "TH") {
      const clickedColumn = event.target.textContent.toLowerCase();
      if (sortColumn === clickedColumn) {
        sortDirection *= -1;
      } else {
        sortColumn = clickedColumn;
        sortDirection = 1;
      }
      sortContacts(sortColumn);
    }
  });

  // Функция для создания элементов пагинации
  function generatePagination() {
    pagination.innerHTML = "";
    const totalPages = Math.ceil(contactsData.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = i;
      pageButton.addEventListener("click", () => {
        currentPage = i;
        displayContactsPage(currentPage);
      });
      pagination.appendChild(pageButton);
    }
  }

  // Загрузка данных через Fetch и инициализация таблицы
  fetch(
    "http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true"
  )
    .then((response) => response.json())
    .then((data) => {
      if (data && Array.isArray(data)) {
        contactsData = data.slice(0, 1000);
        generatePagination();
        displayContactsPage(currentPage);

        // Создаем заголовки таблицы на основе полей данных
        const fields = Object.keys(contactsData[0]);
        const headerRow = document.createElement("tr");
        fields.forEach((field) => {
          const headerCell = document.createElement("th");
          headerCell.textContent = field;
          headerRow.appendChild(headerCell);
        });
        tableHead.appendChild(headerRow);
      } else {
        contactsTable.innerHTML = "Не удалось загрузить контакты.";
      }
    })
    .catch((error) => {
      contactsTable.innerHTML = "Произошла ошибка при загрузке контактов: " + error.message;
    });
});
