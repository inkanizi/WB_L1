// 3 Задание
// Библеотека MathX

class MathX {
  //Функция для определения, является ли число простым
  static isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;

    if (number % 2 === 0 || number % 3 === 0) return false;

    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
    }

    return true;
  }

  // Вычисление N-го числа в ряду Фибоначчи
  static fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let a = 0;
    let b = 1;
    let result = 0;

    for (let i = 2; i <= n; i++) {
      result = a + b;
      a = b;
      b = result;
    }

    return result;
  }

  // Вычисление всех чисел в ряду Фибоначчи до числа N
  static fibonacciSequence(n) {
    const sequence = [];
    for (let i = 0; i <= n; i++) {
      sequence.push(this.fibonacci(i));
    }
    return sequence;
  }

  // Вычисление N-го простого числа
  static nthPrime(n) {
    if (n <= 0) return undefined;

    let count = 0;
    let number = 2;

    while (count < n) {
      if (this.isPrime(number)) {
        count++;
      }
      if (count < n) {
        number++;
      }
    }

    return number;
  }

  // Вычисление всех простых чисел до числа N
  static primeSequence(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
      if (this.isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }
}


console.log(MathX.fibonacci(5)); // 5
console.log(MathX.fibonacciSequence(8)); // [0, 1, 1, 2, 3, 5, 8, 13, 21]
console.log(MathX.nthPrime(4)); // 7
console.log(MathX.primeSequence(15)); // [2, 3, 5, 7, 11, 13]
