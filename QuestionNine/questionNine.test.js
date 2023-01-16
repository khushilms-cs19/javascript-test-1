const { caesarCipher } = require('./questionNine');

test('check caesar cipher', () => {
  expect(caesarCipher('codeacademy')).toBe('dpefbdbefnz');
});
test('check caesar cipher', () => {
  expect(caesarCipher('lazyinterns')).toBe('mbazjoufsot');
});