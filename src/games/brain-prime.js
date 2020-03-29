import launchBrainGames from '../index.js';
import createRandomNumber from '../randomNum-generator.js';

const isPrime = (number) => {
  let correctAnswer = 'yes';
  if (number <= 2) {
    correctAnswer = 'no';
  }
  for (let denom = 2; denom < number; denom += 1) {
    if (number % denom === 0) {
      correctAnswer = 'no';
    }
  }
  return correctAnswer;
};

const getGameData = () => {
  const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const gameQuestions = [];
  const correctAnswers = [];
  for (let gameStep = 0; gameStep < 3; gameStep += 1) {
    const randomNumber = createRandomNumber(1, 101);
    const gameSolution = isPrime(randomNumber);
    gameQuestions.push(randomNumber);
    correctAnswers.push(gameSolution);
  }
  return [gameQuestions, correctAnswers, gameRule];
};
const gameData = getGameData();
const [questionsForUser, expressionResolves, gameRule] = [gameData[0], gameData[1], gameData[2]];
const gameEngine = launchBrainGames();
const launchBrainPrime = () => {
  gameEngine(questionsForUser, expressionResolves, gameRule);
};

export default launchBrainPrime;
