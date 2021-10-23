import readlineSync from 'readline-sync';

const getrandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const progression = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  for (let j = 0; j < 3; j += 1) {
    const question = [];
    const numbers = getrandomNumber(0, 100);
    const numbersLength = (getrandomNumber(5, 10));
    const stepLength = getrandomNumber(1, 100);
    const hiddenNumber = getrandomNumber(0, numbersLength);

    for (let i = 1; i <= numbersLength; i += 1) {
      question.push(numbers + stepLength * i);
    }

    const hiddenNumber2 = question.splice([hiddenNumber - 1], 1, '..');
    const hiddenNumber3 = hiddenNumber2[0];
    const newQ = question.join(' ');

    console.log(`Question: ${newQ}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === hiddenNumber3) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${hiddenNumber2}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default progression;
