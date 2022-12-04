/**
 * @param {string} office
 * @param {string} location
 * @param {string} channel
 * @return {boolean}
 * @description
 * office와 location을 받아서
 * office의 사무실은 location입니다. 라는 메시지를 보낸다.
 */
const getOffcie = require('./getOffice');

const sendOffice = function (rtm, input, channel) {
  const [location] = getOffcie(input);
  rtm.sendMessage(`${location}`, channel); // test시 주석처리
  console.log(getOffcie(input));
};
module.exports = sendOffice;
