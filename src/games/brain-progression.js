import runBrainGames, { roundsCount } from '../index.js';
import createRandomNumber from '../numberRandomizer.js';

const description = 'What number is missing in the progression?';
const progressionSize = 10;
const getQuestion = (firstElement, difference, index) => {
  const members = [];
  for (let numbersCount = 0; numbersCount < progressionSize; numbersCount += 1) {
    const element = firstElement + numbersCount * difference;
    members.push(element);
  }
  const answer = members[index];
  members[index] = '..';
  const question = members.join(' ');
  return [question, answer];
};

const getGameData = () => {
  const randomIndex = createRandomNumber(0, progressionSize - 1);
  const firstElement = createRandomNumber(1, 101);
  const difference = createRandomNumber(1, 11);
  const [question, answer] = getQuestion(firstElement, difference, randomIndex);
  return [question, answer];
};

export default () => {
  const rounds = [];
  for (let gameRound = 0; gameRound < roundsCount; gameRound += 1) {
    const [question, answer] = getGameData();
    rounds.push([question, String(answer)]);
  }
  runBrainGames(rounds, description);
};
