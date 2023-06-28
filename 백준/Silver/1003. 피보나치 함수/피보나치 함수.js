const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((el) => +el);

// let answer = [0, 0];

// function fibonacci(n) {
//   if (n === 0) {
//     answer[0]++;
//     return 0;
//   } else if (n === 1) {
//     answer[1]++;
//     return 1;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

// for (let i = 1; i < input.length; i++) {
//   fibonacci(input[i]);
//   console.log(answer);
//   answer = [0, 0];
// }

// 위 로직에 따라 0, 1, 2, 3, 4, 5, 6 을 넣어보면
// [1, 0]
// [0, 1]
// [1, 2]
// [2, 3]
// [3, 5]
// [5, 8]
// [8, 13]
// [13, 21]
// [21, 34]
// [34, 55]

// 와 같이 피보나치 수열을 그대로 옮겨놓은 듯한 규칙을 발견할 수 있다.
// 규칙은 뭐냐?
// n 을 넣었을 때 console.log(fib[n-1], fib[n]) 단, n = 0 일 경우 console.log(0, 1)

// 이처럼 뭔가 규칙이 있을 것 같다는 느낌이 들 때는
// 그냥 하나하나 넣어보면서 규칙을 찾는 것이 좋을 수도 있다.

d = new Array(100).fill(0);
d[0] = 0;
d[1] = 1;

for (let i = 2; i <= 40; i++) {
  d[i] = d[i - 1] + d[i - 2];
}

let testCases = input[0];
for (let t = 1; t <= testCases; t++) {
  let n = input[t];
  if (n === 0) console.log(1, 0);
  else console.log(d[n - 1], d[n]);
}