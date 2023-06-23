const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const target = input[0];
const regExp = input[1];

let count = target.split(regExp).length - 1;
console.log(count);