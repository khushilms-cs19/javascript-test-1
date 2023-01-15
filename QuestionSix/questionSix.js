const checkForScriptEnd = (str) => {
  return str.endsWith("Script");
}

module.exports = {
  checkForScriptEnd,
}