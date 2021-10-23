import readlineSync from 'readline-sync';

const getrandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1) + min);

const isPrimes = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const isPrime = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getrandomNumber();
    console.log(`Question: ${number}`);
    const answer = isPrimes(number) ? 'yes' : 'no';
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
export default isPrime;
