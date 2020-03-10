import readlineSync from 'readline-sync';
import { gameEngine, braingames } from '../src/index.js';



console.log('What number is missing in the progression?');
const brainProgression = (brainGame) => {
  let result = 0;
  
  for (let i = 0; i < 3; i += 1) {
    const arrayofNumbers = [];
    const step = Math.floor(Math.random() * 10) + 1;
    let firstProgressionNumber = Math.floor(Math.random() * 100) + 1;
    for (let a = 0; a < 11; a += 1) {
      firstProgressionNumber += step;
      arrayofNumbers.push(firstProgressionNumber);
    }
    const correctAnswer = arrayofNumbers[Math.floor(Math.random() * arrayofNumbers.length)];
    const strFromArray = arrayofNumbers.join(' ');
    const replacedSymbol = strFromArray.replace(correctAnswer, '..');
    console.log(`Question: ${replacedSymbol} `);
    const userAnswer = +readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(` "${userAnswer}" is wrong answer ;(. Correct answer was ${correctAnswer}.
      Let's try again, ${brainGame}!`);
      break;
    }
    console.log('Correct!');
    result += 1;
  }
  if (result === 3) {
    console.log(`Congratulations, ${brainGame}! `);
  }
};

const userName = braingames();
brainProgression(userName);


export default brainProgression;
