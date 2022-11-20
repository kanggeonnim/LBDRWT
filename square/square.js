/**
 * 사용자에게 숫자를 입력받으면
 * 제곱을 계산해서 답을 해줍니다.
 */

const squareCalculation = require('./squareCalculation');
/**
 * 숫자를 입력받으면 제곱을 계산해서 사용자에게 답해주는 함수입니다.
 * @param {현재 동작 중인 slack의 rtm} rtm
 * @param {제곱할 숫자} text
 * @param {현재 채널} channel
 */
const square = function (rtm, text, channel) {
  console.log('제곱을 실시합니다.');
  console.log(text);
  const msg = squareCalculation(text); // 제곱 계산
  rtm.sendMessage(`The result is ${msg}`, channel);
};
module.exports = square;
