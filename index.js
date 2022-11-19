require('dotenv').config();

const { RTMClient } = require('@slack/rtm-api');
const tokenModule = require('./data/token');

const token = tokenModule.getToken();
console.log(token);
const rtm = new RTMClient(token);
rtm.start();
// const token = t.token;
const greeting = require('./greeting/greeting');
const square = require('./square/square');
const getOffice = require('./office/getoffice');

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;
  if (Number(text)) {
    square(rtm, text, channel);
  } else if (text.includes('교수님')) {
    const name = text.substring(0, text.length - 4);
    getOffice(rtm, name, channel);
  } else {
    switch (text) {
      case 'hi':
        greeting(rtm, channel);
        break;
      case 'quit':
        rtm.sendMessage('Bye!', channel);
        rtm.disconnect();
        break;
      /* case '김성찬':
      // checkOffice(text)의 반환값을 콘솔로그로 표시
        checkOffice(text);
        getOffice(rtm, text, channel);
        break; */
      default:
        rtm.sendMessage("I'm alive", channel);
        break;
    } // text에 사무실이 포함되어 있으면
  }
});
