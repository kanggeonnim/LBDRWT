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
/**
 * 1. 토큰을 가져온다.
 * 2. RTMClient를 생성한다.
 * 3. RTMClient를 시작한다.
 * 4. RTMClient가 메시지를 받으면, 메시지를 처리한다.
 * 5. 메시지를 처리하는 방법은 다음과 같다.
 * 5-1. 메시지가 숫자이면, square.js를 실행한다.
 * 5-2. 메시지가 'hi'이면, greeting.js를 실행한다.
 * 5-3. 메시지가 'hi'가 아니면, 'I'm alive'라고 응답한다.
 * 6. square.js는 다음과 같이 동작한다.
 * 6-1. 메시지를 받는다.
 * 6-2. 메시지를 숫자로 변환한다.
 * 6-3. 숫자를 제곱한다.
 * 6-4. 제곱한 숫자를 채널에 보낸다.
 * 7. greeting.js는 다음과 같이 동작한다.
 * 7-1. 메시지를 받는다.
 * 7-2. 채널을 받는다.
 * 7-3. 'Hello!'라고 채널에 보낸다.
 * 8. 모든 모듈은 다음과 같이 동작한다.
 * 8-1. 메시지를 받는다.
 * 8-2. 채널을 받는다.
 * 8-3. 메시지를 처리한다.
 * 8-4. 처리한 결과를 채널에 보낸다.
 */