/**
 * 0~2 사이의 랜덤한 숫자를 만들어 반환하는 함수
 * @returns 0~2 사이의 랜덤한 숫자
 */
const getRandomIndex = function (data) {
  const num = data || undefined;
  if (num === undefined) {
    const randomNumber = Math.floor(Math.random() * 100000000) % 3;
    return randomNumber;
  }
  const randomNumber = Math.floor(Math.random() * 100000000) % num.length;
  return randomNumber;
};

module.exports = getRandomIndex;
