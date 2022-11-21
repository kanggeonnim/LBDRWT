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
// const getOffice = require('./office/getoffice');
const translate = require('./office/translate');

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;
  // console.log(translate(text));
  const department = translate(text);
  console.log(department, '1번');
  if (Number(text)) {
    square(rtm, text, channel);
  } /* else if (getOffice(rtm, translate(text), channel) !== undefined) {
    // text 끝에 공백 제거
    const name = text.trim();
    getOffice(rtm, name, channel);// getOffice를 실행
  }  */else {
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
