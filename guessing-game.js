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

let secretNum;;


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

const askRange = min => {
    rl.question("Enter a max number: ", max => {
        console.log(`I'm thinking of a number between ${min} & ${max}...`)
        secretNum = randomInRange (Number(min), Number(max));
        rl.question("Enter a guess: ", askGuess)
    })
}


rl.question("Enter a min number: ", askRange)
// console.log(randomInRange(15, 152));