import readlineSync from 'readline-sync';
const getrandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const progression = (start, step, length) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}`);
    console.log('What number is missing in the progression?');

    for (let j = 0; j < 3; j += 1) {
        const question = [];
        const numbers = getrandomNumber(0, 100);
        const numbersLength = (getrandomNumber(5, 9));
        const stepLength = getrandomNumber(1, 100);
        const hiddenNumber = getrandomNumber(0, numbersLength);

        for (let i = 1; i <= numbersLength; i += 1) {
            question.push(numbers + stepLength * i);
        }

        const hiddenNumber2 = question.splice([hiddenNumber - 1], 1, '..')
        const newQ = question.join(" ")
 
        console.log(`question: ${newQ} `);
        const answer = readlineSync.question(`Your answer: `);

        if (answer == hiddenNumber2) {
            console.log(`Correct!`);
            continue;
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${hiddenNumber2}'.`);
            return console.log(`Let's try again, ${name}!`);
        }
    }
    return console.log(`Congratulations, ${name}!`);
}