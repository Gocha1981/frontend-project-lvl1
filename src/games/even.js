import readlineSync from 'readline-sync';


export const even = () => {
    
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!')
    const randomNumber = () => Math.floor(Math.random() * 100);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        const questionRandomNumber = randomNumber();
        console.log('Question: ' + questionRandomNumber);
        const answer = readlineSync.question('Your answer: ');
        if (questionRandomNumber% 2 === 0) {
            if (answer === 'yes') {
                console.log('Correct!');
            } else {
                console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.)`);
                return console.log(`Let's try again, ${name}!`);
            }
        }
        if (questionRandomNumber % 2 !== 0) {
            if (answer === 'no') {
                console.log('Correct!');
            } else {
                console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
                return console.log(`Let's try again, ${name}!`);
            }
        }
    }
    return console.log(`Congratulations, ${name}!`);
};