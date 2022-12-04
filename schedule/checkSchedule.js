/**
 * 이 모듈은 사용자에게 날짜를 입력받으면, 해당 날짜의 학과일정을 챗봇을 통해 알려주는 모듈입니다.
 * @param {*} rtm  슬랙의 real-time-messaging client
 * @param {*} channel 현재 연결된 채널
 * @param {*} dict dictionry형태로 변환 된 학사일정 정보
 * @param {*} date 학사일정이 궁금한 날짜
 */
const checkSchedule = function (rtm, channel, dict, date) {
  // 09/01과 같은 입력을 9/1로 통일 시켜주는 부분.
  const dateArr = String(date).split('/');
  const transDate = `${String(Number(dateArr[0]))}/${String(Number(dateArr[1]))}`;

  if (transDate in dict) {
    rtm.sendMessage(`${transDate}은 ${dict[transDate]}입니다.`, channel);
  } else {
    rtm.sendMessage(`${transDate}은 학사일정이 없습니다.`, channel);
  }
};

module.exports = checkSchedule;
