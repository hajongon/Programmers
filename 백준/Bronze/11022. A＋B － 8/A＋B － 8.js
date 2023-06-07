const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const row = input.length - 1;
for (let i = 1; i <= row; i++) {
  const arr = input[i].split(" ");
  const numArr = arr.map((el) => +el);
  console.log(
    `Case #${i}: ${numArr[0]} + ${numArr[1]} = ${numArr[0] + numArr[1]}`
  );
}
