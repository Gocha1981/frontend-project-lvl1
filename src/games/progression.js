import getRandomNumber from '../common.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (randomNumber, stepLength, numbersLength) => {
  const answer = [];
  for (let i = 1; i <= numbersLength; i += 1) {
    answer.push(randomNumber + stepLength * i);
  }
  return answer;
};
const getGameData = () => {
  const randomNumber = getRandomNumber(0, 100);
  const numbersLength = getRandomNumber(5, 10);
  const stepLength = getRandomNumber(1, 100);
  const hiddenNumber = getRandomNumber(1, numbersLength);

  const progression = getProgression(randomNumber, stepLength, numbersLength);

  const correctAnswer = progression[hiddenNumber].toString();
  progression[hiddenNumber] = '..';
  const randomQuestion = progression.join(' ');

  return [randomQuestion, correctAnswer];
};
const progression = () => startGame(description, getGameData);

export default progression;
