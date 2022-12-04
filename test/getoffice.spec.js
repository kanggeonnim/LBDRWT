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
      const [location] = getOffice(num);
      // console.log(location);
      if (location === null) { break; }
      if (location.toLowerCase().replace(/\s/g, '').includes(num.replace(/\s/g, '').toLowerCase())) {
        count -= 1;
        // console.log(count);
      }
    }
    assert.equal(count, 0);
    console.log(`${testingCount}회 테스트 성공`);
    done();
  });
});
