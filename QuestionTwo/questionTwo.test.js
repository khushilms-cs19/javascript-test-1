const { checkAllDigitsSame } = require("./questionTwo");

test("check all digits same", () => {
  expect(checkAllDigitsSame(22)).toBe(true);
})
test("check all digits same", () => {
  expect(checkAllDigitsSame(23)).toBe(false);
})