require('dotenv').config();

const { RTMClient } = require('@slack/rtm-api');

const tokenModule = require('./data.js');

token = tokenModule.getToken();
console.log(token);

const rtm = new RTMClient(token);
rtm.start();
// const token = t.token;
const greeting = require('./greeting');
const square = require('./square');

rtm.on('message', (message) => {
  const { channel } = essage;
  const { text } = message;

  if (!isNaN(text)) {
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
