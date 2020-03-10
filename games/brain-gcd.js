import readlineSync from 'readline-sync';
import { braingames, gameEngine } from '../src/index.js';

function gcd(firstNum, secondNum) {
  if (secondNum > firstNum) {
    return gcd(secondNum, firstNum);
  }
  if (!secondNum) {
    return firstNum;
  }
  return gcd(secondNum, firstNum % secondNum);
}

const brainGcd = (userName) => {
  let result = 0;
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const firstNum = Math.floor(Math.random() * 100) + 1;
    const secondNum = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${firstNum} ${secondNum}`);
    const userAnswer = +readlineSync.question('Your answer: ');
    const correctAnswer = gcd(firstNum, secondNum);
    if (userAnswer !== correctAnswer) {
      console.log(` "${userAnswer}" is wrong answer ;(. Correct answer was ${correctAnswer}.
      Let's try again, ${userName}!`);
      break;
    }
    console.log('Correct!');
    result += 1;
  }
  if (result === 3) {
    console.log(`Congratulations, ${userName}! `);
  }
};

const userName = braingames();
brainGcd(userName);

export default brainGcd;
