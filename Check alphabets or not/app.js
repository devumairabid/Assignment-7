var str = "G";
var str2 = str >= 'a' && str <= 'z' || str >= 'A' && str <= 'Z' ? "alphabets" : " not alphabets";
console.log("".concat(str, " is ").concat(str2));
