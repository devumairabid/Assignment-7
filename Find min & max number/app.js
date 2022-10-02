"use strict";
// var age:number=20;
// if(age>=18){
//     console.log("Yes can drive");
exports.__esModule = true;
function maxMin(n1, n2) {
    var min = n1 > n2 ? n2 : n1;
    var max = n1 > n2 ? n1 : n2;
    console.log(max, "max", min, "min");
}
maxMin(10, 15);
