import runBrainGames from '../index.js';
import createRandomNumber from '../numberRandomizer.js';

const getGameData = () => {
  const gameRule = 'What number is missing in the progression?';
  const progressionSize = 10;
  const gameData = [];
  const roundsCount = 3;
  for (let gameRound = 0; gameRound < roundsCount; gameRound += 1) {
    const randomNumber = createRandomNumber(1, 101);
    const progresionMembers = [];
    const progresionDifference = createRandomNumber(1, 11);
    for (let numbersCount = 0; numbersCount < progressionSize; numbersCount += 1) {
      const progressionElem = randomNumber + numbersCount * progresionDifference;
      progresionMembers.push(progressionElem);
    }
    const correctAnswer = progresionMembers[createRandomNumber(0, progresionMembers.length)];
    const gameText = progresionMembers.join(' ');
    const question = gameText.replace(correctAnswer, '..');
    gameData.push([question, String(correctAnswer)]);
  }
  return [gameData, gameRule];
};
const runBrainProgression = () => {
  runBrainGames(getGameData);
};

export default runBrainProgression;
