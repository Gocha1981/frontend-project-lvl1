import getRandomNumber from '../common.js';
import startGame from '../index.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (firstRandomNumber, randomOperator, secodRandomNumber) => {
  let answer;
  switch (randomOperator) {
    case '+':
      answer = firstRandomNumber + secodRandomNumber;
      break;
    case '-':
      answer = firstRandomNumber - secodRandomNumber;
      break;
    case '*':
      answer = firstRandomNumber * secodRandomNumber;
      break;
    default:
      answer = null;
  }
  return answer;
};

const randomQuestionAnswer = () => {
  const firstRandomNumber = getRandomNumber();
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const secodRandomNumber = getRandomNumber();
  const randomQuestion = `${firstRandomNumber} ${randomOperator} ${secodRandomNumber}`;
  const correctAnswer = calculate(firstRandomNumber, randomOperator, secodRandomNumber).toString();
  return [randomQuestion, correctAnswer];
};

const calculator = () => startGame(description, randomQuestionAnswer);

export default calculator;
