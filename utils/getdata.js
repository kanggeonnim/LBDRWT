// data 폴더의 dept.txt 파일을 읽어서 dept에 저장
// dept를 배열로 만들어서 deptArray에 저장
// deptArray를 '-'를 기준으로 나눠서 key value로 만들어서 key와 value를 key_1 배열에 저장
const fs = require('fs');

const getdata = function (num) {
  const dept = fs.readFileSync('./source/dept.txt', 'utf8');
  const deptArray = dept.split('\r\n');
  const deptObject = {};
  for (let i = 0; i < deptArray.length; i += 1) {
    const deptArraySplit = deptArray[i].split('-');
    // eslint-disable-next-line prefer-destructuring
    deptObject[deptArraySplit[0].toLowerCase()] = deptArraySplit[1];
  }
  const key = Object.keys(deptObject);
  const key_1 = key.map((item) => item.toLowerCase());
  //console.log(key_1[num]);
  return key_1[num];
};
module.exports = getdata;
