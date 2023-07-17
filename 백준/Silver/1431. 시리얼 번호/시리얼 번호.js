const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = input.filter((v, i) => i !== 0);

function sum(str) {
  return str
    .split("")
    .map(Number) // NaN 1 2 NaN
    .filter((el) => !isNaN(el))
    .reduce((a, b) => a + b, 0);
}

const answer = arr.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  }
  const sumCompare = sum(a) === sum(b);
  if (sumCompare) return a.localeCompare(b);
  return sum(a) - sum(b);
});

console.log(answer.join("\n"));
