import readlineSync from 'readline-sync';

const runBrainGames = (game) => {
  const glogalData = game();
  const [gameData, gameRule] = glogalData;
  const roundsCount = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRule);
  for (let gameRound = 0; gameRound < roundsCount; gameRound += 1) {
    const [gameQuestions, correctAnswers] = gameData[gameRound];
    console.log(`Question: ${gameQuestions}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswers) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was ${correctAnswers}. Let's try again, ${name}!`);
      return;
    }
    if (gameRound === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default runBrainGames;
