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

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;

  if (Number(text)) {
    square(rtm, text, channel);
  } else {
    switch (text) {
      case 'hi':
        greeting(rtm, channel); // 확률 테스트 시 이 부분을 주석처리 후 테스트

        // 실제 테스트 시 for문을 주석처리 후 테스트
        // for (let i = 0; i < 100000; i += 1) {
        //   greetingTest();
        // }
        break;
      default:
        rtm.sendMessage("I'm alive", channel);
    }
  }
});
