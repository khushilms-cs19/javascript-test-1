const getLongestString = (strArray) => {
  if (!Array.isArray(strArray)) {
    throw new Error('Invalid Datatype');
  }
  if (strArray.length === 0) {
    throw new Error('Empty Array');
  }
  let longestString = '';
  strArray.forEach((str) => {
    if (str.length > longestString.length) {
      longestString = str;
    }
  });
  return longestString;
};

function getLongestStringRegular(strArray) {
  let longestString = '';
  strArray.forEach((str) => {
    if (str.length > longestString.length) {
      longestString = str;
    }
  });
  return longestString;
}

module.exports = {
  getLongestString,
  getLongestStringRegular
};