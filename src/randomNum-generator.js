const createRandomNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * max) + min;
  return randomNumber;
};

export default createRandomNumber;
