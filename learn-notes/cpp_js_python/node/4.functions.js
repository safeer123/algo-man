/*----------------- function and arrow function -------*/
const ab = {
    count: 1,
    plus: function () { this.count += 1 }, // this is ab
    plus2: () => { this.count += 1 } // this is window object
}
ab.plus(); console.log(ab.count); // increments
ab.plus2(); console.log(ab.count); // doesn't increment



/*--------------- call, apply, bind ------------------*/
{
    function foo(arg1) {
        console.log("abc --> ", this.abc);
        console.log("arg1 --> ", arg1);
    }
}
{

    foo(); // accessible outside - it has function scope

    const obj = { abc: 5 };
    foo.apply(obj, [2]); // this object and argument array, calls now
    foo.call(obj, 2); // this object and arguments, calls now
    const f = foo.bind(obj); // binds this object, returns new function object
    f(2); // calls now with arguments
}

/*----------------- default arguments --------------------*/
function foo2({ b = 4, c = 5 } = {}, a = 1) {
    console.log(a, b, c);
}
foo2(); // 1 4 5
foo2({ c: 2 }); // 1 4 2
foo2({}); // 1 4 5

/*---------------------- closure --------------------- */
// Functions that have access to variables 
// from other function’s scopes are called closures.
// functions with no names are anonymous function

function createOp() {
    const kind = "add";
    // following return function has access to kind variable
    // even after the function is called
    // Note: usually, this varibales are supposed to get destroyed after the function call
    return function (a, b) {
        if (kind == "add") {
            return a + b;
        }
        else if (kind == "subtract") {
            return a - b;
        }
    }
}
// the function returned from createOp is an anonymous function, and a closure, too

/*------------------- this --------------------------------------------*/

const Car = function (manuf, type) {
    this.manufacturer = manuf;
    this.type = type;
}

// Here 'this' is bound at run time, depends on where it is called

//----- CASE-1
Car("Honda", "FR-V"); // this --> window (browser) or globalThis in nodeJS
console.log(globalThis.manufacturer, globalThis.type);

//----- CASE-2
const cr = new Car("Honda", "FR-V"); // used function as constructor,
// here this --> newly created object
console.log(cr.manufacturer, cr.type);

//----- CASE-3
const carObj = {
    manufacturer: "",
    type: "",
    car: Car,
}
carObj.car("Honda", "FR-V"); // here this --> parent object
console.log(carObj.manufacturer, carObj.type);

//--------------- See Example-1
type = "Mercedes"; // global

var myCar = {
    type: "BMW",

    getType: function () {
        return this.type; // this -> myCar
    },

    getTypeFuncion: function () {
        return function () {
            return this.type; // this -> global object
        }
    },

    getTypeFuncion_Fixed: function () {
        const thisParent = this;
        return function () {
            return thisParent.type; // this -> global object
        }
    }
};
console.log(myCar.getType()); // BMW
console.log(myCar.getTypeFuncion()()); // Mercedes
console.log(myCar.getTypeFuncion_Fixed()()); // BMW (Fixed it ! Hurrayyyy )

//------------------ See Example-2
function giveMeFunctions() {
    var functions = [];
    for (var i = 0; i < 3; i++) {
        functions[i] = function () {
            return i * i;
        }
    }
    return functions;
}
var myFunctions = giveMeFunctions();
for (var i = 0; i < myFunctions.length; i++) {
    console.log(i + ": " + myFunctions[i]());
}
/* result
0: 9
1: 9
2: 9
the closure functions are accessing i when they execute, not when they were defined
We can fix this as below
*/

function giveMeFunctions_fixed() {
    var functions = [];
    for (var i = 0; i < 3; i++) {
        functions[i] = function (arg) {
            return function () {
                return arg * arg;
            }
        }(i);
    }
    return functions;
}