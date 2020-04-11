import runBrainGames, { roundsCount } from '../index.js';
import createRandomNumber from '../numberRandomizer.js';

const calculate = (operator, firstNum, secondNum) => {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      break;
  }
  return operator;
};
const getGameData = () => {
  const firstNumber = createRandomNumber(1, 100);
  const secondNumber = createRandomNumber(1, 100);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[createRandomNumber(0, operators.length)];
  const answer = calculate(randomOperator, firstNumber, secondNumber);
  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  return [question, answer];
};

const runCalc = () => {
  const gameData = [];
  for (let gameRound = 0; gameRound < roundsCount; gameRound += 1) {
    const [question, answer] = getGameData();
    gameData.push([question, String(answer)]);
  }
  return gameData;
};

export default () => {
  const gameRule = 'What is the result of the expression?';
  runBrainGames(runCalc, gameRule);
};
