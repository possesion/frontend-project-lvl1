import readlineSync from 'readline-sync';
import braingames from '../src/index.js';


const brainCalc = (brainGame) => {
  console.log('What is the result of the expression?');
  let result = 0;
  for (let i = 0; i < 3; i += 1) {
    const firstNum = Math.floor(Math.random() * 100) + 1;
    const secondNum = Math.floor(Math.random() * 100) + 1;
    const calculate = [`${firstNum} + ${secondNum}`, `${firstNum} - ${secondNum}`, `${firstNum} * ${secondNum}`];
    const randomExpression = calculate[Math.floor(Math.random() * calculate.length)];
    console.log(`Question: ${randomExpression}`);
    const correctAnswer = eval(randomExpression);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) !== correctAnswer) {
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
