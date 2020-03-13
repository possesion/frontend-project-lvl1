
const brainEven = () => {
  const isEven = [];
  const randomNumbers = [];
  const target = 'Answer "yes" if the number is even, otherwise answer "no".';
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 21) + 1;
    const even = randomNumber % 2 !== 1;
    randomNumbers.push(randomNumber);
    if (even) {
      isEven.push('yes');
    }
    if (!even) {
      isEven.push('no');
    }
  }
  return [randomNumbers, isEven, target];
};

export default brainEven;
