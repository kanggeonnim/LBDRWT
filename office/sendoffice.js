/**
 * @param {string} office
 * @param {string} location
 * @param {string} channel
 * @return {boolean}
 * @description
 * office와 location을 받아서
 * office의 사무실은 location입니다. 라는 메시지를 보낸다.
 */
const getoffcie = require('./getOffice');

const sendOffice = function (rtm, input, channel) {
  // console.log(getOffice(input));
  const location = getoffcie(input);

  if (location === false) {
    rtm.sendMessage('해당 부서는 존재하지 않습니다.', channel);
    return false;
  }
  rtm.sendMessage(`${location}`, channel); // test시 주석처리
  console.log(getoffcie(input));
  return true;
};
module.exports = sendOffice;
