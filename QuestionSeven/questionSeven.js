const concatExceptFirstChar = (strArr) => {
  return strArr.reduce((final, cur) => {
    return final.slice(1) + cur.slice(1);
  });
}

module.exports = {
  concatExceptFirstChar,
}