/************************************
 * Частина 1. Використання об’єктів (ES5)
 * Завдання 1.2.3 – 1.2.10
 ************************************/

// 1.2.3: Створення об’єкта car1 за допомогою new Object()
var car1 = new Object();
car1.color = "red";              // довільний колір (англійською)
car1.maxSpeed = 180;             // довільне ціле число
car1.driver = {                 
    name: "Ivan Ivanov",         // ім’я та прізвище виконавця практичної роботи
    category: "C",
    personalLimitations: "No driving at night"
};
car1.tuning = true;
car1.numberOfAccidents = 0;      // кількість аварій

// 1.2.5: Додавання методу drive для car1
car1.drive = function() {
    console.log("I am not driving at night");
};

// Демонстрація роботи методу drive для car1
car1.drive(); // В консолі: I am not driving at night

// 1.2.4: Створення об’єкта car2 за допомогою літералу об’єкта
var car2 = {
    color: "blue",             // довільний колір (англійською)
    maxSpeed: 200,             // довільне ціле число
    driver: {
        name: "Ivan Ivanov",   // ім’я та прізвище виконавця практичної роботи
        category: "B",
        personalLimitations: null
    },
    tuning: false,
    numberOfAccidents: 2,
    // 1.2.6: Додавання методу drive для car2
    drive: function() {
        console.log("I can drive anytime");
    }
};

// Демонстрація роботи методу drive для car2
car2.drive(); // В консолі: I can drive anytime

// 1.2.7: Конструктор для "класу" Truck
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;       // довільний колір (англійською)
    this.weight = weight;     // довільне ціле число
    this.avgSpeed = avgSpeed; // довільне дійсне число
    this.brand = brand;       // марка машини
    this.model = model;       // модель машини
    
    // 1.2.9: Метод trip, який перевіряє наявність водія та виводить відповідне повідомлення
    this.trip = function() {
        if (!this.driver) {
            console.log("No driver assigned");
        } else {
            var message = "Driver " + this.driver.name + " " +
                          (this.driver.nightDriving ? "drives at night" : "does not drive at night") +
                          " and has " + this.driver.experience + " years of experience";
            console.log(message);
        }
    }
}

// 1.2.8: Додавання методу AssignDriver через prototype для класу Truck
Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

// 1.2.10: Створення 2 об’єктів Truck та демонстрація роботи методу trip
var truck1 = new Truck("green", 5000, 70.5, "Volvo", "FH16");
var truck2 = new Truck("black", 7000, 65.2, "Scania", "R500");

// Призначення водія для truck1 (nightDriving = true)
truck1.AssignDriver("Ivan Ivanov", true, 10);

// Призначення водія для truck2 (nightDriving = false)
truck2.AssignDriver("Ivan Ivanov", false, 5);

// Демонстрація роботи методу trip
truck1.trip(); // В консолі: Driver Ivan Ivanov drives at night and has 10 years of experience
truck2.trip(); // В консолі: Driver Ivan Ivanov does not drive at night and has 5 years of experience


/************************************
 * Частина 2. Використання класів ES6
 * Завдання 1.2.11 – 1.2.24
 ************************************/

// 1.2.12 – 1.2.15: Клас Square
class Square {
  constructor(a) {
    this.a = a; // сторона квадрата
  }
  
  // 1.2.14: Статичний метод help – довідка про квадрат
  static help() {
    console.log("Square: Квадрат – чотирикутна фігура з чотирма рівними сторонами та кутами по 90°.");
  }
  
  // 1.2.15: Метод length – сума довжин сторін (периметр)
  length() {
    const perimeter = 4 * this.a;
    console.log(`Периметр квадрата: ${perimeter}`);
  }
  
  // 1.2.15: Метод square – площа квадрата
  square() {
    const area = this.a * this.a;
    console.log(`Площа квадрата: ${area}`);
  }
  
  // 1.2.15: Метод info – повна характеристика квадрата
  info() {
    console.log(`Інформація про квадрат:
- Сторони: ${this.a}, ${this.a}, ${this.a}, ${this.a}
- Кути: 90°, 90°, 90°, 90°
- Периметр: ${4 * this.a}
- Площа: ${this.a * this.a}`);
  }
}

// 1.2.16 – 1.2.17: Клас Rectangle (прямокутник), успадкований від Square
class Rectangle extends Square {
  constructor(a, b) {
    super(a); // Виклик конструктора батьківського класу для властивості a
    this.b = b; // ширина прямокутника
  }
  
  // Перевизначення статичного методу help
  static help() {
    console.log("Rectangle: Прямокутник – чотирикутна фігура, де протилежні сторони рівні, а кути – 90°.");
  }
  
  // Перевизначення методу length – периметр прямокутника = 2*(a+b)
  length() {
    const perimeter = 2 * (this.a + this.b);
    console.log(`Периметр прямокутника: ${perimeter}`);
  }
  
  // Перевизначення методу square – площа прямокутника = a * b
  square() {
    const area = this.a * this.b;
    console.log(`Площа прямокутника: ${area}`);
  }
  
  // Перевизначення методу info – повна характеристика прямокутника
  info() {
    console.log(`Інформація про прямокутник:
- Сторони: ${this.a}, ${this.b}, ${this.a}, ${this.b}
- Кути: 90°, 90°, 90°, 90°
- Периметр: ${2 * (this.a + this.b)}
- Площа: ${this.a * this.b}`);
  }
}

// 1.2.18 – 1.2.19: Клас Rhombus (ромб), успадкований від Square
class Rhombus extends Square {
  constructor(a, alpha, beta) {
    super(a);
    // Використовуємо приватні властивості (_alpha, _beta) для геттерів/сеттерів
    this._alpha = alpha; // тупий кут ромба (у градусах)
    this._beta = beta;   // гострий кут ромба (у градусах)
  }
  
  // Статичний метод help
  static help() {
    console.log("Rhombus: Ромб – чотирикутна фігура з рівними сторонами, але кутами, що не дорівнюють 90°. Протилежні кути рівні.");
  }
  
  // Метод length – периметр ромба = 4 * a
  length() {
    const perimeter = 4 * this.a;
    console.log(`Периметр ромба: ${perimeter}`);
  }
  
  // Метод square – площа ромба = a² * sin(α)
  square() {
    const rad = this._alpha * Math.PI / 180;
    const area = this.a * this.a * Math.sin(rad);
    console.log(`Площа ромба: ${area.toFixed(2)}`);
  }
  
  // Метод info – повна характеристика ромба
  info() {
    console.log(`Інформація про ромб:
- Сторони: ${this.a}, ${this.a}, ${this.a}, ${this.a}
- Кути: ${this._alpha}°, ${this._beta}°, ${this._alpha}°, ${this._beta}°
- Периметр: ${4 * this.a}
- Площа: ${(this.a * this.a * Math.sin(this._alpha * Math.PI / 180)).toFixed(2)}`);
  }
  
  // 1.2.22: Геттери та сеттери для властивостей ромба
  get alpha() {
    return this._alpha;
  }
  set alpha(value) {
    this._alpha = value;
  }
  
  get beta() {
    return this._beta;
  }
  set beta(value) {
    this._beta = value;
  }
  
  get side() {
    return this.a;
  }
  set side(value) {
    this.a = value;
  }
}

// 1.2.20 – 1.2.21: Клас Parallelogram (паралелограм), успадкований від Rectangle
class Parallelogram extends Rectangle {
  constructor(a, b, alpha, beta) {
    super(a, b);
    this.alpha = alpha; // тупий кут паралелограма
    this.beta = beta;   // гострий кут паралелограма
  }
  
  // Статичний метод help
  static help() {
    console.log("Parallelogram: Паралелограм – чотирикутна фігура з двома паралельними сторонами. Протилежні сторони рівні, а протилежні кути – рівні.");
  }
  
  // Перевизначення методу length – периметр = 2*(a+b)
  length() {
    const perimeter = 2 * (this.a + this.b);
    console.log(`Периметр паралелограма: ${perimeter}`);
  }
  
  // Перевизначення методу square – площа = a * b * sin(β)
  square() {
    const rad = this.beta * Math.PI / 180;
    const area = this.a * this.b * Math.sin(rad);
    console.log(`Площа паралелограма: ${area.toFixed(2)}`);
  }
  
  // Перевизначення методу info – повна характеристика паралелограма
  info() {
    console.log(`Інформація про паралелограм:
- Сторони: ${this.a}, ${this.b}, ${this.a}, ${this.b}
- Кути: ${this.alpha}°, ${this.beta}°, ${this.alpha}°, ${this.beta}°
- Периметр: ${2 * (this.a + this.b)}
- Площа: ${(this.a * this.b * Math.sin(this.beta * Math.PI / 180)).toFixed(2)}`);
  }
}

// 1.2.23: Виклик статичних методів help для кожного класу
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

// 1.2.24: Створення об’єктів для кожного класу та демонстрація роботи методу info

// Об’єкт класу Square
const squareObj = new Square(5);
squareObj.info();

// Об’єкт класу Rectangle
const rectangleObj = new Rectangle(4, 7);
rectangleObj.info();

// Об’єкт класу Rhombus
const rhombusObj = new Rhombus(6, 120, 60);
rhombusObj.info();

// Об’єкт класу Parallelogram
const parallelogramObj = new Parallelogram(5, 8, 110, 70);
parallelogramObj.info();


/************************************
 * Частина 3. Функції та замикання (ES6)
 * Завдання 1.2.25 – 1.2.32
 ************************************/

// 1.2.25 – 1.2.26: Функція Triangular, яка повертає об’єкт із сторонами трикутника
function Triangular(a = 3, b = 4, c = 5) {
  return { a, b, c };
}

// Створення 3 об’єктів трикутників, один із значеннями за замовчуванням
const triangle1 = Triangular();         // { a: 3, b: 4, c: 5 }
const triangle2 = Triangular(6, 8, 10);    // { a: 6, b: 8, c: 10 }
const triangle3 = Triangular(5, 12, 13);   // { a: 5, b: 12, c: 13 }

// Використання destructuring assignment
const { a: a1, b: b1, c: c1 } = triangle1;
console.log("Triangle1 sides:", a1, b1, c1);
console.log("Triangle2:", triangle2);
console.log("Triangle3:", triangle3);

// 1.2.27 – 1.2.28: Функція PiMultiplier, що повертає функцію із запам’ятовуванням множника
function PiMultiplier(num) {
  return function() {
    return Math.PI * num;
  };
}

// Створення 3 функцій: дві множать π на 2, третя – ділить π на 2 (множення на 0.5)
const multiplyPiBy2 = PiMultiplier(2);
const multiplyPiBy2Again = PiMultiplier(2);
const dividePiBy2 = PiMultiplier(0.5);

console.log("π multiplied by 2:", multiplyPiBy2());
console.log("π multiplied by 2 (again):", multiplyPiBy2Again());
console.log("π divided by 2:", dividePiBy2());

// 1.2.29 – 1.2.31: Функція Painter, яка повертає функцію для "фарбування" об’єкта
function Painter(color) {
  return function(obj) {
    if (obj && Object.prototype.hasOwnProperty.call(obj, "type")) {
      console.log(`${color} ${obj.type}`);
    } else {
      console.log("No 'type' property occurred!");
    }
  };
}

// Створення функцій для фарбування об’єктів у синій, червоний та жовтий кольори
const PaintBlue = Painter("Blue");
const PaintRed = Painter("Red");
const PaintYellow = Painter("Yellow");

// 1.2.31: Тестові об’єкти згідно з таблицею 12
const testObj1 = { maxSpeed: 280, type: "Truck" };
const testObj2 = { maxSpeed: 180, type: "Sportcar" };
const testObj3 = { avgSpeed: 90, color: "magenta", loadCapacity: 2400, isCar: true };

// Демонстрація роботи функцій фарбування
console.log("Painting object 1:");
PaintBlue(testObj1);  // Виведе: "Blue Truck"
console.log("Painting object 2:");
PaintRed(testObj2);   // Виведе: "Red Sportcar"
console.log("Painting object 3:");
PaintYellow(testObj3); // Виведе: "No 'type' property occurred!"

/************************************
 * Частина 4. Посилання для здачі роботи
 * Завдання 1.2.32
 ************************************/
// Для здачі завдання необхідно розмістити створену веб-сторінку на GitHub Pages.
// Формат посилання на веб-сторінку:
//   https://username.github.io/userrepo/userdirectory
// Формат посилання на репозиторій:
//   https://github.com/username/userrepo
// (Замініть "username", "userrepo" та "userdirectory" на відповідні значення вашого облікового запису та репозиторію.)
