const { getLargestEven } = require("./questionOne");

test("test to get the largest even number", () => {
  expect(getLargestEven([1, 2, 3, 4, 5])).toBe(4);
})
test("test to get the largest even number", () => {
  expect(getLargestEven([1, 3, 5])).toBe(-1);
})