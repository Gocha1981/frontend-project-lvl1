import readlineSync from 'readline-sync';

const getrandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1) + min);
let result;
const isPrimes = (number) => {
    if (number < 2) {
        return result = false;
    }
    for (let i = 2; i <= Math.sqrt(number); i += 1) {
        if (number % i === 0) {
            return result = false;
        }
    }
    return result = true;
}
export const isPrime = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}`);
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        let answer = '';
        const number = getrandomNumber();
        console.log(`Question: ${number}`);
        isPrimes(number);
        result ? answer = 'yes' : answer = 'no';
        const yourAnswer = readlineSync.question('Your answer: ');

        if (answer === yourAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
            return console.log(`Let's try again, ${name}!`);
        }
    }
    return console.log(`Congratulations, ${name}!`);
};