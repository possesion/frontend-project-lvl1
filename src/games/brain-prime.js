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

const getRoundData = () => {
  const question = createRandomNumber(1, 101);
  const answer = isPrime(question) ? 'yes' : 'no';
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
