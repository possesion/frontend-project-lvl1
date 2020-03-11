import readlineSync from 'readline-sync';
import braingames from '../src/index.js';

const brainPrime = (user) => {
  const expression = [];
  const task = [];
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    let step = 2;
    const randomNumber = Math.floor(Math.random() * 100) + 2;
    task.push(randomNumber);
    while (randomNumber % step !== 0) {
      step += 1;
    }
    if (randomNumber === step) {
      expression.push('yes');
    }
    if (randomNumber !== step) {
      expression.push('no');
    }
  }
  return [task, expression];
};


export default brainPrime;
