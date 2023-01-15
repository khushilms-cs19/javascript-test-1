const reverseCapitalization = (str) => {
  const strLen = str.length;
  let finalChar = "";
  for (let i = 0; i < strLen; i++) {
    const char = str.charAt(i);
    if (char.toLowerCase() === char) {
      finalChar += char.toUpperCase();
    } else {
      finalChar += char.toLowerCase();
    }
  }
  return finalChar;
}

module.exports = {
  reverseCapitalization,
}