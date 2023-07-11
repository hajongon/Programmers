const sort = () => {
  let [n, ...arr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
  console.log(arr.sort((a, b) => b - a).join("\n"));
};

sort();