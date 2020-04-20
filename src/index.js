import readlineSync from 'readline-sync';

export const roundsCount = 3;
const runBrainGames = (rounds, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  /* eslint no-restricted-syntax: ["off", "ForOffStatement"] */
  for (const round of rounds) {
    const [question, answer] = round;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was ${answer}.
      Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runBrainGames;
