const { getLongestString } = require("./questionFour");

test("checking to get longest string from array", () => {
  expect(getLongestString(["we", "love", "code", "academy"])).toBe("academy");
})

test("checking to get longest string from array", () => {
  expect(getLongestString(["we", "love", "code"])).toBe("love");
})