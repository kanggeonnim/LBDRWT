/**
 * 이 모듈은 사용자에게 날짜를 입력받으면, 해당 날짜의 학과일정을 챗봇을 통해 알려주는 모듈입니다.
 * @param {*} rtm  슬랙의 real-time-messaging client
 * @param {*} channel 현재 연결된 채널
 * @param {*} dict dictionry형태로 변환 된 학사일정 정보
 * @param {*} date 학사일정이 궁금한 날짜
 */
const checkSchedule = function (rtm, channel, dict, date) {
  if (date in dict) {
    rtm.sendMessage(`${date}은 ${dict[date]}입니다.`, channel);
  } else {
    rtm.sendMessage(`${date}은 학사일정이 없습니다.`, channel);
  }
};

module.exports = checkSchedule;
