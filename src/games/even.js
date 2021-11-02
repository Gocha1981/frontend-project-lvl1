import getRandomNumber from '../common.js';
import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const getGameData = () => {
  const randomQuestion = getRandomNumber();
  const correctAnswer = isEven(randomQuestion) ? 'yes' : 'no';
  return [randomQuestion, correctAnswer];
};
const even = () => startGame(description, getGameData);

export default even;
