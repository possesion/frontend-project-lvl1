import readlineSync from 'readline-sync';

const braingames = (gameRules) => {
  let result = 0;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);
  const gameEngine = (userQuestions, expressionResolves) => {
    console.log(`Question: ${userQuestions}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === expressionResolves || Number(userAnswer) === expressionResolves) {
      console.log('Correct!');
      result += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was ${expressionResolves}. Let's try again, ${name}!`);
      return false;
    }
    if (result === 3) {
      console.log(`Congratulations, ${name}! `);
    }
    return result;
  };
  return gameEngine;
};

export default braingames;
