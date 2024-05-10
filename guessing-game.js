const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let secretNum = 5;

const guessCheck = num => {
    if (num < secretNum) {
        console.log(`Too low!`);
        return false;
    }

    if (num > secretNum) {
        console.log(`Too high!`)
        return false
    }

    if (num === secretNum) {
        console.log(`Correct!`);
        return true
    };
};

console.log(guessCheck(6));
console.log(guessCheck(4));
console.log(guessCheck(5));
