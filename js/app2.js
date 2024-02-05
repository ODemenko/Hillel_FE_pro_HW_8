let exchRate = 27;

for (let dolUsa = 10; dolUsa <= 100; dolUsa += 10) {
    let result = dolUsa * exchRate;
    console.log(`The ${dolUsa} dollars USA cost ${result} hryvnias`);
}