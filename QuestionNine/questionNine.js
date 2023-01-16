const caesarCipher = (plainText) => {
  let cipherText = '';
  const plainTextLen = plainText.length;
  for (let i = 0; i < plainTextLen; i++) {
    if (plainText.charAt(i) === 'z') {
      cipherText += 'a';
      continue;
    } else if (plainText.charAt(i) === 'Z') {
      cipherText += 'A';
      continue;
    }
    cipherText += String.fromCharCode(plainText.charCodeAt(i) + 1);
  }
  return cipherText;
};

function caesarCipherRegular(plainText) {
  let cipherText = '';
  const plainTextLen = plainText.length;
  for (let i = 0; i < plainTextLen; i++) {
    if (plainText.charAt(i) === 'z') {
      cipherText += 'a';
      continue;
    } else if (plainText.charAt(i) === 'Z') {
      cipherText += 'A';
      continue;
    }
    cipherText += String.fromCharCode(plainText.charCodeAt(i) + 1);
  }
  return cipherText;
}

module.exports = {
  caesarCipher,
  caesarCipherRegular,
};