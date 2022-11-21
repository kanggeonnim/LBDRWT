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

const scheduleDict = transformSchedule();

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;

  if (Number(text)) {
    square(rtm, text, channel);
  } else if (/[0-9][0-9]?\/[0-9][0-9]?/.test(text)) {
    checkSchedule(rtm, channel, scheduleDict, text);
  } else if (/^hi$/i.test(text)) {
    greeting(rtm, channel);
  } else if (/^[a-zA-Z]([-_. ]?[0-9a-zA-Z])*$/i.text(text)) {
    console.log('학과안내');
  } else {
    rtm.sendMessage("I'm alive", channel);
  }
});
