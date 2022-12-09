/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
const assert = require('assert');

const getOffice = require('../office/getOffice');
const getData = require('../utils/getData');
const getWrongData = require('../utils/getWrongData');
const getRandomIndex = require('../utils/randomIndexGenerator');
const forIndex = require('../utils/getLineCount');

const num = forIndex();
describe('===getOffice test start', () => {
  it('getOffice test End===', (done) => {
    let count = 3;
    const testingCount = 3;
    for (let i = 0; i < testingCount; i += 1) {
      // console.log(i);
      const name = getData(getRandomIndex(num));
      testName = getWrongData(name);
      // console.log(name, 'spec num');
      // console.log(testName, 'spec testName');
      const location = getOffice(testName);
      // console.log(location);
      if (location === null) { break; }
      if (location.toString().includes(name)) {
        count -= 1;
        // console.log(count);
      }
    }
    assert.equal(count, 0);
    console.log(`${testingCount}회 테스트 성공`);
    done();
  });
});
