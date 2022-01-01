//------------------ How to create a module with functions -----------------

var CircleOps = (function () {
    // --- Private stuff
    return {
        // --- Public stuff
    };
})();

// ---> Example
var CircleOps = (function () {
    // --- Private stuff
    var pi = 3.1415926;
    var radSquare = function (rad) {
        return rad * rad;
    }

    // --- Public stuff
    return {
        PI: pi,
        calcArea: function (rad) {
            return pi * radSquare(rad);
        },
        calcPerimeter: function (rad) {
            return pi * 2 * rad;
        }
    };
})();

//-------> Usage
var x = 1.5;
CircleOps.PI = 2;
var area = CircleOps.calcArea(x);
var perim = CircleOps.calcPerimeter(x);
var pi = CircleOps.PI;
