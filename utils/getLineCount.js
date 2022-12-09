// dept.txt의 행의 수 만큼 공백을 반환
const fs = require('fs');

const getLineCount = function () {
  let retsize = '';
  const dept = fs.readFileSync('./source/dept.txt', 'utf8');
  const deptArray = dept.split(/\r\n|\n/);
  // deptArray의 길이만큼 retsize에 공백을 추가
  for (let i = 0; i < deptArray.length; i += 1) {
    retsize += ' ';
  }
  return retsize;
};
module.exports = getLineCount;
