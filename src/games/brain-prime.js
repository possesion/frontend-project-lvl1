import runBrainGames from '../index.js';
import createRandomNumber from '../numberRandomizer.js';

const isPrime = (number) => {
  number <= 2;
  for (let denom = 2; denom < number; denom += 1) {
    number % denom === 0;
  }
};

const getGameData = () => {
  const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const gameData = [];
  const roundsCount = 3;
  for (let gameRound = 0; gameRound < roundsCount; gameRound += 1) {
    const randomNumber = createRandomNumber(1, 101);
    const gameAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    gameData.push([randomNumber], [gameAnswer]);
  }
  return [gameData, gameRule];
};

const runBrainPrime = () => {
  runBrainGames(getGameData);
};

export default runBrainPrime;
