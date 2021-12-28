/*
What’s the difference between undefined and null? #
Variables are only stored as undefined if they have been declared 
but not instantiated with a value.
Null values intentionally are stored as null to indicate that the variable is empty. 
You should set a variable equal to null if and only if the variable is 
expected to have no value.
*/

console.log([1,2,3].toString()); // 1,2,3

//============ Arrays add/remove items ===============================================
const fruitBasket = ['apple','banana','orange'];
// get the length of the Array
console.log(fruitBasket.length);
// 3

// add a new value at the end of the array
fruitBasket.push('pear')
console.log(fruitBasket);
// ["apple", "banana", "orange", "pear"]

// add a new value at the beginning of the array
fruitBasket.unshift('melon')
console.log(fruitBasket);
// ["melon", "apple", "banana", "orange", "pear"]

// remove a value from the end of the array
fruitBasket.pop()
console.log(fruitBasket);
// ["melon", "apple", "banana", "orange"]

// remove a value from the beginning of the array
fruitBasket.shift()
console.log(fruitBasket);
// ["apple", "banana", "orange"]




