/* eslint-disable no-restricted-syntax */
const axios = require('axios');
const cheerio = require('cheerio');

/**
 * url과 css선택자를 받아서 웹 스크래핑의 결과를 알려줍니다.
 * @param {*} url 스크래핑할 웹 페이지 주소
 * @param {*} selector 스크래핑할 css선택자
 * @returns 스크래핑 결과 배열
 */
const webScraping = async function (url, selector) {
  const res = [];
  const html = await axios.get(url);
  const $ = cheerio.load(html.data);

  for (const v of $(selector)) {
    const data = `${$(v).text()}`;
    res.push(data);
  }

  return res;
};

module.exports = webScraping;
