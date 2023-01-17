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
  const tripledNumbers = numbers.map((num) => num * 3);
  return tripledNumbers.reduce((final = [], curr) => {
    if (curr % 2 == 0) {
      final.push(curr);
    }
    return final;
  }, []);
};



module.exports = {
  doubleNumbers,
  getEvenNumbersAfterTripling,
  getEvenNumbersAfterTriplingReduce
};