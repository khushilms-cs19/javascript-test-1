const { checkForLeapYear } = require("./questionFive");

test("check for leap year", () => {
  expect(checkForLeapYear(2000)).toBe(true);
})
test("check for leap year", () => {
  expect(checkForLeapYear(1800)).toBe(false);
})