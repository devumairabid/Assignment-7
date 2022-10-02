var num1: string | null = prompt("Enter first num")
var num2: number = Number(num1)
var num3: string | null = prompt("Enter operator")
var num5: string | null = prompt("Enter second num")
var num6: number = Number(num5)
switch (num3) {
    case "+":

        document.write(`${num2 + num6}  `);

        break;
    case "-":
        document.write(`${num2 - num6} `);

        break;
    case "*":
        document.write(`${num2 * num6} `);

        break;
    case "/":
        document.write(`${num2 / num6} `);

        break;

    default:
        console.log("Invalid");

        break;
}