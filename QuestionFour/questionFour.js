const getLongestString = (strArray) => {
  let longestString = "";
  strArray.forEach((str) => {
    if (str.length > longestString.length) {
      longestString = str;
    }
  })
  return longestString;
}

module.exports = {
  getLongestString,
}