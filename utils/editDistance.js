const levenshtein = require('js-levenshtein');

const editDistance = function (str1, str2) {
  return levenshtein(str1, str2);
};

module.exports = editDistance;
