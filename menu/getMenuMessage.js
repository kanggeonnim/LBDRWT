/* eslint-disable no-restricted-syntax */
const webScraping = require('../utils/webScraping');
const getRating = require('./getRating');

const url = 'https://sobi.chonbuk.ac.kr/menu/week_menu.php';
const baseSelector = 'div.section div.ttArea:nth-child(2) table.tblType03 tbody tr:first-child ';
const params = [3, 4, 5, 6, 7];
const star = ['★☆☆', '★★☆', '★★★'];
const getMenuMessage = async function () {
  const messages = [];
  for await (const param of params) {
    let message = '';
    const selector = (param === 3) ? `${baseSelector}td:nth-child(${param}) ul li > span` : `${baseSelector}td:nth-child(${param}) ul li > font`;
    const result = await webScraping(url, selector);
    const score = getRating(result[0]);
    message = `${result}입니다.\n평점은 ${star[score - 1]}입니다.`;
    messages.push(message);
  }
  console.log(messages);
  return messages;
};

module.exports = getMenuMessage;
