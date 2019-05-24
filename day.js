// Returns the day of the week for given date
function todayDay(date) {
      const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return daysOfTheWeek[date.getDay()];
    }
function greeting(info) {
    return `hello! HAPPY ${todayDay(info.get('date'))}, ${info.get('first')} ${info.get('last')}!`;
}