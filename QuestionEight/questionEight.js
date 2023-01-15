
const isVowel = (char) => {
  const pattern = /[aeiouAEIOU]/;
  return pattern.test(char);
}

const countVowels = (str) => {
  let count = 0;
  str.split("").forEach((char) => {
    if (isVowel(char)) {
      count += 1;
    }
  });
  return count;
}

function countVowelsRegular(str) {
  let count = 0;
  str.split("").forEach((char) => {
    if (isVowel(char)) {
      count += 1;
    }
  });
  return count;
}

module.exports = {
  countVowels,
}