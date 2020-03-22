import braingames from '../index.js';
import createRandomNumber from '../magicNumbers.js';

const getGcd = () => {
  const gcd = (firstNum, secondNum) => {
    if (secondNum === 0) {
      return firstNum;
    }
    return gcd(secondNum, firstNum % secondNum);
  };
  const gameRule = 'Find the greatest common divisor of given numbers.';
  const showRules = braingames(gameRule);
  for (let gameStep = 0; gameStep < 3; gameStep += 1) {
    const firstNum = createRandomNumber(101);
    const secondNum = createRandomNumber(101);
    const exerciseText = `${firstNum} ${secondNum}`;
    const correctAnswer = gcd(firstNum, secondNum);
    const gameLaunch = showRules(exerciseText, correctAnswer);
    if (gameLaunch === false) {
      return;
    }
  }
};

export default getGcd;
