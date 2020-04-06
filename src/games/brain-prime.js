import runBrainGames from '../index.js';
import createRandomNumber from '../numberRandomizer.js';

const isPrime = (number) => {
  let result = 0;
  for (let denom = 2; denom < number; denom += 1) {
    result = number % denom;
    if (result === 0 && number > 1) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const gameData = [];
  const roundsCount = 3;
  for (let gameRound = 0; gameRound < roundsCount; gameRound += 1) {
    const randomNumber = createRandomNumber(1, 101);
    const gameAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    gameData.push([randomNumber, gameAnswer]);
  }
  return [gameData, gameRule];
};

const runBrainPrime = () => {
  runBrainGames(getGameData);
};

export default runBrainPrime;
