let number = parseInt(prompt("Enter an integer"));
let numPrime = true;

if (number === 1) {
    console.log("Error");
} else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            numPrime = false;
            break;
        }
    }

    if (numPrime) {
        console.log("Prime")
    } else {
        console.log("Composite")
    }
}


