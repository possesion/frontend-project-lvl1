import runBrainGames, { roundsCount } from '../index.js';
import createRandomNumber from '../numberRandomizer.js';

const isEven = (num) => num % 2 === 0;
const getGameData = () => {
  const question = createRandomNumber(1, 101);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};
const runEven = () => {
  const gameData = [];
  for (let gameRound = 0; gameRound < roundsCount; gameRound += 1) {
    const [question, answer] = getGameData();
    gameData.push([question, answer]);
  }
  return gameData;
};

export default () => {
  const gameRule = 'Answer "yes" if the number is isEven, otherwise answer "no".';
  runBrainGames(runEven, gameRule);
};
