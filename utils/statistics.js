/**
 * 0~2 사이의 랜덤한 난수를 정말 생성하는지 통계를 내어 확인하는 모듈입니다.
 */

const counts = [0, 0, 0];
const percentages = [0, 0, 0];
let totalCounts = 0;

/**
 * 랜덤한 Index를 받아서 0, 1, 2 각각의 Index가 나올 확률을 percentages배열에 저장하는 함수입니다.
 * @param {랜덤한 Index} index
 */
const setPercentages = function (index) {
  if (totalCounts !== 0) {
    percentages[index] = (counts[index] / totalCounts) * 100;
  }
};

/**
 * 랜덤한 Index를 받아서 0, 1, 2 중 해당하는 인덱스가 나온 횟수를 증가시키고,
 * 현재까지 응답횟수를 증가시키는 함수입니다.
 * @param {랜덤한 Index} index
 */
const plusCounts = function (index) {
  counts[index] += 1;
  totalCounts += 1;
  setPercentages(index);
};

/**
 * 현재의 총 응답횟수를 보여주고,
 * 0, 1, 2 각각의 인덱스가 지금까지 나올 확률을 계산하여 보여주는 함수입니다.
 */
const displayPercentages = function () {
  console.log(`현재 총 응답횟수: ${totalCounts}`);
  for (let i = 0; i < percentages.length; i += 1) {
    const msg = `${i.toString()}의 확률: ${percentages[i]}%`;
    console.log(msg);
  }
};

module.exports.displayPercentages = displayPercentages;
module.exports.plusCounts = plusCounts;
