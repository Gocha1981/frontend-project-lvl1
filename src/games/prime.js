import getRandomNumber from '../common.js';
import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
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
const getGameData = () => {
  const randomNumber = getRandomNumber();
  const randomQuestion = randomNumber;
  const answer = isPrime(randomNumber);
  const correctAnswer = answer ? 'yes' : 'no';
  return [randomQuestion, correctAnswer];
};

const prime = () => startGame(description, getGameData);

export default prime;
