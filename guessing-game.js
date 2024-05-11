const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const randomInRange = (min, max) => {
    let minCeiled = Math.ceil(min);
    
    let maxFloored = Math.floor(max);

    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let secretNum = randomInRange(0, 100);


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

// console.log(randomInRange(15, 152));