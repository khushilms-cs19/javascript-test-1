const checkEven = (num) => {
  return num % 2 === 0;
};


const getLargestEven = (arr) => {
  let maxEven = -1;
  arr.forEach((val) => {
    if (val > maxEven && checkEven(val)) {
      maxEven = val;
    }
  });
  // let maxEven2 = arr.reduce((res, cur) => {
  //   if (cur > res && checkEven(cur)) {
  //     res = cur;
  //   }
  // });
  return maxEven;
};

function getLargestEvenRegular(arr) {
  let maxEven = -1;
  arr.forEach((val) => {
    if (val > maxEven && checkEven(val)) {
      maxEven = val;
    }
  });
  return maxEven;
}

module.exports = {
  getLargestEven,
  getLargestEvenRegular
};