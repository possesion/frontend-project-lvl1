import braingames from '../index.js';
import createRandomNumber from '../magicNumbers.js';

const checkPrime = () => {
  let correctAnswer;
  const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const showRules = braingames(gameRule);
  for (let gameStep = 0; gameStep < 3; gameStep += 1) {
    const randomNumber = createRandomNumber(101);
    if (randomNumber < 2) {
      correctAnswer = 'no';
    }
    for (let denom = 2; denom < randomNumber; denom += 1) {
      if (randomNumber % denom === 0) {
        correctAnswer = 'no';
        break;
      } else {
        correctAnswer = 'yes';
      }
    }
    const gameLaunch = showRules(randomNumber, correctAnswer);
    if (gameLaunch === false) {
      return;
    }
  }
};

export default checkPrime;
