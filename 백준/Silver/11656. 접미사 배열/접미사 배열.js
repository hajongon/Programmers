const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const arr = [];
for (let i = 0; i < input.length; i++) {
  let str = "";
  for (let j = i; j < input.length; j++) {
    str += input[j];
  }
  arr.push(str);
  str = "";
}
const answer = arr.sort();
console.log(answer.join("\n"));
