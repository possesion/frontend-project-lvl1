import readlineSync from 'readline-sync';
import braingames from '../src/index.js';


const brainCalc = () => {
  console.log('What is the result of the expression?');
  const task = [];
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNum = Math.floor(Math.random() * 100) + 1;
    const secondNum = Math.floor(Math.random() * 100) + 1;
    const arrayofSigns = ['+', '-', '*'];
    const randomSign = arrayofSigns[Math.floor(Math.random() * arrayofSigns.length)];
    switch (randomSign) {
      case '+':
        arr.push(`${firstNum} + ${secondNum}`);
        task.push(firstNum + secondNum);
        break;
      case '-':
        arr.push(`${firstNum} - ${secondNum}`);
        task.push(firstNum - secondNum);
        break;
      case '*':
        arr.push(`${firstNum} * ${secondNum}`);
        task.push(firstNum * secondNum);
        break;
      default:
        console.log('error');
        break;
    }
  }
  return [arr, task];
};

const game = brainCalc();
braingames(game);

export default brainCalc;
