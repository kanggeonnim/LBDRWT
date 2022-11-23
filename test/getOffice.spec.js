/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
const assert = require('assert');

const getOffice = require('../office/getOffice');
const getData = require('../utils/getData');

describe('===getOffice test start', () => {
  it('getOffice test End===', (done) => {
    let count = 10;
    const testingCount = 10;
    for (let i = 0; i < testingCount; i += 1) {
      const num = getData(i);
      // console.log(num);
      const [result, location] = getOffice(num);
      // console.log(result);
      if (location === null) { break; }
      if (result === num) {
        count -= 1;
        // console.log(count);
      }
    }
    assert.equal(count, 0);
    console.log(`${testingCount}회 테스트 성공`);
    done();
  });
});
