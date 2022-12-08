/**
 * 이번주 메뉴에 대한 메시지를 전송하는 함수입니다.
 * @param {*} rtm // 슬랙의 real-time-messaging client
 * @param {*} channel // 현재 연결된 채널
 * @param {*} menuData 한주의 메뉴가 담긴 데이터
 * @param {*} menuFlag 메뉴가 로딩되었는지 알려주는 값
 */
const days = ['월요일', '화요일', '수요일', '목요일', '금요일'];
const sendWeekMenuMessage = function (rtm, channel, menuData, menuFlag) {
  if (!menuFlag) {
    rtm.sendMessage('잠시 후에 이용해주세요.', channel);
    return;
  }
  let msg = '';
  for (let day = 0; day < 5; day += 1) {
    msg += days[day];
    msg += '\n';
    msg += menuData[day];
    msg += '\n\n';
  }
  rtm.sendMessage(msg, channel);
};
module.exports = sendWeekMenuMessage;
