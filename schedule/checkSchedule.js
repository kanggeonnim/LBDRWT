const checkSchedule = function (rtm, channel, dict, date) {
  if (date in dict) {
    rtm.sendMessage(`${date}은 ${dict[date]}입니다.`, channel);
  } else {
    rtm.sendMessage(`${date}은 학사일정이 없습니다.`, channel);
  }
};

module.exports = checkSchedule;
