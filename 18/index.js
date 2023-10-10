// 18

function checkAvailableLocalStorageSpace() {
  if ("localStorage" in window && window["localStorage"] !== null) {
    var totalSpace = 5 * 1024 * 1024; // Предполагаемый максимальный размер (5 МБ)
    for (var key in window.localStorage) {
      if (window.localStorage.hasOwnProperty(key)) {
        totalSpace -= window.localStorage[key].length * 2; // Учитываем размер данных в байтах (UTF-16)
      }
    }
    var remainingSpaceMB = (totalSpace / (1024 * 1024)).toFixed(2);
    console.log("Доступно место в localStorage: " + remainingSpaceMB + " МБ");
  } else {
    console.log("localStorage не поддерживается в этом браузере.");
  }
}

checkAvailableLocalStorageSpace();
