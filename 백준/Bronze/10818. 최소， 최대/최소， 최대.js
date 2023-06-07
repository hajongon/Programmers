const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = input[1].split(" ");
const numArr = arr.map((el) => +el);
const min = Math.min(...numArr);
const max = Math.max(...numArr);

console.log(min, max);