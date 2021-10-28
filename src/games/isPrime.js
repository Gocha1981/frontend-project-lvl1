import getRandomNumber from '../common.js';
import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const calculate = (number) => {
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
  const firstRandomNumber = getRandomNumber();
  const randomQuestion = firstRandomNumber;
  const answer = calculate(firstRandomNumber);
  const correctAnswer = answer ? 'yes' : 'no';
  return [randomQuestion, correctAnswer];
};

const isPrime = () => startGame(description, getGameData);

export default isPrime;
