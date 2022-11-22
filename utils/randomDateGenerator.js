const getRandomDate = function () {
  const month = Math.floor(Math.random() * 12);
  const day = Math.floor(Math.random() * 31);
  return `${month}/${day}`;
};

module.exports = getRandomDate;
