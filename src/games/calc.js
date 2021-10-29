import getRandomNumber from '../common.js';
import startGame from '../index.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (firstNumber, randomOperator, secodNumber) => {
  let result;
  switch (randomOperator) {
    case '+':
      result = firstNumber + secodNumber;
      break;
    case '-':
      result = firstNumber - secodNumber;
      break;
    case '*':
      result = firstNumber * secodNumber;
      break;
    default:
      result = null;
  }
  return result;
};

const getGameData = () => {
  const firstNumber = getRandomNumber();
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const secodNumber = getRandomNumber();
  const randomQuestion = `${firstNumber} ${randomOperator} ${secodNumber}`;
  const correctAnswer = calculate(firstNumber, randomOperator, secodNumber).toString();
  return [randomQuestion, correctAnswer];
};

const calculator = () => startGame(description, getGameData);

export default calculator;
