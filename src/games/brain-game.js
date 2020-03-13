import readlineSync from 'readline-sync';

const braingame = () => {
  let name = readlineSync.question('May I have your name? ');
  console.log('Welcome to the Brain Games!');
  while (name.length < 1) {
    name = readlineSync.question('The name is too short. Correct your answer, please. ');
  }
  console.log(`Hello, ${name}!`);
};

export default braingame;
