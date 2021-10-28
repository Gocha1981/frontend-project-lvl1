import getRandomNumber from '../common.js';
import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const even = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const getGameData = () => {
  const randomQuestion = getRandomNumber();
  const correctAnswer = even(randomQuestion) ? 'yes' : 'no';
  return [randomQuestion, correctAnswer];
};
const isEven = () => startGame(description, getGameData);

export default isEven;
