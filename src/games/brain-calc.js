import braingames from '../index.js';
import createRandomNumber from '../magicNumbers.js';

const calculate = () => {
  const expressions = [];
  const calculationResults = [];
  const gameRule = 'What is the result of the expressions?';
  const showRules = braingames(gameRule);
  for (let gameStep = 0; gameStep < 3; gameStep += 1) {
    const firstNum = createRandomNumber(101);
    const secondNum = createRandomNumber(101);
    const symbols = ['+', '-', '*'];
    const randomSign = symbols[createRandomNumber(symbols.length)];
    switch (randomSign) {
      case '+':
        calculationResults.push(firstNum + secondNum);
        break;
      case '-':
        calculationResults.push(firstNum - secondNum);
        break;
      case '*':
        calculationResults.push(firstNum * secondNum);
        break;
      default:
        break;
    }
    if (randomSign === '+') {
      expressions.push(`${firstNum} + ${secondNum}`);
    } else if (randomSign === '-') {
      expressions.push(`${firstNum} - ${secondNum}`);
    }
    expressions.push(`${firstNum} * ${secondNum}`);
    const gameLaunch = showRules(expressions[gameStep], calculationResults[gameStep], gameRule);
    if (gameLaunch === false) {
      return;
    }
  }
};


export default calculate;
