const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const row = input[0];
let answer = "";
for (let i = 1; i <= row; i++) {
  if (i < row) {
    answer +=
      Number(input[i].split(" ")[0]) + Number(input[i].split(" ")[1]) + "\n";
  } else {
    answer += Number(input[i].split(" ")[0]) + Number(input[i].split(" ")[1]);
  }
}

console.log(answer);