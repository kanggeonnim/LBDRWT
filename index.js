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
  // console.log(translate(text));;
  if (Number(text)) {
    square(rtm, text, channel);
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
        if (getOffice(rtm, text, channel) === false) {
          rtm.sendMessage("I'm alive", channel);
        }
        break;
    }
  }
});
