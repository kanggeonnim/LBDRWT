const greeting = function (rtm, text, channel) {
  // eslint-disable-next-line no-console
  console.log('인사를 합시다.');
  rtm.sendMessage('Hello!', channel);
};
module.exports = greeting;
