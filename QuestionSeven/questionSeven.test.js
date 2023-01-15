const { concatExceptFirstChar } = require("./questionSeven");

test("check concatenation of two strings", () => {
  expect(concatExceptFirstChar(["code", "academy"])).toBe("odecademy");
})
test("check concatenation of two strings", () => {
  expect(concatExceptFirstChar(["tere", "naina"])).toBe("ereaina");
})