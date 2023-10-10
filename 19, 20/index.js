// 19
// Посты с ВК
console.log("load");
VK.init({
  apiId: 51767052,
});

// Функция для проверки, находится ли скролл внизу страницы
function isScrollAtBottom() {
  const postContainer = document.getElementById("post-container");
  return window.innerHeight + window.scrollY >= postContainer.offsetHeight;
}

// Функция для загрузки постов из VK API через VK Open API
function loadPosts(offset, count) {
  const ownerId = "-1";

  return new Promise((resolve, reject) => {
    VK.api(
      "wall.get",
      {
        owner_id: ownerId,
        count: count,
        offset: offset,
      },
      (response) => {
        if (response.error) {
          reject(new Error(`Ошибка VK API: ${response.error.error_msg}`));
        } else {
          resolve(response.response.items);
        }
      }
    );
  });
}

// Функция для отображения постов
function displayPosts(posts) {
  const postContainer = document.getElementById("post-container");
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.innerHTML = post.text;
    postContainer.appendChild(postElement);
  });
}

// Функция для загрузки и отображения постов при скролле
function loadAndDisplayPosts(offset, count) {
  if (isScrollAtBottom()) {
    loadPosts(offset, count)
      .then((posts) => {
        displayPosts(posts);
        saveToCache(posts); // Сохраняем посты в кэше
      })
      .catch((error) => {
        console.error("Ошибка загрузки постов:", error);
      });
  }
}

// Функция для сохранения новых постов в кэше
function saveToCache(posts) {
  const cachedPosts = JSON.parse(localStorage.getItem("cachedPosts")) || [];
  cachedPosts.push(...posts);
  // Проверяем, не превышен ли лимит localStorage, и если да, удаляем старые данные
  const maxCacheSize = 100; // Максимальный размер кэша
  if (cachedPosts.length > maxCacheSize) {
    cachedPosts.splice(0, cachedPosts.length - maxCacheSize);
  }
  localStorage.setItem("cachedPosts", JSON.stringify(cachedPosts));
}

// Функция для загрузки кэшированных данных
function loadCachedPosts() {
  const cachedPosts = JSON.parse(localStorage.getItem("cachedPosts")) || [];
  if (cachedPosts.length > 0) {
    displayPosts(cachedPosts);
  }
}

// Обработчик события scroll
window.addEventListener("scroll", () => {
  loadAndDisplayPosts(offset, count);
});

// Функция для подсчета объема памяти, занимаемого данными в localStorage
function calculateLocalStorageSize() {
  const totalSize = Object.keys(localStorage).reduce((acc, key) => {
    const itemSize = (localStorage[key].length * 2) / (1024 * 1024); // Размер в мегабайтах
    return acc + itemSize;
  }, 0);

  return totalSize.toFixed(2); // Округляем до двух знаков после запятой
}

// Функция для отслеживания изменений в localStorage
function trackLocalStorageChanges() {
  const maxLocalStorageSize = 5; // Максимальный размер localStorage в мегабайтах

  const updateLocalStorageInfo = () => {
    const currentSize = calculateLocalStorageSize();
    console.log(`Занято памяти: ${currentSize} MB / ${maxLocalStorageSize} MB`);
  };

  // Отслеживаем событие storage, которое возникает при изменении localStorage
  window.addEventListener("storage", updateLocalStorageInfo);

  // Инициализируем и выводим текущую информацию о размере localStorage
  updateLocalStorageInfo();
}

// Главная функция, инициализация виджета
function initWidget() {
  loadCachedPosts(); // Загружаем кэшированные данные
  loadAndDisplayPosts(offset, count); // Загружаем и отображаем посты
  trackLocalStorageChanges(); // Отслеживаем изменения в localStorage
}

initWidget();
