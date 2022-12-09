const levenshtein = require('js-levenshtein');
/**
 * levenshtein distance를 통해 입력 받은 dictionary에서 가장 유사한 단어를 찾아 반환해 주는 모듈입니다.
 * 기본적으로 대소문자, 공백 또한 다른 문자로 처리하기 때문에 이를 구분하지않으려면 사전에 데이터를 처리해서 입력하여야 합니다.
 * @param {*} dictionary 유사한 단어를 검색할 dictionary를 입력합니다.
 * @param {*} text 검색할 단어를 입력합니다.
 * @returns 가장 유사한 단어를 반환합니다.
 */
const getSimilarOffice = function (dictionary, text) {
  const keys = Object.keys(dictionary);
  let simOffice = '';
  let simLen = 0xff;
  for (let i = 0; i < keys.length; i += 1) {
    const distance = levenshtein(text, keys[i]);
    if (simLen > distance) { // 가장 유사한 단어를 찾아냈다면 저장함.
      simLen = distance;
      simOffice = keys[i];
    }
  }
  return simOffice;
};
module.exports = getSimilarOffice;
