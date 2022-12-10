const rendomIndexGenerator = require('./randomIndexGenerator');

const getWrongData = function (data) {
  // data의 랜덤한 위치의 문자를 아스키코드표의 랜덤한 숫자로 바꿔서 반환
  const wrongData = data.split('');
  // console.log('=====================================');
  for (let i = 0; i < 3; i += 1) {
    const rendomIndex = rendomIndexGenerator(data);
    // 아스키 코드 33이상 126이하의 랜덤한 숫자를 문자로 바꿔서 wrongData에 저장
    wrongData[rendomIndex] = String.fromCharCode(Math.floor(Math.random() * (126 - 33 + 1)) + 33);
    // 변경된 위치가 출력
    // console.log(rendomIndex, '번째 문자가 변경되었습니다.');
    // 변경전과 변경후를 출력
    // console.log(data, '->', wrongData.join(''));
  }
  // console.log('=====================================');
  return wrongData.join('');
};

module.exports = getWrongData;
