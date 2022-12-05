const getMenuMessage = require('./getMenuMessage');

let menuData;

const setMenuData = function () {
  menuData = getMenuMessage();
};

const getMenuData = function () {
  return menuData;
};

module.exports = getMenuData;
module.exports = setMenuData;
