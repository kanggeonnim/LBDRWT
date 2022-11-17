/**
 * 이 모듈은 사용자에게 'Hi'라는 메시지를 받게 될 때, 챗봇이 응답하는 모듈입니다.
 */

//  랜덤한 인사를 얻는 모듈입니다.
const getRandomGreeting = require('./randomGreeting');

/**
 * 사용자의 'Hi'라는 메시지에 응답을 하는 함수입니다.
 * getRandomGreeting 모듈을 통해 3가지 랜덤한 인사를 가져와 사용자에게 전송하는 부분입니다.
 * @param {*} rtm // 슬랙의 real-time-messaging client
 * @param {*} channel // 현재 연결된 채널
 */
const greeting = function (rtm, channel) {
  const msg = getRandomGreeting();
  rtm.sendMessage(msg, channel);
};
module.exports = greeting;
