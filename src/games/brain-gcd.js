import runBrainGames, { roundsCount } from '../index.js';
import createRandomNumber from '../numberRandomizer.js';

const description = 'Find the greatest common divisor of given numbers.';
const gcd = (firstNum, secondNum) => {
  if (secondNum === 0) {
    return firstNum;
  }
  return gcd(secondNum, firstNum % secondNum);
};

const getGameData = () => {
  const firstNum = createRandomNumber(1, 101);
  const secondNum = createRandomNumber(1, 101);
  const question = `${firstNum} ${secondNum}`;
  const answer = String(gcd(firstNum, secondNum));
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
