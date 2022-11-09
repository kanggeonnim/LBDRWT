const square = function (rtm, text, channel) {
  // eslint-disable-next-line no-console
  console.log('제곱을 실시합니다.');
  // eslint-disable-next-line no-console
  console.log(text);
  rtm.sendMessage(`The result is ${text * text}`, channel);
};
module.exports = square;
