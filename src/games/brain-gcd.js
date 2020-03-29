import launchBrainGames from '../index.js';
import createRandomNumber from '../randomNum-generator.js';

const gcd = (firstNum, secondNum) => {
  if (secondNum === 0) {
    return firstNum;
  }
  return gcd(secondNum, firstNum % secondNum);
};

const getGameData = () => {
  const gameQuestions = [];
  const expressionResolves = [];
  const gameRule = 'Find the greatest common divisor of given numbers.';
  for (let gameStep = 0; gameStep < 3; gameStep += 1) {
    const firstNum = createRandomNumber(1, 101);
    const secondNum = createRandomNumber(1, 101);
    const exerciseText = `${firstNum} ${secondNum}`;
    const correctAnswer = gcd(firstNum, secondNum);
    expressionResolves.push(correctAnswer);
    gameQuestions.push(exerciseText);
  }
  return [gameQuestions, expressionResolves, gameRule];
};
const gameData = getGameData();
const [questionsForUser, expressionResolves, gameRule] = [gameData[0], gameData[1], gameData[2]];
const gameEngine = launchBrainGames();
const launchBrainGcd = () => {
  gameEngine(questionsForUser, expressionResolves, gameRule);
};

export default launchBrainGcd;
