const secondHighestValue = function (arr) {
  let firstHighest = -1e10;
  let secondHighest = -1e10;
  for (i of arr) {
    if (i > firstHighest) {
      secondHighest = firstHighest;
      firstHighest = i;
    } else {
      secondHighest = Math.max(secondHighest, i);
    }
  }
  return secondHighest;
};

const a = [1, 2, 13, 4, 5, 6, 7, 8, 9, 10];
console.log(secondHighestValue(a));
