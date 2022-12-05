/**
 * 오늘 메뉴에 대한 메시지를 전송하는 함수입니다.
 * @param {*} rtm // 슬랙의 real-time-messaging client
 * @param {*} channel // 현재 연결된 채널
 */
const sendMenuMessage = function (rtm, channel, menuData, menuFlag) {
  if (!menuFlag) {
    rtm.sendMessage('잠시 후에 이용해주세요.', channel);
    return;
  }
  const today = new Date().getDay();
  if (today === 0 || today === 6) {
    const msg = '주말은 운영하지 않습니다.';
    rtm.sendMessage(msg, channel);
  } else {
    const index = today - 1;
    const msg = menuData[index];
    rtm.sendMessage(msg, channel);
  }
};
module.exports = sendMenuMessage;
