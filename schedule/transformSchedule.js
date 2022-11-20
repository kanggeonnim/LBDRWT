const fs = require('fs');

/**
 * 이 모듈은 사용자에게 haksa.txt파일을 읽어서 Dictionary형태로 가공해서 리턴해주는 모듈입니다.
 */
const transformSchedule = function () {
  const scheduleDict = {};
  fs.readFile('./schedule/haksa.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const schedules = data.split(/\r\n|\n| : /);
    let scheduleTrans = schedules;
    const splitSchedule = [];

    for (let i = 0; i < schedules.length; i += 1) {
      if (schedules[i].includes('-')) {
        const dates = schedules[i].split(' - ');
        const dates1 = dates[0].split('/').map(Number);
        const dates2 = dates[1].split('/').map(Number);

        // Date(year, month, date) month의 경우 0~11(1월~12월)이기 떄문에 -1을 해줌.
        const date1 = new Date(2022, dates1[0] - 1, dates1[1], 12);
        const date2 = new Date(2022, dates2[0] - 1, dates2[1], 12);

        // 9/1 - 9/7 과 같이 표현된 날짜를 9/1, 9/2, ... 9/7로 분리
        const duringTime = (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24);
        const splitDate = date1;

        for (let j = 0; j <= duringTime; j += 1, splitDate.setDate(date1.getDate() + 1)) {
          // 9/1, 9/2 로 변환 된 일정을 splitSchedule에 저장함.
          splitSchedule.push(`${String(date1.getMonth() + 1)}/${String(date1.getDate())}`);
          splitSchedule.push(schedules[i + 1]);
        }
        scheduleTrans.splice(i, 2); // 변환되기전 일정인 9/1 - 9/7 부분을 schedule목록에서 제거함.
      }
    }
    // 변환 된 부분을 합침.
    scheduleTrans = scheduleTrans.concat(splitSchedule);

    // 사전형태로 변환.
    for (let i = 0; i < scheduleTrans.length; i += 2) {
      scheduleDict[scheduleTrans[i]] = scheduleTrans[i + 1];
    }
  });
  return scheduleDict;
};

module.exports = transformSchedule;
