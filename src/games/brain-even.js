import braingames from '../index.js';
import createRandomNumber from '../magicNumbers.js';

const getEven = () => {
  const gameRule = 'Answer "yes" if the number is isEven, otherwise answer "no".';
  let correctAnswer;
  const showRules = braingames(gameRule);
  for (let gameStep = 0; gameStep < 3; gameStep += 1) {
    const randomNumber = createRandomNumber(101);
    const isEven = randomNumber % 2 !== 1;
    if (isEven) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    const gameLaunch = showRules(randomNumber, correctAnswer);
    if (gameLaunch === false) {
      return;
    }
  }
};

export default getEven;
