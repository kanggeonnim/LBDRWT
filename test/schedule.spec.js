/* eslint-disable no-undef */
/**
 * 이 모듈은 schedule 모듈을 테스트하기 위한 테스팅용 모듈입니다.
 */
const assert = require('assert');
const transformSchedule = require('../schedule/transformSchedule');
const checkSchedule = require('../schedule/checkSchedule');
const randomDate = require('../utils/randomDateGenerator');
const scheduleDict = transformSchedule();
/**
 * greeting 모듈을 테스트하기 위한 테스팅 모듈입니다.
 * getRandomGreeting 모듈을 통해 3가지 랜덤한 인사를 가져와 통계를 출력하는 모듈입니다.
 * testingCounts를 먼저 정한 후
 * testingCounts만큼 랜덤한 결과가 나오게 되면 성공입니다.
 */
console.log(randomDate());
describe('====Schedule Test Start!====', () => {
  it('Schedule Test End!======', (done) => {
    let count = 0;
    const testingCounts = 100; // 테스트 횟수를 정한 후 시작
    for (let i = 0; i < testingCounts; i += 1) {
      const msg = randomGreeting.getRandomGreeting();
      if (greetings.includes(msg)) {
        count += 1;
      }
    }
    // 테스트가 성공적으로 끝난 경우
    assert.equal(count, testingCounts);
    console.log(`${testingCounts}회 테스트 성공`);
    statistics.displayPercentages();
    done();
  });
});
