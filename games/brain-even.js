import readlineSync from 'readline-sync';
import braingames from '../src/index.js';


const brainEven = (user) => {
  let result = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 21) + 1;
    const even = randomNumber % 2 === 0;
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = (even && userAnswer === 'yes') || (!even && userAnswer === 'no');
    if (!userAnswer === correctAnswer) {
      console.log(` "${userAnswer}" is wrong answer ;(. Correct answer was ${even ? 'yes' : 'no'}.
        Let's try again, ${user}!`);
      break;
    }
    console.log('Correct!');
    result += 1;
  }
  if (result === 3) {
    console.log(`Congratulations, ${user}! `);
  }
};

const userName = braingames();
brainEven(userName);

export default brainEven;
