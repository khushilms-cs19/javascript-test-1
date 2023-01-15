const { checkForScriptEnd } = require("./questionSix");

test("check for string ending with Script", () => {
  expect(checkForScriptEnd("javaScript")).toBe(true);
})
test("check for string ending with Script", () => {
  expect(checkForScriptEnd("javascript")).toBe(false);
})
test("check for string ending with Script", () => {
  expect(checkForScriptEnd("axe")).toBe(false);
})