const checkForLeapYear = (year) => {
  return year % 4 === 0 ? year % 100 === 0 ? year % 400 === 0 ? true : false : true : false;
};

function checkForLeapYearRegular(year) {
  return year % 4 === 0 ? year % 100 === 0 ? year % 400 === 0 ? true : false : true : false;
}

module.exports = {
  checkForLeapYear,
  checkForLeapYearRegular,
};