//13
// Фигуры

class Shape {
  constructor() {
    this.name = "Shape";
  }

  calculateArea() {
    return 0;
  }

  calculatePerimeter() {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.name = "Rectangle";
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.name = "Circle";
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }

  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Triangle extends Shape {
  constructor(side1, side2, side3) {
    super();
    this.name = "Triangle";
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  calculateArea() {
    // Используем формулу Герона для вычисления площади треугольника
    const s = (this.side1 + this.side2 + this.side3) / 2;
    return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
  }

  calculatePerimeter() {
    return this.side1 + this.side2 + this.side3;
  }
}

// Пример использования:

const rectangle = new Rectangle(5, 10);
console.log(
  `${
    rectangle.name
  } - Площадь: ${rectangle.calculateArea()}, Периметр: ${rectangle.calculatePerimeter()}`
);

const circle = new Circle(7);
console.log(
  `${
    circle.name
  } - Площадь: ${circle.calculateArea()}, Длина окружности: ${circle.calculatePerimeter()}`
);

const triangle = new Triangle(3, 4, 5);
console.log(
  `${
    triangle.name
  } - Площадь: ${triangle.calculateArea()}, Периметр: ${triangle.calculatePerimeter()}`
);
