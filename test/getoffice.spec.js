/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
const assert = require('assert');

const getoffcie = require('../office/getoffice');
const getdata = require('../utils/getdata');

describe('===getoffcie test start', () => {
  it('getoffcie test End===', (done) => {
    let count = 10;
    const testingCount = 10;
    for (let i = 0; i < testingCount; i += 1) {
      const num = getdata(i);
      console.log(num);
      const [result, location] = getoffcie(num);
      console.log(result);
      if (result === num) {
        count -= 1;
        console.log(count);
      }
    }
    assert.equal(count, 0);
    console.log(`${testingCount}회 테스트 성공`);
    done();
  });
});
