import runBrainGames, { roundsCount } from '../index.js';
import createRandomNumber from '../numberRandomizer.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const getRoundData = () => {
  const question = createRandomNumber(1, 101);
  const answer = isEven(question) ? 'yes' : 'no';
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
