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
  } else if (text.includes('교수님')) { // 교수님을 포함하고 있으면
    const name = text.substring(0, text.length - 4);// 교수님을 제외한 이름을 name에 넣어줌
    getOffice(rtm, name, channel);// getOffice를 실행
  } else {
    switch (text) {
      case 'hi':
        greeting(rtm, channel);
        break;
      case 'quit':
        rtm.sendMessage('Bye!', channel);
        rtm.disconnect();
        break;
      default:
        rtm.sendMessage("I'm alive", channel);
        break;
    }
  }
});
