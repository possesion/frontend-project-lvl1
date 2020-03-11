import readlineSync from 'readline-sync';


const braingames = (game) => {
  let result = 0;
  let name = readlineSync.question('May I have your name? ');
  console.log('Welcome to the Brain Games!');
  while (name.length < 1) {
    name = readlineSync.question('The name is too short. Correct your answer, please. ');
  }
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${game[0][i]}`);
    let userAnswer = readlineSync.question('Your answer: ');
    // if (userAnswer !== 'yes' || userAnswer !== 'no') {
    //   userAnswer = Number(userAnswer);
    // }
    if (userAnswer != game[1][i]) {
      console.log(` "${userAnswer}" is wrong answer ;(. Correct answer was ${game[1][i]}.
        Let's try again, ${name}!`);
      break;
    }
    if (userAnswer == game[1][i]) {
      console.log('Correct!');
      result += 1;
    }
  }
  if (result === 3) {
    console.log(`Congratulations, ${name}! `);
  }
};


export default braingames;
