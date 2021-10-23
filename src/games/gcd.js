import readlineSync from 'readline-sync';

const runGcd = (randomNumber1, randomNumber2) => {
  if (!randomNumber2) {
    return randomNumber1;
  }
  return runGcd(randomNumber2, randomNumber1 % randomNumber2);
};

const gcd = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const correctAnswer = runGcd(randomNumber1, randomNumber2);
    const yourAnswer = Number(readlineSync.question('Your answer: '));
    if (yourAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.)`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default gcd;
