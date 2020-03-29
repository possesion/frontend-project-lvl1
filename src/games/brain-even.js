import launchBrainGames from '../index.js';
import createRandomNumber from '../randomNum-generator.js';

const isEven = (num) => {
  let correctAnswer = '';
  if (num % 2 !== 1) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return correctAnswer;
};

const getGameData = () => {
  const gameRule = 'Answer "yes" if the number is isEven, otherwise answer "no".';
  const gameQuestions = [];
  const correctAnswers = [];
  for (let gameStep = 0; gameStep < 3; gameStep += 1) {
    const randomNumber = createRandomNumber(1, 101);
    const exerciseText = isEven(randomNumber);
    correctAnswers.push(exerciseText);
    gameQuestions.push(randomNumber);
  }

  return [gameQuestions, correctAnswers, gameRule];
};
const gameData = getGameData();
const [questionsForUser, expressionResolves, gameRule] = [gameData[0], gameData[1], gameData[2]];
const gameEngine = launchBrainGames();
const launchBrainEven = () => {
  gameEngine(questionsForUser, expressionResolves, gameRule);
};

export default launchBrainEven;
