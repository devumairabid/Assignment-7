"use strict";
exports.__esModule = true;
function maxMin(n1, n2, n3) {
    var x = n1 > n2 && n1 > n3 ? n1 : "" || n2 > n1 && n2 > n3 ? n2 : "" || n3 > n1 && n3 > n2 ? n3 : "";
    console.log("".concat(x, " is max number"));
}
maxMin(10, 16, 25);
