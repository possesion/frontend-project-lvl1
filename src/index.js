import readlineSync from 'readline-sync';


const launchBrainGames = () => {
  const greetUser = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    return name;
  };
  const getUserName = greetUser();

  const launchGame = (userQuestions, expressionResolves, gameRule) => {
    let result = 0;
    console.log(gameRule);
    for (let gameStep = 0; gameStep < 3; gameStep += 1) {
      console.log(`Question: ${userQuestions[gameStep]}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer === expressionResolves[gameStep]
        || Number(userAnswer) === expressionResolves[gameStep]) {
        console.log('Correct!');
        result += 1;
      } else {
        console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was ${expressionResolves[gameStep]}. Let's try again, ${getUserName}!`);
        return;
      }
      if (result === 3) {
        console.log(`Congratulations, ${getUserName}! `);
      }
    }
  };
  return launchGame;
};
export default launchBrainGames;
