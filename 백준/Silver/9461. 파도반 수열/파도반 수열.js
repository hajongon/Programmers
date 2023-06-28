const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((el) => +el);

const testCases = input[0];
const d = new Array(101).fill(0);

d[1] = 1;
d[2] = 1;
d[3] = 1;
d[4] = 2;
d[5] = 2;

for (let i = 6; i <= 101; i++) {
  d[i] = d[i - 2] + d[i - 3];
}

for (let i = 1; i <= testCases; i++) {
  console.log(d[input[i]]);
}