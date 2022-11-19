// name 이 office.json에 있는지 확인하는 모듈
// office.json에 있는 name이면 true를 반환
// office.json에 없는 name이면 false를 반환
//
const fs = require('fs');

let ddd;
const checkOffice = function (name) {
  // name 데이터 확인
  console.log('checkOffice.js 1번', name);
  fs.readFile('./data/office.json', (err, data) => {
    if (err) throw err;

    const user = JSON.parse(data);
    const office = user[name];
    // office 데이터 확인
    console.log('checkOffice.js 2번', office);
    ddd = office;
  });
  // 콘솔로그 확인
  console.log('checkOffice.js ', ddd);
  return ddd;
};

module.exports = checkOffice;
