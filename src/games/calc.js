import getRandomNumber from '../common.js';
import startGame from '../index.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
let answer;
const calculate = (firstNumber, randomOperator, secodNumber) => {
  switch (randomOperator) {
    case '+':
      answer = firstNumber + secodNumber;
      break;
    case '-':
      answer = firstNumber - secodNumber;
      break;
    case '*':
      answer = firstNumber * secodNumber;
      break;
    default:
      answer = null;
  }
  return answer;
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
