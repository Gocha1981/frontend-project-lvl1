import startGame from '../index.js';
import getRandomNumber from '../common.js';

const description = 'Find the greatest common divisor of given numbers.';

const calculate = (firstNumber, secodNumber) => {
  if (!secodNumber) {
    return firstNumber;
  }
  return calculate(secodNumber, firstNumber % secodNumber);
};

const getGameData = () => {
  const firstNumber = getRandomNumber(1);
  const secodNumber = getRandomNumber(1);
  const question = `Question: ${firstNumber} ${secodNumber}`;
  const correctAnswer = calculate(firstNumber, secodNumber).toString();
  return [question, correctAnswer];
};

const gcd = () => startGame(description, getGameData);

export default gcd;
