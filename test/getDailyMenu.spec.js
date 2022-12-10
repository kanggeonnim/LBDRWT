/* eslint-disable no-undef */
/**
 * 이 모듈은 transformSchedule 모듈을 테스트하기 위한 테스팅용 모듈입니다.
 */

const assert = require('assert');
const getMenuMessage = require('../menu/getMenuMessage');

/**
  * 오늘 뭐 먹지기능을 테스트하기 위한 테스팅 모듈입니다.
  * getMenuMessage을 통해 얻어온 한주의 메뉴 정보를 정규식을 통해 제대로 얻어 왔는지 검사합니다.
  */
describe('===Menu test start', () => {
  it('Menu test End===', (done) => {
    let menuData = [];
    getMenuMessage().then((res) => {
      menuData = res;
      let count = 0;
      const testingCounts = 5; // 테스트 횟수를 정한 후 시작

      for (let i = 0; i < testingCounts; i += 1) {
        if (/[가-힣|*]*,[가-힣|*]*,[가-힣|*]*,[가-힣|*]*(.|\n)*★/g.test(menuData[i])) {
          count += 1;
        }
      }
      // 테스트가 성공적으로 끝난 경우
      assert.equal(count, testingCounts);
      console.log(`${testingCounts}회의 테스트케이스 중 ${count}회의 테스트 성공`);
      done();
    });
  });
});
