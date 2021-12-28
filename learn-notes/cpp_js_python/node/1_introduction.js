//============= Learning JavaScript

/*
-> JavaScript is a programming language created by Brendan Eich in 1995 
-> enables interactive web pages

-> We can write JS code in <script> tag in HTML or reference a file
-> Referencing a file is better => browser can cache the JS file for later
*/

console.log('JS working');

// ========= Primitives (Types other than object) ======
/*
string
number
boolean
null
undefined
symbol
*/

console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof []); // object
console.log(typeof '12'); // string
console.log(typeof function(){}); // function

//============ Copying objects ====================================
// Objects are copied by reference
let car = { color: 'red' };
let car2 = car;
car2.color = 'green';
console.log(car.color); // green

//============ Quick way to clone objects =========================
const secondCar = Object.assign({}, car);

//============ Var Let and Const ===========================
{
    var function_scope = 1; // function scope
    let block_scope = 2; // block scope
    const const_var = 3; // cant re-assign, block scope
}
console.log(typeof function_scope, typeof block_scope);
// function_scope is available here
// block_scope and const_var not available here
