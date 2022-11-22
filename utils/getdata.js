// data 폴더의 dept.txt 파일을 읽어서 dept에 저장
// dept를 배열로 만들어서 deptArray에 저장
// deptArray를 '-'를 기준으로 나눠서 key value로 만들어서 key만 key_1 배열에 저장
const fs = require('fs');

const getdata = function (num) {
  const dept = fs.readFileSync('./source/dept.txt', 'utf8');
  const deptArray = dept.split('\r\n');
  const key = deptArray.map((item) => item.split('-')[0]);
  console.log(key[num]);
  return key[num];
};
module.exports = getdata;
