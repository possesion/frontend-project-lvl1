import runBrainGames, { roundsCount } from '../index.js';
import createRandomNumber from '../numberRandomizer.js';

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
  const answer = gcd(firstNum, secondNum);
  return [question, answer];
};
const runGcd = () => {
  const gameData = [];
  for (let gameRound = 0; gameRound < roundsCount; gameRound += 1) {
    const [question, answer] = getGameData();
    gameData.push([question, String(answer)]);
  }
  return gameData;
};

export default () => {
  const gameRule = 'Find the greatest common divisor of given numbers.';
  runBrainGames(runGcd, gameRule);
};
