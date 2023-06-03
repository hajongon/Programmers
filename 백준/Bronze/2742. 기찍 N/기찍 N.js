const fs = require("fs");
const input = Number(fs.readFileSync("dev/stdin").toString());

let answer = "";
for (let i = input; i >= 1; i--) {
  if (i !== 1) {
    answer += i + "\n";
  } else {
    answer += i;
  }
}

console.log(answer);