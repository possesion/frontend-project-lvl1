const createRandomNumber = (num) => {
  const randomNumber = Math.floor(Math.random() * num) + 1;
  return randomNumber;
};

export default createRandomNumber;
