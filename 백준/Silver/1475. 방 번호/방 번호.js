const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map((el) => +el);

let count = Array(10).fill(0);

for (let num of input) {
  count[num]++;
}

count[9] = Math.ceil((count[6] + count[9]) / 2);
count[6] = 0;

console.log(Math.max(...count));