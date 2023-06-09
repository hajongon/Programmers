const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("");

const arr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

for (let i = 0; i < arr.length; i++) {
  arr[i] = input.findIndex((el) => el === arr[i]);
}

console.log(arr.join(" "));