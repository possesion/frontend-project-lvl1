import runBrainGames from '../index.js';
import createRandomNumber from '../numberRandomizer.js';

const isEven = (num) => {
  num % 2 === 0;
};

const getGameData = () => {
  const gameRule = 'Answer "yes" if the number is isEven, otherwise answer "no".';
  const gameData = [];
  const roundsCount = 3;
  for (let gameRound = 0; gameRound < roundsCount; gameRound += 1) {
    const randomNumber = createRandomNumber(1, 101);
    const answer = isEven(randomNumber) ? 'yes' : 'no';
    gameData.push([randomNumber, answer]);
  }
  return [gameData, gameRule];
};

const runBrainEven = () => {
  runBrainGames(getGameData);
};

export default runBrainEven;
