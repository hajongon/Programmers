const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const arr = input[1].split(" ").map((el) => +el);
let count = 0;
for (let el of arr) {
  if (el === +input[2]) {
    count++;
  }
}

console.log(count);
