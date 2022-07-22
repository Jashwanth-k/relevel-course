function excelColumnToNumber(comb) {
  let result = 0;

  for (let i = comb.length - 1; i >= 0; i--) {
    let multiplier = Math.pow(26, comb.length - i - 1);
    result =
      result + (comb[i].charCodeAt(0) - "A".charCodeAt(0) + 1) * multiplier;
  }
  return result;
}

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question("", (numberOfEle) => {
//   readline.question("", (input) => {
//     console.log(input);
//   });
// });

const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);

const a = [1, 2, 3, 4, 5, 6];
a.splice(1, 2, 10);
console.log(a);
console.log("${workspaceFolder}");
