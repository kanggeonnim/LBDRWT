/* const request = require('request');

module.exports = translate = function (text) {
  let result = '';
  const api_url = 'https://openapi.naver.com/v1/papago/n2mt';
  const options = {
    url: api_url,
    form: { source: 'ko', target: 'en', text },
    headers: { 'X-Naver-Client-Id': '4LoX8t3uVILQYgA1a1Es', 'X-Naver-Client-Secret': 'RF6Y1vJlzt' },
  };
  request.post(options, (error, response, body) => {
    if (!error && response.statusCode == 200) {kjlk
      body = JSON.parse(body);
      const translatedText = body.message.result;
      console.log(translatedText, '번역');
      result = translatedText;
    } else {
      console.log(`error = ${response.statusCode}`);
      result = 0;
    }
  });
  return result;
};
// 기능 추가 예상되어 남겨둠
 */
