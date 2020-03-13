
const brainProgression = () => {
  const randomProgression = [];
  const hiddenValue = [];
  const target = 'What number is missing in the progression?';
  for (let i = 0; i < 3; i += 1) {
    const arrayofNumbers = [];
    const step = Math.floor(Math.random() * 10) + 1;
    let firstProgressionNumber = Math.floor(Math.random() * 100) + 1;
    for (let a = 0; a < 11; a += 1) {
      firstProgressionNumber += step;
      arrayofNumbers.push(firstProgressionNumber);
    }
    const correctAnswer = arrayofNumbers[Math.floor(Math.random() * arrayofNumbers.length)];
    randomProgression.push(correctAnswer);
    const strFromArray = arrayofNumbers.join(' ');
    const replacedSymbol = strFromArray.replace(correctAnswer, '..');
    hiddenValue.push(replacedSymbol);
  }
  return [hiddenValue, randomProgression, target];
};


export default brainProgression;
