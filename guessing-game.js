const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let secretNum = 5;

const checkGuess = num => {
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

const askGuess = respond => {
    let isTrue = checkGuess(Number(respond))

    if (isTrue) {
        console.log(`You win!`);
        rl.close()
    }

    else {
        rl.question("Enter a guess: ", askGuess);
    }
}

rl.question("Enter a guess: ", askGuess)
