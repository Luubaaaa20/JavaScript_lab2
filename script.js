"use strict";
var car1 = new Object();
car1.color = "red";
car1.maxSpeed = 220;
car1.driver = { name: "Торчин Любов", category: "C", personalLimitations: "No driving at night" };
car1.tuning = true;
car1.numberOfAccidents = 0;
var car2 = { color: "blue", maxSpeed: 180, driver: { name: "Торчин Любов", category: "B", personalLimitations: null }, tuning: false, numberOfAccidents: 2 };
car1.drive = function() { console.log("I am not driving at night"); };
car1.drive();
car2.drive = function() { console.log("I can drive anytime"); };
car2.drive();
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color; this.weight = weight; this.avgSpeed = avgSpeed; this.brand = brand; this.model = model;
    this.trip = function() {
        if (!this.driver) { console.log("No driver assigned"); }
        else {
            var msg = "Driver " + this.driver.name + " ";
            msg += (this.driver.nightDriving ? "drives at night" : "does not drive at night");
            msg += " and has " + this.driver.experience + " years of experience";
            console.log(msg);
        }
    };
}
Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = { name: name, nightDriving: nightDriving, experience: experience };
};
var truck1 = new Truck("black", 5000, 80.5, "Volvo", "FH16"),
    truck2 = new Truck("white", 4500, 75.0, "Scania", "R500");
truck1.AssignDriver("Торчин Любов", true, 10);
truck2.AssignDriver("Торчин Любов", false, 5);
truck1.trip();
truck2.trip();
class Square {
    constructor(a) { this.a = a; }
    static help() { console.log("Square: A quadrilateral with four equal sides and four 90-degree angles."); }
    length() { console.log("Perimeter: " + (4 * this.a)); }
    square() { console.log("Area: " + (this.a * this.a)); }
    info() {
        console.log("Square info:");
        console.log("Side lengths: " + this.a + ", " + this.a + ", " + this.a + ", " + this.a);
        console.log("Angles: 90°, 90°, 90°, 90°");
        console.log("Perimeter: " + (4 * this.a));
        console.log("Area: " + (this.a * this.a));
    }
}
class Rectangle extends Square {
    constructor(a, b) { super(a); this.b = b; }
    static help() { console.log("Rectangle: A quadrilateral with opposite sides equal and four 90-degree angles."); }
    length() { console.log("Perimeter: " + (2 * (this.a + this.b))); }
    square() { console.log("Area: " + (this.a * this.b)); }
    info() {
        console.log("Rectangle info:");
        console.log("Side lengths: " + this.a + " and " + this.b);
        console.log("Angles: 90°, 90°, 90°, 90°");
        console.log("Perimeter: " + (2 * (this.a + this.b)));
        console.log("Area: " + (this.a * this.b));
    }
}
class Rhombus extends Square {
    constructor(a, alpha, beta) { super(a); this.alpha = alpha; this.beta = beta; }
    static help() { console.log("Rhombus: A quadrilateral with four equal sides and opposite equal angles."); }
    length() { console.log("Perimeter: " + (4 * this.a)); }
    square() { let rad = this.beta * (Math.PI / 180); console.log("Area: " + (this.a * this.a * Math.sin(rad))); }
    info() {
        console.log("Rhombus info:");
        console.log("Side lengths: " + this.a + ", " + this.a + ", " + this.a + ", " + this.a);
        console.log("Angles: " + this.alpha + "°, " + this.beta + "°, " + this.alpha + "°, " + this.beta + "°");
        console.log("Perimeter: " + (4 * this.a));
        let rad = this.beta * (Math.PI / 180);
        console.log("Area: " + (this.a * this.a * Math.sin(rad)));
    }
    get side() { return this.a; }
    set side(value) { this.a = value; }
    get obtuseAngle() { return this.alpha; }
    set obtuseAngle(value) { this.alpha = value; }
    get acuteAngle() { return this.beta; }
    set acuteAngle(value) { this.beta = value; }
}
class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) { super(a, b); this.alpha = alpha; this.beta = beta; }
    static help() { console.log("Parallelogram: A quadrilateral with two pairs of parallel sides."); }
    length() { console.log("Perimeter: " + (2 * (this.a + this.b))); }
    square() { let rad = this.beta * (Math.PI / 180); console.log("Area: " + (this.a * this.b * Math.sin(rad))); }
    info() {
        console.log("Parallelogram info:");
        console.log("Side lengths: " + this.a + " and " + this.b);
        console.log("Angles: " + this.alpha + "° and " + this.beta + "° (кожен з'являється по двічі)");
        console.log("Perimeter: " + (2 * (this.a + this.b)));
        let rad = this.beta * (Math.PI / 180);
        console.log("Area: " + (this.a * this.b * Math.sin(rad)));
    }
}
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();
let squareObj = new Square(5),
    rectangleObj = new Rectangle(4, 7),
    rhombusObj = new Rhombus(6, 120, 60),
    parallelogramObj = new Parallelogram(8, 5, 110, 70);
squareObj.info();
rectangleObj.info();
rhombusObj.info();
parallelogramObj.info();
function Triangular(a = 3, b = 4, c = 5) { return { a, b, c }; }
console.log(Triangular());
console.log(Triangular(5, 12, 13));
console.log(Triangular(7, 24, 25));
function PiMultiplier(num) { return () => Math.PI * num; }
let multiplyBy2 = PiMultiplier(2),
    multiplyBy3_2 = PiMultiplier(3 / 2),
    divideBy2 = PiMultiplier(1 / 2);
console.log("Pi multiplied by 2: " + multiplyBy2());
console.log("Pi multiplied by 3/2: " + multiplyBy3_2());
console.log("Pi divided by 2: " + divideBy2());
function Painter(color) {
    return function(obj) {
        if (obj && obj.type) console.log("Color: " + color + ", Type: " + obj.type);
        else console.log("No 'type' property occurred!");
    };
}
const PaintBlue = Painter("blue"),
      PaintRed = Painter("red"),
      PaintYellow = Painter("yellow");
var testObj1 = { maxSpeed: 280, type: "Truck" },
    testObj2 = { maxSpeed: 180, type: "Sportcar", avgSpeed: 90 },
    testObj3 = { color: "magenta", loadCapacity: 2400, isCar: true };
PaintBlue(testObj1);
PaintRed(testObj2);
PaintYellow(testObj3);
