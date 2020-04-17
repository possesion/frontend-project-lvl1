import runBrainGames, { roundsCount } from '../index.js';
import createRandomNumber from '../numberRandomizer.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const getGameData = () => {
  const question = createRandomNumber(1, 101);
  const answer = isEven(question) ? 'yes' : 'no';
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
