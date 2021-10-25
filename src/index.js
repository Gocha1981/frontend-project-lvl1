import readlineSync from 'readline-sync';

const startGame = (desription, randomQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(desription);

  for (let i = 0; i < 3; i += 1) {
    const [randomQuestion, correctAnswer] = randomQuestionAnswer();
    console.log(`Question: ${randomQuestion}`);
    const yourAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === yourAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default startGame;
