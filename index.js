require('dotenv').config();

const { RTMClient } = require('@slack/rtm-api');
const tokenModule = require('./data');

const token = tokenModule.getToken();
console.log(token);

const rtm = new RTMClient(token);
rtm.start();
// const token = t.token;
const greeting = require('./greeting').default;
const square = require('./square');

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;

  if (Number(text)) {
    square(rtm, text, channel);
  } else {
    switch (text) {
      case 'hi':
        greeting(rtm, channel);
        break;
      default:
        rtm.sendMessage("I'm alive", channel);
    }
  }
});
