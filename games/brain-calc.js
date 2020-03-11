import readlineSync from 'readline-sync';
import braingames from '../src/index.js';


const brainCalc = () => {
  console.log('What is the result of the expression?');
  const task = [];
  const expression = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNum = Math.floor(Math.random() * 100) + 1;
    const secondNum = Math.floor(Math.random() * 100) + 1;
    const expressionayofSigns = ['+', '-', '*'];
    const randomSign = expressionayofSigns[Math.floor(Math.random() * expressionayofSigns.length)];
    switch (randomSign) {
      case '+':
        task.push(`${firstNum} + ${secondNum}`);
        expression.push(firstNum + secondNum);
        break;
      case '-':
        task.push(`${firstNum} - ${secondNum}`);
        expression.push(firstNum - secondNum);
        break;
      case '*':
        task.push(`${firstNum} * ${secondNum}`);
        expression.push(firstNum * secondNum);
        break;
      default:
        console.log('error');
        break;
    }
  }
  return [task, expression];
};

export default brainCalc;
