import readlineSync from 'readline-sync';
import braingames from '../src/index.js';

// greetings();
const brainEven = () => {
  const expression = [];
  const task = [];
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 21) + 1;
    const even = randomNumber % 2 !== 1;
    task.push(randomNumber);
    if (even) {
      expression.push('yes');
    }
    if (!even) {
      expression.push('no');
    }
  }
  return [task, expression];
};

export default brainEven;
