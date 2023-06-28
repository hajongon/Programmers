const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map((el) => +el));

const n = input[0];
const arr = input.filter((el, idx) => idx !== 0);
const dp = [];
for (let i = 0; i < n; i++) {
  let data = arr[i];
  dp.push(data);
}

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i + 1; j++) {
    // 왼쪽 위
    let upLeft = 0;
    if (j !== 0) upLeft = dp[i - 1][j - 1];
    // 바로 위
    let up = 0;
    if (j !== i) up = dp[i - 1][j];
    // 최대 합을 저장
    dp[i][j] = arr[i][j] + Math.max(upLeft, up);
  }
}

console.log(Math.max(...dp[n - 1]));