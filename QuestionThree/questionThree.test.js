const { reverseCapitalization } = require("./questionThree");

test("check reversing capitalization", () => {
  expect(reverseCapitalization("MeRRy hAD a LITTle lAMp")).toBe("mErrY Had A littLE LamP");
})

test("check reversing capitalization", () => {
  expect(reverseCapitalization("TerE NaIna")).toBe("tERe nAiNA");
})