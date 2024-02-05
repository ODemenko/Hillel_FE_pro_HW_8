let number = parseInt(prompt("Enter an integer"));
a = 3;
res = number;

while (res % a === 0) {
    res /= a;
}

if (res === 1) {
    console.log(`This number can be obtained by raising it to the power of ${a}`);
} else {
    console.log(`This number can NOT be obtained by raising it to the power of ${a}`);
}
