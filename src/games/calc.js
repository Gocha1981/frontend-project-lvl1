import readlineSync from 'readline-sync';

const calculator = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  const operators = ['+', '-', '*'];
  const operator = operators.length;
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomOperator = operators[Math.floor(Math.random() * operator)];
    const randomNumber2 = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    let answer = 0;
    switch (randomOperator) {
      case ('+'):
        answer = (randomNumber1 + randomNumber2);
        break;
      case ('-'):
        answer = (randomNumber1 - randomNumber2);
        break;
      case ('*'):
        answer = (randomNumber1 * randomNumber2);
        break;
      default:
    }
    if (Number(yourAnswer) === answer) {
      console.log('Correct!');
    } else {
      console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${answer}.)`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default calculator;
