const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = input.filter((el, idx) => idx !== 0).map((a) => a.split(" "));
const sortedArr = arr.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});
const answer = sortedArr.map((el) => el.join(" "));
console.log(answer.join("\n"));