const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const arr = [
  `a`,
  `b`,
  `c`,
  `d`,
  `e`,
  `f`,
  `g`,
  `h`,
  `i`,
  `j`,
  `k`,
  `l`,
  `m`,
  `n`,
  `o`,
  `p`,
  `q`,
  `r`,
  `s`,
  `t`,
  `u`,
  `v`,
  `w`,
  `x`,
  `y`,
  `z`,
];

for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (let el of input) {
    if (el === arr[i]) {
      count++;
    }
  }
  arr[i] = count;
}

console.log(arr.join(" "));
