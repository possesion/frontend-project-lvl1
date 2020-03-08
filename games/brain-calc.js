import readlineSync from 'readline-sync';
import braingames from '../src/index.js';


const brainCalc = (brainGame) => {
  console.log('What is the result of the expression?');
  let expressionStr = '';
  let expression;
  let result = 0;
  for (let i = 0; i < 3; i += 1) {
    const firstNum = Math.floor(Math.random() * 100) + 1;
    const secondNum = Math.floor(Math.random() * 100) + 1;
    const arrayofSigns = ['+', '-', '*'];
    const randomSign = arrayofSigns[Math.floor(Math.random() * arrayofSigns.length)];
    switch (randomSign) {
      case '+':
        expressionStr = `${firstNum} + ${secondNum}`;
        expression = firstNum + secondNum;
        break;
      case '-':
        expressionStr = `${firstNum} - ${secondNum}`;
        expression = firstNum - secondNum;
        break;
      case '*':
        expressionStr = `${firstNum} * ${secondNum}`;
        expression = firstNum * secondNum;
        break;
      default:
        expression = 55;
        break;
    }
    console.log(`Question: ${expressionStr}`);
    const correctAnswer = expression;
    const userAnswer = +readlineSync.question('Your answer: ');
    if (userAnswer !== +expression) {
      console.log(` "${userAnswer}" is wrong answer ;(. Correct answer was ${correctAnswer}.
        Let's try again, ${brainGame} !`);
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
brainCalc(userName);

export default brainCalc;
