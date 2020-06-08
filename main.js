"use strict";
exports.__esModule = true;
exports.ArrayComponent = void 0;
var ArrayComponent = /** @class */ (function () {
    function ArrayComponent() {
    }
    ArrayComponent.prototype.arrayMultiply = function (myArray) {
        var temp = [], j = 0;
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 5 === 0 || myArray[i] % 10 === 0) {
                temp[j] = myArray[i];
                j++;
            }
        }
        return temp;
    };
    ArrayComponent.prototype.arraySeparate = function (myArray) {
        var str = [], j = 0;
        for (var i = 0; i < myArray.length; i++) {
            if (typeof (myArray[i]) === "string") {
                str[j] = myArray[i];
                j++;
            }
        }
        return str;
    };
    ArrayComponent.prototype.arraySplit = function (str) {
        var temp = str.split(",");
        var primeArray = [];
        var k = 0;
        for (var i = 0; i < temp.length; i++) {
            var y = +temp[i];
            for (var j = 2; j < y; j++) {
                if (y % j === 0)
                    continue;
                else {
                    primeArray[k] = y;
                    k++;
                }
            }
        }
        return primeArray;
    };
    ArrayComponent.prototype.arraySort = function (myArray) {
        myArray.sort();
        myArray.reverse();
        return myArray;
    };
    ArrayComponent.prototype.arrayReplace = function (myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 3 === 0)
                myArray[i] = 5;
        }
        return myArray;
    };
    return ArrayComponent;
}());
exports.ArrayComponent = ArrayComponent;
var myArray = [34, 45, 60, 23, 13, 25, 70];
var array = new ArrayComponent();
console.log(array.arrayMultiply(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));
