
const brainCalc = () => {
  const randomExpression = [];
  const resultOfCalculate = [];
  const target = 'What is the result of the expression?';
  for (let i = 0; i < 3; i += 1) {
    const firstNum = Math.floor(Math.random() * 100) + 1;
    const secondNum = Math.floor(Math.random() * 100) + 1;
    const symbols = ['+', '-', '*'];
    const randomSign = symbols[Math.floor(Math.random() * symbols.length)];
    switch (randomSign) {
      case '+':
        randomExpression.push(`${firstNum} + ${secondNum}`);
        resultOfCalculate.push(firstNum + secondNum);
        break;
      case '-':
        randomExpression.push(`${firstNum} - ${secondNum}`);
        resultOfCalculate.push(firstNum - secondNum);
        break;
      case '*':
        randomExpression.push(`${firstNum} * ${secondNum}`);
        resultOfCalculate.push(firstNum * secondNum);
        break;
      default:
        console.log('error');
        break;
    }
  }
  return [randomExpression, resultOfCalculate, target];
};

export default brainCalc;
