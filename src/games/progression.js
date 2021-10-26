import getRandomNumber from '../common.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';

const calculate = (firstRandomNumber, stepLength, numbersLength) => {
  const answer = [];
  for (let i = 1; i <= numbersLength; i += 1) {
    answer.push(firstRandomNumber + stepLength * i);
  }
  return answer;
};
const randomQuestionAnswer = () => {
  const firstRandomNumber = getRandomNumber(0, 100);
  const numbersLength = getRandomNumber(5, 10);
  const stepLength = getRandomNumber(1, 100);
  const hiddenRandomNumber = getRandomNumber(0, numbersLength);

  const expression = calculate(firstRandomNumber, stepLength, numbersLength);
  const hiddenNumber = expression.splice([hiddenRandomNumber - 1], 1, '..');
  const randomQuestion = expression.join(' ');
  const correctAnswer = hiddenNumber[0];
  return [randomQuestion, correctAnswer.toString()];
};
const progression = () => startGame(description, randomQuestionAnswer);

export default progression;
