const checkForScriptEnd = (str) => {
  return str.endsWith("Script");
}

function checkForScriptEndRegular(str) {
  return str.endsWith("Script");
}

module.exports = {
  checkForScriptEnd,
}