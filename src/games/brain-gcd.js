import runBrainGames from '../index.js';
import createRandomNumber from '../numberRandomizer.js';

const gcd = (firstNum, secondNum) => {
  if (secondNum === 0) {
    return firstNum;
  }
  return gcd(secondNum, firstNum % secondNum);
};

const getGameData = () => {
  const gameData = [];
  const roundsCount = 3;
  const gameRule = 'Find the greatest common divisor of given numbers.';
  for (let gameRound = 0; gameRound < roundsCount; gameRound += 1) {
    const firstNum = createRandomNumber(1, 101);
    const secondNum = createRandomNumber(1, 101);
    const gameText = `${firstNum} ${secondNum}`;
    const answer = gcd(firstNum, secondNum);
    gameData.push([gameText], [String(answer)]);
  }
  return [gameData, gameRule];
};

const runBrainGcd = () => {
  runBrainGames(getGameData);
};

export default runBrainGcd;
