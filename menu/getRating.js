/**
 * 한주단위의 메뉴를 입력받은 후 1/2/3점으로 나누어 메뉴가 어떤지에 대해 평가하는 모듈입니다.
 * @param {*} menu 한주의 메뉴를 입력받습니다.
 * @returns 입력받은 메뉴에 대한 평가를 반환합니다.
 */
const getRating = function (menu) {
  let rate = 2;
  let filterMenu = menu.match(/고기|돼지|돈|닭|불고기/g); // 맛있는 메뉴 찾기
  const goodCount = filterMenu ? filterMenu.length : 0;

  filterMenu = menu.match(/쑥갓|샐러드|토마토/g); // 으엑! 이건 빼야돼
  const badCount = filterMenu ? filterMenu.length : 0;

  rate = rate + goodCount - badCount; // 점수 계산

  // 점수의 범위를 1/2/3 점으로 맞추기
  if (rate > 3) {
    rate = 3;
  } else if (rate < 1) {
    rate = 1;
  }

  return rate;
};

module.exports = getRating;
