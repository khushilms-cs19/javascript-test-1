const checkAllDigitsSame = (num) => {
  const strNum = num.toString();
  for (let i = 1; i < strNum.length; i++) {
    if (strNum.charAt(i) !== strNum.charAt(i - 1)) {
      return false;
    }
  }
  return true;
};
function checkAllDigitsSameRegular(num) {
  const strNum = num.toString();
  for (let i = 1; i < strNum.length; i++) {
    if (strNum.charAt(i) !== strNum.charAt(i - 1)) {
      return false;
    }
  }
  return true;
}

module.exports = {
  checkAllDigitsSame,
  checkAllDigitsSameRegular
};