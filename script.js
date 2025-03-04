var car1 = new Object();
car1.color = "red";              
car1.maxSpeed = 180;             
car1.driver = {                 
    name: "Ann",         
    category: "C",
    personalLimitations: "No driving at night"
};
car1.tuning = true;
car1.numberOfAccidents = 0;      

car1.drive = function() {
    console.log("I am not driving at night");
};

car1.drive(); 

var car2 = {
    color: "blue",             
    maxSpeed: 200,             
    driver: {
        name: "Bob",   
        category: "B",
        personalLimitations: null
    },
    tuning: false,
    numberOfAccidents: 2,
    drive: function() {
        console.log("I can drive anytime");
    }
};

car2.drive(); 

function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;       
    this.weight = weight;     
    this.avgSpeed = avgSpeed; 
    this.brand = brand;       
    this.model = model;       
    
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

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

\var truck1 = new Truck("green", 5000, 70.5, "Volvo", "FH16");
var truck2 = new Truck("black", 7000, 65.2, "Scania", "R500");

truck1.AssignDriver("Ann", true, 10);

truck2.AssignDriver("Bob", false, 5);

truck1.trip(); 
truck2.trip(); 

class Square {
  constructor(a) {
    this.a = a; 
  }
  
  static help() {
    console.log("Square: Квадрат – чотирикутна фігура з чотирма рівними сторонами та кутами по 90°.");
  }
  
  length() {
    const perimeter = 4 * this.a;
    console.log(`Периметр квадрата: ${perimeter}`);
  }
  
  square() {
    const area = this.a * this.a;
    console.log(`Площа квадрата: ${area}`);
  }
  
  info() {
    console.log(`Інформація про квадрат:
- Сторони: ${this.a}, ${this.a}, ${this.a}, ${this.a}
- Кути: 90°, 90°, 90°, 90°
- Периметр: ${4 * this.a}
- Площа: ${this.a * this.a}`);
  }
}

class Rectangle extends Square {
  constructor(a, b) {
    super(a); 
    this.b = b; 
  }
  
  static help() {
    console.log("Rectangle: Прямокутник – чотирикутна фігура, де протилежні сторони рівні, а кути – 90°.");
  }
  
  length() {
    const perimeter = 2 * (this.a + this.b);
    console.log(`Периметр прямокутника: ${perimeter}`);
  }
  
  square() {
    const area = this.a * this.b;
    console.log(`Площа прямокутника: ${area}`);
  }
  
  info() {
    console.log(`Інформація про прямокутник:
- Сторони: ${this.a}, ${this.b}, ${this.a}, ${this.b}
- Кути: 90°, 90°, 90°, 90°
- Периметр: ${2 * (this.a + this.b)}
- Площа: ${this.a * this.b}`);
  }
}

class Rhombus extends Square {
  constructor(a, alpha, beta) {
    super(a);
    this._alpha = alpha; 
    this._beta = beta;   
  }
  
  static help() {
    console.log("Rhombus: Ромб – чотирикутна фігура з рівними сторонами, але кутами, що не дорівнюють 90°. Протилежні кути рівні.");
  }
  
  length() {
    const perimeter = 4 * this.a;
    console.log(`Периметр ромба: ${perimeter}`);
  }
  
  square() {
    const rad = this._alpha * Math.PI / 180;
    const area = this.a * this.a * Math.sin(rad);
    console.log(`Площа ромба: ${area.toFixed(2)}`);
  }
  
  info() {
    console.log(`Інформація про ромб:
- Сторони: ${this.a}, ${this.a}, ${this.a}, ${this.a}
- Кути: ${this._alpha}°, ${this._beta}°, ${this._alpha}°, ${this._beta}°
- Периметр: ${4 * this.a}
- Площа: ${(this.a * this.a * Math.sin(this._alpha * Math.PI / 180)).toFixed(2)}`);
  }
  
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

class Parallelogram extends Rectangle {
  constructor(a, b, alpha, beta) {
    super(a, b);
    this.alpha = alpha; 
    this.beta = beta;   
  }
  
  static help() {
    console.log("Parallelogram: Паралелограм – чотирикутна фігура з двома паралельними сторонами. Протилежні сторони рівні, а протилежні кути – рівні.");
  }
  
  length() {
    const perimeter = 2 * (this.a + this.b);
    console.log(`Периметр паралелограма: ${perimeter}`);
  }
  
  square() {
    const rad = this.beta * Math.PI / 180;
    const area = this.a * this.b * Math.sin(rad);
    console.log(`Площа паралелограма: ${area.toFixed(2)}`);
  }
  
  info() {
    console.log(`Інформація про паралелограм:
- Сторони: ${this.a}, ${this.b}, ${this.a}, ${this.b}
- Кути: ${this.alpha}°, ${this.beta}°, ${this.alpha}°, ${this.beta}°
- Периметр: ${2 * (this.a + this.b)}
- Площа: ${(this.a * this.b * Math.sin(this.beta * Math.PI / 180)).toFixed(2)}`);
  }
}

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

const squareObj = new Square(5);
squareObj.info();

const rectangleObj = new Rectangle(4, 7);
rectangleObj.info();

const rhombusObj = new Rhombus(6, 120, 60);
rhombusObj.info();

const parallelogramObj = new Parallelogram(5, 8, 110, 70);
parallelogramObj.info();

function Triangular(a = 3, b = 4, c = 5) {
  return { a, b, c };
}

const triangle1 = Triangular();         // { a: 3, b: 4, c: 5 }
const triangle2 = Triangular(6, 8, 10);    // { a: 6, b: 8, c: 10 }
const triangle3 = Triangular(5, 12, 13);   // { a: 5, b: 12, c: 13 }

const { a: a1, b: b1, c: c1 } = triangle1;
console.log("Triangle1 sides:", a1, b1, c1);
console.log("Triangle2:", triangle2);
console.log("Triangle3:", triangle3);

function PiMultiplier(num) {
  return function() {
    return Math.PI * num;
  };
}

const multiplyPiBy2 = PiMultiplier(2);
const multiplyPiBy2Again = PiMultiplier(2);
const dividePiBy2 = PiMultiplier(0.5);

console.log("π multiplied by 2:", multiplyPiBy2());
console.log("π multiplied by 2 (again):", multiplyPiBy2Again());
console.log("π divided by 2:", dividePiBy2());

function Painter(color) {
  return function(obj) {
    if (obj && Object.prototype.hasOwnProperty.call(obj, "type")) {
      console.log(`${color} ${obj.type}`);
    } else {
      console.log("No 'type' property occurred!");
    }
  };
}

const PaintBlue = Painter("Blue");
const PaintRed = Painter("Red");
const PaintYellow = Painter("Yellow");

const testObj1 = { maxSpeed: 280, type: "Truck" };
const testObj2 = { maxSpeed: 180, type: "Sportcar" };
const testObj3 = { avgSpeed: 90, color: "magenta", loadCapacity: 2400, isCar: true };

console.log("Painting object 1:");
PaintBlue(testObj1);  // Виведе: "Blue Truck"
console.log("Painting object 2:");
PaintRed(testObj2);   // Виведе: "Red Sportcar"
console.log("Painting object 3:");
PaintYellow(testObj3); // Виведе: "No 'type' property occurred!"


