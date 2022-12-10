/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
const assert = require('assert');

const a = require('../office/getoffice');
const b = require('../utils/getdata');

describe('===getoffcie test start', () => {
  it('getoffcie test End===', (done) => {
    let count = 10;
    const testingCount = 10;
    for (let i = 0; i < testingCount; i += 1) {
      const num = b(i);
      // console.log(num);
      const result = a(0, num, 0);
      // console.log(result);
      if (result === true) {
        count -= 1;
      // console.log(count);
      }
    }
    if (count === 0) {
      done();
    }
  });
});
