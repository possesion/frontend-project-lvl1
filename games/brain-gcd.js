import readlineSync from 'readline-sync';
import braingames from '../src/index.js';


const brainGcd = () => {
  function gcd(firstNum, secondNum) {
    if (secondNum > firstNum) {
      return gcd(secondNum, firstNum);
    }
    if (!secondNum) {
      return firstNum;
    }
    return gcd(secondNum, firstNum % secondNum);
  }
  const arr = [];
  const task = [];
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const firstNum = Math.floor(Math.random() * 100) + 1;
    const secondNum = Math.floor(Math.random() * 100) + 1;
    task.push(gcd(firstNum, secondNum));
    arr.push(`${firstNum} ${secondNum}`);
  }
  return [arr, task];
};

const game = brainGcd();
braingames(game);

export default brainGcd;
