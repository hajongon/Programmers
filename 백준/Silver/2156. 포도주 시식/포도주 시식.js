const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((el) => +el);

const d = new Array(10001).fill(0);
d[1] = input[1];
d[2] = input[1] + input[2];

for (let i = 3; i < input.length; i++) {
  d[i] = Math.max(
    d[i - 1],
    input[i] + d[i - 2],
    input[i] + input[i - 1] + d[i - 3]
  );
}

console.log(d[input.length - 1]);