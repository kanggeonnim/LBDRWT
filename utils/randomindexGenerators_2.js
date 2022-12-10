const getRandomIndex = function () {
  const randomNumber = Math.floor(Math.random() * 100000000) % 10;
  return randomNumber;
};

module.exports = getRandomIndex;
