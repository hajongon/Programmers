function findElementsNotInB(a, b) {
  let setA = new Set(a);
  let setB = new Set(b);
  let result = [...setA].filter((element) => !setB.has(element));
  result.sort((a, b) => a - b);
  return [result.length, result];
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

const answer = findElementsNotInB(A, B)
console.log(answer[0]);
answer[1].length !== 0 ? console.log(answer[1].join(" ")) : null