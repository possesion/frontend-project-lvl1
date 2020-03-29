import launchBrainGames from '../index.js';
import createRandomNumber from '../randomNum-generator.js';


const getRandomNumFromArr = (array) => {
  const getRandomElem = array[createRandomNumber(0, array.length)];
  return getRandomElem;
};
const getGameData = () => {
  const rule = 'What number is missing in the progression?';
  const gameQuestions = [];
  const expressionResolves = [];

  for (let gameStep = 0; gameStep < 3; gameStep += 1) {
    const randomNumber = createRandomNumber(1, 101);
    const progresionMembers = [];
    const progresionDifference = createRandomNumber(1, 11);
    for (let numbersCount = 0; numbersCount < 10; numbersCount += 1) {
      const progressionElem = randomNumber + numbersCount * progresionDifference;
      progresionMembers.push(progressionElem);
    }
    const correctAnswer = getRandomNumFromArr(progresionMembers);
    expressionResolves.push(correctAnswer);
    const progressionText = progresionMembers.join(' ');
    const showExercise = progressionText.replace(correctAnswer, '..');
    gameQuestions.push(showExercise);
  }
  return [gameQuestions, expressionResolves, rule];
};
const gameData = getGameData();
const [questionsForUser, expressionResolves, gameRule] = [gameData[0], gameData[1], gameData[2]];
const gameEngine = launchBrainGames();
const launchBrainProgression = () => {
  gameEngine(questionsForUser, expressionResolves, gameRule);
};
export default launchBrainProgression;
