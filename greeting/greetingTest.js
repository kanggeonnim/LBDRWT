/**
 * 이 모듈은 greeting 모듈을 테스트하기 위한 테스팅용 모듈입니다.
 */

const getRandomGreeting = require('./randomGreeting');
const statistics = require('../utils/statistics');

/**
 * 사용자의 'Hi'라는 메시지에 응답을 하는 함수입니다.
 * getRandomGreeting 모듈을 통해 3가지 랜덤한 인사를 가져와 통계를 출력하는 모듈입니다.
 * @param {*} rtm // 슬랙의 real-time-messaging client
 * @param {*} channel // 현재 연결된 채널
 */
const greetingTest = function () {
  const msg = getRandomGreeting();

  console.log(`현재 챗봇의 응답: ${msg}`);
  statistics.displayPercentages();
};

module.exports = greetingTest;
