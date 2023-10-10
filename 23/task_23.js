// 23
// Анализатор пароля

function evaluatePasswordStrength(password) {
  // Проверяем длину пароля
  const lengthScore = password.length >= 8 ? 2 : 0;

  // Проверяем наличие букв верхнего и нижнего регистра
  const lowercaseRegex = /[a-z]/;
  const uppercaseRegex = /[A-Z]/;
  const hasLowercase = lowercaseRegex.test(password);
  const hasUppercase = uppercaseRegex.test(password);
  const caseScore = hasLowercase && hasUppercase ? 2 : 0;

  // Проверяем наличие цифр
  const digitRegex = /\d/;
  const hasDigit = digitRegex.test(password);
  const digitScore = hasDigit ? 2 : 0;

  // Проверяем наличие специальных символов
  const specialRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
  const hasSpecial = specialRegex.test(password);
  const specialScore = hasSpecial ? 2 : 0;

  // Суммируем баллы и оцениваем сложность
  const totalScore = lengthScore + caseScore + digitScore + specialScore;

  let strength = "";
  if (totalScore < 4) {
    strength = "Слабый";
  } else if (totalScore < 8) {
    strength = "Средний";
  } else {
    strength = "Сильный";
  }

  return {
    strength,
    suggestions: [
      "Используйте как минимум 8 символов.",
      "Включите буквы верхнего и нижнего регистра.",
      "Добавьте цифры и специальные символы для увеличения безопасности.",
    ],
  };
}

// Пример использования
const password = "1234";
const result = evaluatePasswordStrength(password);
console.log(`Оценка сложности пароля: ${result.strength}`);
if (result.strength === "Слабый") {
  console.log("Предложения по улучшению:");
  result.suggestions.forEach((suggestion, index) => {
    console.log(`${index + 1}. ${suggestion}`);
  });
}
