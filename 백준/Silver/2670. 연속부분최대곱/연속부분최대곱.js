const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((el) => +el);

// const n = input[0];
// const arr = input.filter((el, idx) => idx !== 0);
// let dp = new Array(n).fill(0);

// let temp = [];
// let cur = arr[0];
// for (let i = 1; i < n; i++) {
//   cur *= arr[i];
//   temp.push(cur.toFixed(3));
// }
// const maxNum = Math.max(...temp);
// const index = temp.findIndex((el) => +el === maxNum);
// dp[0] = maxNum;

// for (let j = 1; j < index + 1; j++) {
//   const max = dp[j - 1] / arr[j - 1];
//   dp[j] = max;
// }

// dp = dp.map((el) => +el.toFixed(3));
// console.log(Math.max(...dp));

// 1.638

// 자기 자신부터 출발해 끝까지 곱해보고 최대를 정하는 방식으로 접근했는데,
// dp[i]를 i를 마지막 인덱스로 하는 연속곱의 최댓값으로 정의하면 더 편하다.
// 각 원소의 위치에서 이전 원소와 곱셈을 수행할 지 결정할 수 있다.

// 자기 자신 vs (자기 자신 X 이전 dp 원소)
// - 점화식: dp[i] = max(dp[i], dp[i] * dp[i - 1])

let n = input[0];
const arr = input.filter((el, idx) => idx !== 0);
const dp = [];

for (let i = 0; i < n; i++) {
  dp.push(arr[i]);
}

for (let i = 1; i < n; i++) {
  // console.log(dp[i - 1], dp[i], dp[i] * dp[i - 1]);
  dp[i] = Math.max(dp[i], dp[i] * dp[i - 1]);
  // console.log(`${i}번째 원소: `, dp[i]);
}

console.log(Math.max(...dp).toFixed(3));
