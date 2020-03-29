import launchBrainGames from '../index.js';
import createRandomNumber from '../randomNum-generator.js';

const getExpressionValue = (firstNum, secondNum, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    case '*':
      result = firstNum * secondNum;
      break;
    default:
      break;
  }
  return result;
};
const getGameData = () => {
  const gameQuestions = [];
  const correctAnswers = [];
  const gameRule = 'What is the result of the expression?';
  for (let expressionsCount = 0; expressionsCount < 3; expressionsCount += 1) {
    const firstNumber = createRandomNumber(1, 100);
    const secondNumber = createRandomNumber(1, 100);
    const operators = ['+', '-', '*'];
    const randomOperator = operators[createRandomNumber(0, operators.length)];
    const gameAnswer = getExpressionValue(firstNumber, secondNumber, randomOperator);
    correctAnswers.push(gameAnswer);
    if (randomOperator === '+') {
      gameQuestions.push(`${firstNumber} + ${secondNumber}`);
    }
    if (randomOperator === '-') {
      gameQuestions.push(`${firstNumber} - ${secondNumber}`);
    }
    if (randomOperator === '*') {
      gameQuestions.push(`${firstNumber} * ${secondNumber}`);
    }
  }
  return [gameQuestions, correctAnswers, gameRule];
};

const gameData = getGameData();
const [questionsForUser, expressionResolves, gameRule] = [gameData[0], gameData[1], gameData[2]];
const gameEngine = launchBrainGames();
const launchBrainCalc = () => {
  gameEngine(questionsForUser, expressionResolves, gameRule);
};

export default launchBrainCalc;
