const fs = require('fs');

const getOffice = function (rtm, name, channel) {
  // data/dept.txt 파일을 읽어서 dept에 저장
  const dept = fs.readFileSync('./data/dept.txt', 'utf8');
  // dept를 배열로 만들어서 deptArray에 저장
  const deptArray = dept.split('\n');
  // deptArray를 '-'를 기준으로 나눠서 key value로 만들어서 deptObject에 저장
  const deptObject = deptArray.reduce((acc, cur) => {
    const [key, value] = cur.split('-');
    acc[key] = value;
    return acc;
  }, {});
  // deptObject에서 name을 포함하는 key를 찾아서 그 key의 value를 office에 저장
  const office = Object.keys(deptObject).find((key) => key.includes(name));
  // 모든 key value를 콘솔 출력
  // office가 undefined이면 office가 없다는 메시지를 보내고
  // office가 undefined가 아니면 office의 value를 보낸다.
  if (office !== undefined) {
    rtm.sendMessage(`${office}의 사무실은 ${deptObject[office]}입니다.`, channel);
    return true;
  } return false;
};

module.exports = getOffice;
