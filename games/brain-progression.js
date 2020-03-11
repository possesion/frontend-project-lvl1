import readlineSync from 'readline-sync';
import braingames from '../src/index.js';


const brainProgression = (brainGame) => {
  console.log('What number is missing in the progression?');
  const expression = [];
  const task = [];
  for (let i = 0; i < 3; i += 1) {
    const arrayofNumbers = [];
    const step = Math.floor(Math.random() * 10) + 1;
    let firstProgressionNumber = Math.floor(Math.random() * 100) + 1;
    for (let a = 0; a < 11; a += 1) {
      firstProgressionNumber += step;
      arrayofNumbers.push(firstProgressionNumber);
    }
    const correctAnswer = arrayofNumbers[Math.floor(Math.random() * arrayofNumbers.length)];
    expression.push(correctAnswer);
    const strFromArray = arrayofNumbers.join(' ');
    const replacedSymbol = strFromArray.replace(correctAnswer, '..');
    task.push(replacedSymbol);
  }
  return [task, expression];
};


export default brainProgression;
