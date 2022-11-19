/**
 * 설명
 * @param {string} rtm - token
 * @param {string} name - 교수님 이름
 * @param {string} office - 교수님 사무실
 * @param {string} channel - 채널
 * @return {string} - 교수님 사무실
 * 루틴 설명
 * 1. office.json 파일을 읽어옴
 * 2. office.json 파일을 파싱
 * 3. 파싱한 데이터에서 name을 키로 가지는 데이터를 찾음
 * 4. 찾은 데이터를 반환
 * 5. 찾지 못하면 undefined를 반환
 * 6. 반환된 데이터를 rtm.sendMessage로 보냄
 * 7. 보낸 데이터를 콘솔에 출력
 */
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
