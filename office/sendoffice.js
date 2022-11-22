/**
 * @param {string} office
 * @param {string} location
 * @param {string} channel
 * @return {boolean}
 * @description
 * office와 location을 받아서
 * office의 사무실은 location입니다. 라는 메시지를 보낸다.
 */

const sendOffice = function (rtm, office, location, channel) {
  rtm.sendMessage(`${office}의 사무실은 ${location}입니다.`, channel); // test시 주석처리
  console.log(`${office}의 사무실은 ${location} 입니다.`);
};
module.exports = sendOffice;
