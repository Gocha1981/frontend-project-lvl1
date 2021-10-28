import readlineSync from 'readline-sync';

const startGame = (desription, getGameData) => {
  const roundsCount = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(desription);

  for (let i = 0; i < roundsCount; i += 1) {
    const [randomQuestion, correctAnswer] = getGameData();
    console.log(`Question: ${randomQuestion}`);
    const yourAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === yourAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
