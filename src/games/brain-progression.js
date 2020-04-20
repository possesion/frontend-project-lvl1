import runBrainGames, { roundsCount } from '../index.js';
import createRandomNumber from '../numberRandomizer.js';

const description = 'What number is missing in the progression?';
const progressionSize = 10;
const buildProgression = (firstElement, difference) => {
  const members = [];
  for (let i = 0; i < progressionSize; i += 1) {
    const element = firstElement + i * difference;
    members.push(element);
  }
  return members;
};

const getRoundData = () => {
  const randomIndex = createRandomNumber(0, progressionSize - 1);
  const firstElement = createRandomNumber(1, 101);
  const difference = createRandomNumber(1, 11);
  const progression = buildProgression(firstElement, difference);
  const answer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');
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
