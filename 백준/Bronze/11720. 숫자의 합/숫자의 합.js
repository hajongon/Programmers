const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const numArr = input[1].split("").map((el) => +el);
const sum = numArr.reduce((acc, cur) => acc + cur);
console.log(sum);
