const { countVowels } = require('./QuestionEight');

test('check the vowel count function', () => {
  expect(countVowels('codeacademy')).toBe(5);
});
test('check the vowel count function', () => {
  expect(countVowels('prison mike')).toBe(4);
});