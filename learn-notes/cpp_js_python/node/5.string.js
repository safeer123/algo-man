const my_str = "ABBCDEEFFGG";

console.log(my_str.startsWith("ABBC")); // true
console.log(my_str.endsWith("FG")); // false
console.log(my_str.includes("CD")); // true
console.log(my_str.indexOf("BBC")); // 1
console.log("Hi".repeat(3)); // HiHiHi
console.log("search".search('arc')); // 2

var pattern = /[A-Z]{3}-\d{3}/gi;
var text = "AB-123 DEF-234 ert-456 -34";
console.log(pattern.test(text));