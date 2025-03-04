var car1 = {
    color: "red",
    maxSpeed: 180,
    driver: {
        name: "Ann",
        category: "C",
        personalLimitations: "No driving at night"
    },
    tuning: true,
    numberOfAccidents: 0,
    drive: function() {
        console.log("I am not driving at night");
    }
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
    this.driver = null;

    this.trip = function() {
        if (!this.driver) {
            console.log("No driver assigned");
        } else {
            console.log(
                `Driver ${this.driver.name} ${this.driver.nightDriving ? "drives at night" : "does not drive at night"} and has ${this.driver.experience} years of experience`
            );
        }
    };
}

Truck.prototype.assignDriver = function(name, nightDriving, experience) {
    this.driver = { name, nightDriving, experience };
};

var truck1 = new Truck("green", 5000, 70.5, "Volvo", "FH16");
var truck2 = new Truck("black", 7000, 65.2, "Scania", "R500");

truck1.assignDriver("Ann", true, 10);
truck2.assignDriver("Bob", false, 5);

truck1.trip();
truck2.trip();

// Класи геометричних фігур
class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("Square: Квадрат – чотирикутна фігура з чотирма рівними сторонами та кутами по 90°.");
    }

    perimeter() {
        return 4 * this.a;
    }

    area() {
        return this.a * this.a;
    }

    info() {
        console.log(`Інформація про квадрат:
- Сторони: ${this.a}, ${this.a}, ${this.a}, ${this.a}
- Кути: 90°, 90°, 90°, 90°
- Периметр: ${this.perimeter()}
- Площа: ${this.area()}`);
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

    perimeter() {
        return 2 * (this.a + this.b);
    }

    area() {
        return this.a * this.b;
    }

    info() {
        console.log(`Інформація про прямокутник:
- Сторони: ${this.a}, ${this.b}, ${this.a}, ${this.b}
- Кути: 90°, 90°, 90°, 90°
- Периметр: ${this.perimeter()}
- Площа: ${this.area()}`);
    }
}

// Трикутники
function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}

const triangle1 = Triangular();
const triangle2 = Triangular(6, 8, 10);
const triangle3 = Triangular(5, 12, 13);

console.log("Triangle1 sides:", triangle1.a, triangle1.b, triangle1.c);
console.log("Triangle2:", triangle2);
console.log("Triangle3:", triangle3);

// Функція множення числа на π
function PiMultiplier(num) {
    return function() {
        return Math.PI * num;
    };
}

const multiplyPiBy2 = PiMultiplier(2);
const dividePiBy2 = PiMultiplier(0.5);

console.log("π multiplied by 2:", multiplyPiBy2());
console.log("π divided by 2:", dividePiBy2());

// Функція фарбування об'єктів
function Painter(color) {
    return function(obj) {
        if (obj && obj.hasOwnProperty("type")) {
            console.log(`${color} ${obj.type}`);
        } else {
            console.log("No 'type' property occurred!");
        }
    };
}

const PaintBlue = Painter("Blue");
const PaintRed = Painter("Red");

const testObj1 = { maxSpeed: 280, type: "Truck" };
const testObj2 = { maxSpeed: 180, type: "Sportcar" };
const testObj3 = { avgSpeed: 90, color: "magenta", loadCapacity: 2400 };

console.log("Painting object 1:");
PaintBlue(testObj1);

console.log("Painting object 2:");
PaintRed(testObj2);

console.log("Painting object 3:");
PaintRed(testObj3);
