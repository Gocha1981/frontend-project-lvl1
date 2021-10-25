import getRandomNumber from '../common.js';
import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const calculate = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const randomQuestionAnswer = () => {
  const randomQuestion = getRandomNumber();
  const correctAnswer = calculate(randomQuestion) ? 'yes' : 'no';
  return [randomQuestion, correctAnswer];
};
const isEven = () => startGame(description, randomQuestionAnswer);

export default isEven;
