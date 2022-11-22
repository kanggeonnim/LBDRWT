/* eslint-disable no-undef */
/**
 * 이 모듈은 transformSchedule 모듈을 테스트하기 위한 테스팅용 모듈입니다.
 */

const assert = require('assert');
const transformSchedule = require('../schedule/transformSchedule');

const scheduleDict = transformSchedule();
/**
 * transformSchedule 모듈을 테스트하기 위한 테스팅 모듈입니다.
 * haske.txt에 담긴 학사정보를 transformSchedule 모듈을 통해 변환이 잘이루어졌는지 텍스트 매칭을 통해 검사합니다.
 */
describe('====Schedule Test Start!====', () => {
  it('Schedule Test End!======', (done) => {
    let count = 0;
    const testingCounts = 12; // 테스트 횟수를 정한 후 시작

    if (/^2학기 수강신청$/.test(scheduleDict['8/4'])) {
      count += 1;
    }
    if (/^후기 학위수여식$/.test(scheduleDict['8/22'])) {
      count += 1;
    }
    if (/(?=.*2학기 개강)(?=.*2학기 수강신청 변경 기간).*/.test(scheduleDict['9/1'])) {
      count += 1;
    }
    if (/^2학기 수강신청 변경 기간$/.test(scheduleDict['9/2'])) {
      count += 1;
    }
    if (/(?=.*지식재산권의 날)(?=.*2학기 수강신청 변경 기간).*/.test(scheduleDict['9/4'])) {
      count += 1;
    }
    if (/^개교기념일$/.test(scheduleDict['10/15'])) {
      count += 1;
    }
    if (/^\(대학원\) 석사학위 논문 심사 신청$/.test(scheduleDict['10/19'])) {
      count += 1;
    }
    if (/^수업일수 2\/4$/.test(scheduleDict['10/27'])) {
      count += 1;
    }
    if (/^중간시험 완료$/.test(scheduleDict['11/3'])) {
      count += 1;
    }
    if (/^수시 면접고사$/.test(scheduleDict['11/24'])) {
      count += 1;
    }
    if (/^종강$/.test(scheduleDict['12/21'])) {
      count += 1;
    }
    if (/^계절수업 시작$/.test(scheduleDict['12/23'])) {
      count += 1;
    }
    // 테스트가 성공적으로 끝난 경우
    assert.equal(count, testingCounts);
    console.log(`${testingCounts}회의 테스트케이스 중 ${count}회의 테스트 성공`);
    done();
  });
});
