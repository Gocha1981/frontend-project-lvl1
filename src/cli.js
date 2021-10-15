import readlineSync from 'readline-sync';

const startGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
   // console.log('May I have your name? ')
    console.log('Hello, ' + name + '!')
}
export default startGame;
console.log(startGame);