
/****** Iterating through object properties *********/
for (key in { abc: 1, bcd: 2 }) {
  console.log(key);
}

/*------------------ creating an Object ---------------*/

let obj1 = new Object();
console.log("obj1 ", obj1, typeof obj1, obj1.valueOf()); // object {}

let obj2 = new Object(null);
console.log("obj2 ", obj2, typeof obj2, obj2.valueOf()); // object {}

let obj3 = new Object(undefined);
console.log("obj3 ", obj3, typeof obj3, obj3.valueOf()); // object {}

let obj4 = new Object(12.4); // creates an object with number properties/prototype
console.log("obj4 ", obj4, typeof obj4, obj4.valueOf()); // object

let obj5 = new Object("sfg"); // creates an object with string properties/prototype
console.log("obj5 ", obj5, typeof obj5, obj5.valueOf()); //object

let a1 = new Object(1), a2 = new Object(2);
console.log(a1 + a2); // 3
console.log(a1.toString()); // '1'

/*------------------ function with prototype ----------------*/

function Car(manufacturer, type) { // This is a contructor function
  this.manufacturer = manufacturer; // Each object instance has its own properties
  this.type = type; // Instance level propertie
}
// prototype properties are inherently available for all instances
Car.prototype.vehicleName = "Car"; // prototype properties are inherently available for all instances
Car.prototype.wheels = 4;
Car.prototype.getVehicleInfo = // prototype property method, we can access obj.getVehicleInfo
  function () {
    console.log("vehicleName: ", this.vehicleName);
    console.log("manufacturer: ", this.manufacturer);
    console.log("type: ", this.type);
    console.log("Wheels: ", this.wheels);
  }
// Override toString for type conversion when required
Car.prototype.toString = function() { return `${this.vehicleName}|${this.manufacturer}|${this.type}` }

const car1 = new Car("Honda", "CR-V");
const car2 = new Car("BMW", "X5");

car1.getVehicleInfo();

Car.prototype.vehicleName = "4-wheeler-car";

// For car2 the vehicleName has changed (For car1 as well)
car2.getVehicleInfo();
// type converison from object to string - calls toString()
console.log(car2 + " ---> this called a toString() method :) ");
// valueOf tries to get value (number/string/boolean) - calls toString()
console.log(car2.valueOf() + " ---> valueOf ");
// false, true => vehicleName is prototype property, manufacturer belongs to car1 instance
console.log(car1.hasOwnProperty('vehicleName'), car1.hasOwnProperty('manufacturer'));
// true, false --> check instance of which constructor
console.log(car1 instanceof Car, {} instanceof Car);

/*------------------- delete --------------------------*/

const obj_1 = { ab: 1, cd: 2 };
delete obj_1.ab;
console.log(obj_1);

/*------------------- JSON parse and stringify -------------------*/

const obj_str = JSON.stringify({ab: 4});
const obj = JSON.parse('{"ab": 4}');




