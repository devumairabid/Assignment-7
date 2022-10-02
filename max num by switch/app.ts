var num1:string|null=prompt("Enter first num")
var num2:string|null=prompt("Enter second num")
var num3:number=Number(num1)
var num4:number=Number(num2)
switch (num3>num4) {
    case true:
        document.write(`${num3} is max`); 
        document.write(`${num4} is min `);
        
        break;
        case false:
            document.write(`${num3} is min`)
            document.write(`${num4} is max `);
        break;


    default:
        break;
}