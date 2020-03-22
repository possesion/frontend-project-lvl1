import braingames from '../index.js';
import createRandomNumber from '../magicNumbers.js';

const brainProgression = () => {
  const gameRule = 'What number is missing in the progression?';
  const theProgressionGame = braingames(gameRule);
  for (let gameLap = 0; gameLap < 3; gameLap += 1) {
    const randomNumber = createRandomNumber(101);
    const progresionMembers = [];
    const progresionDifference = createRandomNumber(11);
    for (let progressionIndex = 1; progressionIndex < 11; progressionIndex += 1) {
      const progressionElem = randomNumber + progressionIndex * progresionDifference;
      progresionMembers.push(progressionElem);
    }
    const correctAnswer = progresionMembers[createRandomNumber(progresionMembers.length)];
    const progressionText = progresionMembers.join(' ');
    const showExercise = progressionText.replace(correctAnswer, '..');
    const gameLaunch = theProgressionGame(showExercise, correctAnswer);
    if (gameLaunch === false) {
      return;
    }
  }
};

export default brainProgression;
