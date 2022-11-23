require('dotenv').config();

const { RTMClient } = require('@slack/rtm-api');
const tokenModule = require('./data/token');

const token = tokenModule.getToken();
console.log('[Chatbot Start] : ', token);

const rtm = new RTMClient(token);
rtm.start();

const greeting = require('./greeting/greeting');

// const greetingTest = require('./greeting/greetingTest');
const square = require('./square/square');
const transformSchedule = require('./schedule/transformSchedule');
const checkSchedule = require('./schedule/checkSchedule');

const sendOffice = require('./office/sendoffice');

const scheduleDict = transformSchedule();
let isSchedule = false;

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;

  // 숫자를 입력 받았을 때, 제곱을 반환.
  if (isSchedule === true) {
    if (/[0-9][0-9]?\/[0-9][0-9]?/.test(text)) {
      checkSchedule(rtm, channel, scheduleDict, text);
    } else {
      rtm.sendMessage('잘못된 입력입니다.', channel);
    }
    isSchedule = false;
  } else if (Number(text)) {
    square(rtm, text, channel);
    // 학사일정을 입력 받았을 때, 날짜를 입력받은 후 해당 날짜의 학사일정을 조회해줌.
  } else if (/^학사[ ]?일정$/.test(text)) {
    rtm.sendMessage('안내 받을 날짜를 이야기해주세요.', channel);
    isSchedule = true;
  } else if (/^hi$/i.test(text)) {
    greeting(rtm, channel);
    // 학과를 입력 받았을 때, 해당 과의 위치를 알려줌.
  } else if (/^[a-zA-Z]([-_. ]?[0-9a-zA-Z])*$/i.test(text)) {
    sendOffice(rtm, text, channel);
  } else {
    rtm.sendMessage("I'm alive", channel);
  }
});
