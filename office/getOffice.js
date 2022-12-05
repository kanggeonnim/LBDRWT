const fs = require('fs');
const editDistance = require('../utils/editDistance');

const getOffice = function (name) {
  const lowerNameNoSpace = name?.toLowerCase().replace(/\s/g, '');

  const dept = fs.readFileSync('./source/dept.txt', 'utf8');
  const deptArray = dept.split(/\r\n|\n/);
  const deptObject = {};
  for (let i = 0; i < deptArray.length; i += 1) {
    const deptArraySplit = deptArray[i].split('-');
    // eslint-disable-next-line prefer-destructuring
    deptObject[deptArraySplit[0].toLowerCase().replace(/\s/g, '')] = deptArray[i];
    console.log(deptObject);
  }
  const office = Object.keys(deptObject).find((key) => key.includes(lowerNameNoSpace));
  if (office !== undefined) {
    // office 와 deptObject[office]를 반환
    return deptObject[office];
  }
  // office가 undefined면 editDistance를 이용해서 가장 가까운 값을 찾아서 반환
  const min = Object.keys(deptObject).reduce((acc, cur) => {
    const distance = editDistance(lowerNameNoSpace, cur);
    if (distance < acc.distance) {
      return { distance, office: deptObject[cur] };
    }
    return acc;
  }, { distance: 100, office: null });
  return min.office;
  // return false;
};
module.exports = getOffice;
/**
 * @param {string} rtmetOffice.js
 * @param {string} name
 * @param {string} channel
 * @return {boolean}
 * @description
 *  sendOffice.js를 require한다.
 *  fs모듈을 require한다.
 *  getOffice라는 함수를 export한다.
 *  rtm, name, channel을 인자로 받는다.
 *  dept.txt를 읽어서 deptArray에 저장한다.
 *  deptArray를 \r\n을 기준으로 나누어 deptArray에 저장한다.
 *  deptObject라는 빈 객체를 만든다.
 *  deptArray를 반복문으로 돌면서 deptArraySplit에 저장한다.
 *  deptObject에 deptArraySplit[0].toLowerCase()를 key로 하고 deptArraySplit[1]을 value로 저장한다.
 *  Object.keys(deptObject)를 반복문으로 돌면서 key를 찾는다.
 *  key가 name을 포함하면 office에 key를 저장한다.
 *  office가 undefined가 아니면 sendOffice를 호출한다.
 *  true를 반환한다.
 */
