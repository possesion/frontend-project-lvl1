
const brainGcd = () => {
  function gcd(firstNum, secondNum) {
    if (secondNum > firstNum) {
      return gcd(secondNum, firstNum);
    }
    if (!secondNum) {
      return firstNum;
    }
    return gcd(secondNum, firstNum % secondNum);
  }
  const gcdArray = [];
  const randomExpression = [];
  const target = 'Find the greatest common divisor of given numbers.';
  for (let i = 0; i < 3; i += 1) {
    const firstNum = Math.floor(Math.random() * 100) + 1;
    const secondNum = Math.floor(Math.random() * 100) + 1;
    gcdArray.push(gcd(firstNum, secondNum));
    randomExpression.push(`${firstNum} ${secondNum}`);
  }
  return [randomExpression, gcdArray, target];
};

export default brainGcd;
