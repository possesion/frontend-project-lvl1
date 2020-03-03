import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const winner = readlineSync.question('May I have your name? ');
const greetings = console.log(`Hello, ${winner}!`);

const brainEven = () => {
  let counter = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (counter < 3) {
    const randomNumber = Math.floor(Math.random() * (20 + 2));
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const even = randomNumber % 2 === 0;
    const uneven = randomNumber % 2 !== 0;
    if (even && userAnswer === 'yes') {
      console.log('Correct!');
      counter += 1;
    } else if (uneven && userAnswer === 'no') {
      console.log('Correct');
      counter += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was ${even ? 'yes' : 'no'}.
      Let's try again, ${winner}!`);
    }
  }
  if (counter === 3) {
    console.log(`Concratulations, ${winner}!`);
  }
};
brainEven();

export { greetings, brainEven };
