const { doubleNumbers, getEvenNumbersAfterTripling, getEvenNumbersAfterTriplingReduce } = require("./arrayUtilities")

describe("Array Utilities", () => {
  describe("Doubling Numbers", () => {
    it('Should throw error when given a differect datatype', () => {
      expect(() => doubleNumbers("abc")).toThrow("Invalid Datatype");
    });
    it('Should return 2,4,6 when given 1,2,3', () => {
      expect(doubleNumbers([1, 2, 3])).toEqual([2, 4, 6]);
    })

  })

  describe('Tripling numbers and filtering out even numbers', () => {
    it('Should return [6] when given [1,2,3]', () => {
      expect(getEvenNumbersAfterTripling([1, 2, 3])).toEqual([6]);
    })
    it('Should throw an error when given another datatype', () => {
      expect(() => getEvenNumbersAfterTripling("abc")).toThrow('Invalid Datatype');
    })
    it('Should throw an error when given another datatype inside the array', () => {
      expect(() => getEvenNumbersAfterTripling(["abc"])).toThrow('Invalid Datatype');
    })
  })
  describe('Tripling numbers and filtering out even numbers using REDUCE', () => {
    it('Should return [6] when given [1,2,3]', () => {
      expect(getEvenNumbersAfterTriplingReduce([1, 2, 3])).toEqual([6]);
    })
    it('Should throw an error when given another datatype', () => {
      expect(() => getEvenNumbersAfterTriplingReduce("abc")).toThrow('Invalid Datatype');
    })
    it('Should throw an error when given another datatype inside the array', () => {
      expect(() => getEvenNumbersAfterTriplingReduce(["abc"])).toThrow('Invalid Datatype');
    })
  })
})