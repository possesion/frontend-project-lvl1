import readlineSync from 'readline-sync';
import braingames from '../src/index.js';

// greetings();
const brainEven = () => {
  const arr = [];
  const task = [];
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 21) + 1;
    const even = randomNumber % 2 !== 1;
    arr.push(randomNumber);
    if (even) {
      task.push('yes');
    }
    if (!even) {
      task.push('no');
    }
  }
  return [arr, task];
};

// const game = brainEven();
braingames(brainEven());

export default brainEven;
