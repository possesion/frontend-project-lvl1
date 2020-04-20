import runBrainGames, { roundsCount } from '../index.js';
import createRandomNumber from '../numberRandomizer.js';

const description = 'What is the result of the expression?';
const calculate = (operator, firstNum, secondNum) => {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      throw new Error(`wrong operator ${operator}`);
  }
};
const getRoundData = () => {
  const firstNumber = createRandomNumber(1, 100);
  const secondNumber = createRandomNumber(1, 100);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[createRandomNumber(0, operators.length)];
  const answer = String(calculate(randomOperator, firstNumber, secondNumber));
  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  return [question, answer];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const data = getRoundData();
    rounds.push(data);
  }
  runBrainGames(rounds, description);
};
