var num1 = prompt("Enter first num");
var num2 = prompt("Enter second num");
var num3 = Number(num1);
var num4 = Number(num2);
switch (num3 > num4) {
    case true:
        document.write("".concat(num3, " is max"));
        document.write("".concat(num4, " is min "));
        break;
    case false:
        document.write("".concat(num3, " is min"));
        document.write("".concat(num4, " is max "));
        break;
    default:
        break;
}
