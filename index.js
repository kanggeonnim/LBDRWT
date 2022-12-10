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
const getMenuMessage = require('./menu/getMenuMessage');
const sendMenuMessage = require('./menu/sendMenuMessage');
const sendWeekMenuMessage = require('./menu/sendWeekMenu');
const sendOffice = require('./office/sendOffice');

const scheduleDict = transformSchedule();
let menuFlag = false;
let menuData = [];
getMenuMessage().then((res) => {
  menuData = res;
  menuFlag = true;
});

const isSchedule = {};
const isOffice = {};

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;
  const { user } = message;

  // 학사일정을 입력받았을 떄
  if (isSchedule[user] === true) {
    if (/[0-9][0-9]?\/[0-9][0-9]?/.test(text)) {
      checkSchedule(rtm, channel, scheduleDict, text);
    } else {
      rtm.sendMessage('잘못된 입력입니다.', channel);
    }
    isSchedule[user] = false;

    // 학과정보에 대해서 입력받았을 때
  } else if (isOffice[user] === true) {
    if (/^[a-zA-Z]([-_. ]?[0-9a-zA-Z])*$/i.test(text)) {
      sendOffice(rtm, text, channel);
    } else {
      rtm.sendMessage('잘못된 입력입니다.', channel);
    }
    isOffice[user] = false;

    // 제곱 계산
  } else if (Number(text)) {
    square(rtm, text, channel);

    // hi라고 하면 대답해줌.
  } else if (/^hi$/i.test(text)) {
    greeting(rtm, channel);
    rtm.sendMessage('궁금한 정보를 입력해주세요.\n● 학사 일정\n● 학과 안내\n● 오늘 밥 뭐야\n● 이번주 뭐나와', channel);

    // 학사 정보를 입력 받았을 때 isSchedule flag를 true로 설정
  } else if (/학사[ ]?일정/.test(text)) {
    rtm.sendMessage('안내 받을 날짜를 이야기해주세요.예시) 12/25', channel);
    isSchedule[user] = true;

    // 학과 안내를 입력 받았을 때 isOffice flag를 true로 설정
  } else if (/학과[ ]?안내/.test(text)) {
    rtm.sendMessage('안내 받을 학과를 이야기해주세요. 예시) Computer Science and Engineering', channel);
    isOffice[user] = true;

    // 오늘의 밥 알려주는 기계
  } else if (/오늘[ ]?밥[ ]?뭐야/.test(text)) {
    sendMenuMessage(rtm, channel, menuData, menuFlag);

    // 한주단위로 밥 뭐나올지도 알려줍니다
  } else if (/이번주[ ]?뭐나와/.test(text)) {
    sendWeekMenuMessage(rtm, channel, menuData, menuFlag);
    // 쓰잘대기 없는 말하면 대답은 해주기..
  } else if (text === 'test') {
    rtm.sendMessage('새로운 버전입니다.', channel);
  } else {
    rtm.sendMessage('궁금한 정보를 입력해주세요.\n● 학사 일정\n● 학과 안내\n● 오늘 밥 뭐야\n● 이번주 뭐나와', channel);
  }
});
