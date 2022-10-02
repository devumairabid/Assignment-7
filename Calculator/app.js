var num1 = prompt("Enter first num");
var num2 = Number(num1);
var num3 = prompt("Enter operator");
var num5 = prompt("Enter second num");
var num6 = Number(num5);
switch (num3) {
    case "+":
        document.write("".concat(num2 + num6, "  "));
        break;
    case "-":
        document.write("".concat(num2 - num6, " "));
        break;
    case "*":
        document.write("".concat(num2 * num6, " "));
        break;
    case "/":
        document.write("".concat(num2 / num6, " "));
        break;
    default:
        console.log("Invalid");
        break;
}
