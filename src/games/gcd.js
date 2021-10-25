import startGame from '../index.js';
import getRandomNumber from '../common.js';

const description = 'Find the greatest common divisor of given numbers.';

const calculate = (firstRandomNumber, secodRandomNumber) => {
  if (!secodRandomNumber) {
    return firstRandomNumber;
  }
  return calculate(secodRandomNumber, firstRandomNumber % secodRandomNumber);
};

const randomQuestionAnswer = () => {
  const firstRandomNumber = getRandomNumber() + 1;
  const secodRandomNumber = getRandomNumber() + 1;
  const question = `Question: ${firstRandomNumber} ${secodRandomNumber}`;
  const correctAnswer = calculate(firstRandomNumber, secodRandomNumber).toString();
  return [question, correctAnswer];
};

const gcd = () => startGame(description, randomQuestionAnswer);

export default gcd;
