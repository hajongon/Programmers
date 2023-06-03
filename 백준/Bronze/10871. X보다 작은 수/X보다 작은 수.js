const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const num = input[0].split(" ")[1];

const numArr = input[1].split(" ");
const answer = numArr.filter((el) => +el < num).join(" ");

console.log(answer);