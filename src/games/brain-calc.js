import runBrainGames from '../index.js';
import createRandomNumber from '../numberRandomizer.js';

const calculate = (operator, firstNum, secondNum) => {
  switch (operator) {
    case '+':
      firstNum + secondNum;
      break;
    case '-':
      firstNum - secondNum;
      break;
    case '*':
      firstNum * secondNum;
      break;
    default:
      break;
  }
  return;
};
const getGameData = () => {
  const gameData = [];
  const roundsCount = 3;
  const gameRule = 'What is the result of the expression?';
  for (let gameRound = 0; gameRound < roundsCount; gameRound += 1) {
    const firstNumber = createRandomNumber(1, 100);
    const secondNumber = createRandomNumber(1, 100);
    const operators = ['+', '-', '*'];
    const randomOperator = operators[createRandomNumber(0, operators.length)];
    const gameAnswer = calculate(randomOperator, firstNumber, secondNumber);
    const gameText = `${firstNumber} ${randomOperator} ${secondNumber}`;
    gameData.push([gameText], [String(gameAnswer)]);
  return [gameData, gameRule];
  }
};

const runBrainCalc = () => {
  runBrainGames(getGameData);
};

export default runBrainCalc;
