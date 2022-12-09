/* eslint-disable no-undef */
const assert = require('assert');
const square = require('../square/squareCalculation'); // 제곱 계산 모듈을 불러옴.

describe('====Square Test Start!====', () => {
  it('Square Test End!======', (done) => {
    // square 모듈을 사용한 값과 실제 제곱의 값을 비교함.
    // 테스트 횟수동안 항상 같은 값을 뱉어내면 성공
    const testingCounts = 5;
    let count = 0;

    for (let i = 1; i <= testingCounts; i += 1) {
      const squareNumber = i * i;
      const squareNumber2 = square(i);
      if (squareNumber === squareNumber2) {
        count += 1;
      }
    }
    // 테스트가 성공적으로 끝난 경우
    assert.equal(count, testingCounts);
    console.log(`${testingCounts}회 테스트 성공`);
    done();
  });
});
