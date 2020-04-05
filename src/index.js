import readlineSync from 'readline-sync';

const runBrainGames = (game) => {
  const gameData = game();
  const roundsCount = 3;
  const [gameQuestions, correctAnswers, gameRule] = [gameData[0][0], gameData[0][1], gameData[1]];  
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRule);
  for (let gameRound = 0; gameRound < roundsCount; gameRound += 1) {
    console.log(`Question: ${gameQuestions[gameRound]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswers[gameRound]) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was ${correctAnswers[gameRound]}. Let's try again, ${name}!`);
      return;
    }
    console.log(`Congratulations, ${name}!`);
  }
};

export default runBrainGames;
