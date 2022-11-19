const fs = require('fs');

const getOffice = function (rtm, name, channel) {
  fs.readFile('./data/office.json', (err, data) => { // 파일 읽기
    if (err) throw err;
    const user = JSON.parse(data); // json.parse로 파싱
    const office = user[name]; // office에 user의 name을 넣어줌
    if (office === undefined) { // office가 undefined면
      rtm.sendMessage('해당 교수님은 없습니다.', channel); // 해당 교수님은 없습니다.를 보냄
    } else {
      rtm.sendMessage(`${name}교수님의 사무실은 ${office}입니다.`, channel); // rtm.sendMessage로 메시지를 보냄
    }
  });
};

module.exports = getOffice;
/**
 * 1. fs.readFile을 통해 office.json을 읽어옴
 * 2. JSON.parse를 통해 json을 파싱
 * 3. 파싱한 json에서 name을 통해 office를 찾아냄
 * 4. rtm.sendMessage를 통해 메시지를 보냄
 * 5. true를 반환
 */
