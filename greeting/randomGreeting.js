/**
 * 이 모듈은 0~2사이의 난수를 받아서 3가지 패턴의 랜덤한 인사를 생성해주는 모듈입니다.
 */
const randomIndexGenerator = require('../utils/randomIndexGenerator');
const statistics = require('../utils/statistics');

const greetings = ['Hi~ My cute♡', 'Hello~ My dariling♡', 'Nice to meet you!'];

/**
 * 0~2 사이의 randomIndexGenerator로 randomIndex를 생성하여 3가지 패턴으로 msg를 만들어 리턴하는 함수입니다.
 * 통계를 내기 위한 부분이 추가적으로 들어가 있습니다.
 * @returns 3가지 패턴의 랜덤한 인사 메시지
 */
const getRandomGreeting = function () {
  const randomIndex = randomIndexGenerator();
  const msg = greetings[randomIndex];

  // 통계를 내기 위해 0~2 중 선택된 인덱스의 횟수를 증가시킴.
  statistics.plusCounts(randomIndex);
  return msg;
};

module.exports = getRandomGreeting;
