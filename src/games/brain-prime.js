import runBrainGames, { roundsCount } from '../index.js';
import createRandomNumber from '../numberRandomizer.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let denom = 2; denom <= number / 2; denom += 1) {
    if (number % denom === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const question = createRandomNumber(1, 101);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  const rounds = [];
  for (let gameRound = 0; gameRound < roundsCount; gameRound += 1) {
    const [question, answer] = getGameData();
    rounds.push([question, answer]);
  }
  runBrainGames(rounds, description);
};
