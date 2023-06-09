const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString();

for (let i = 1; i <= input; i++) {
  let star = "";
  for (let j = 1; j <= input; j++) {
    if (j < i) {
      star += " ";
    } else star += "*";
  }
  console.log(star);
}