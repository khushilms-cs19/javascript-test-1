const doubleNumbers = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new Error('Invalid Datatype');
  }
  return numbers.map((num) => num * 2);
};


const getEvenNumbersAfterTripling = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new Error('Invalid Datatype');
  }
  numbers.forEach((num) => {
    if (typeof num !== 'number') {
      throw new Error('Invalid Datatype');
    }
  });
  const tripledNumbers = numbers.map((num) => num * 3);
  return tripledNumbers.filter((num) => num % 2 === 0);
};
const getEvenNumbersAfterTriplingReduce = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new Error('Invalid Datatype');
  }
  numbers.forEach((num) => {
    if (typeof num !== 'number') {
      throw new Error('Invalid Datatype');
    }
  });
  // const tripledNumbers = numbers.map((num) => num * 3);
  return numbers.reduce((final, curr) => {
    const tripleNum = curr * 3;
    if (tripleNum % 2 == 0) {
      final.push(tripleNum);
    }
    return final;
  }, []);
};



module.exports = {
  doubleNumbers,
  getEvenNumbersAfterTripling,
  getEvenNumbersAfterTriplingReduce
};