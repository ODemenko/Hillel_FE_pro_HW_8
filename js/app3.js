let number = parseInt(prompt("Enter number:"));
let a = 1;
let b = 100;
let result = "";

for (let i = a; i <= b; i++) {
    if (i * i <= number) {
        result += i + " ";
    } else {
        break;
    }
}
alert(result);