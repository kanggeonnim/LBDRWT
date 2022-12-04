// data 폴더의 dept.txt 파일을 읽어서 dept에 저장
// dept를 배열로 만들어서 deptArray에 저장
// deptArray를 '-'를 기준으로 나눠서 key value로 만들어서 key와 value를 key_1 배열에 저장
const fs = require('fs');

const getData = function (num) {
  const dept = fs.readFileSync('./source/dept.txt', 'utf8');
  const deptArray = dept.split('\r\n');
  const deptObject = {};
  for (let i = 0; i < deptArray.length; i += 1) {
    const deptArraySplit = deptArray[i].split('-');
    // eslint-disable-next-line prefer-destructuring
    deptObject[deptArraySplit[0].toLowerCase().replace(/\s/g, '')] = deptArray[i];
  }
  const key = Object.keys(deptObject);
  const crab = key.map((item) => item.toLowerCase());
  return crab[num];
};
module.exports = getData;
