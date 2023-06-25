const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

// 정인이가 사용하는 암호 알고리즘을 만드는 것이 아니라
// '해독하는' 알고리즘을 만드는 것임

let R = 0;
let C = 0;

for (let i = 1; i <= input.length; i++) {
  // 6
  // 1 6, 2 3, 3 2, 6 1
  if (input.length % i === 0 && i <= input.length / i) {
    R = i;
    C = input.length / i;
  }
}

// C행 R열 의 이차원 배열에 순서대로 넣고 1열 2열 3열... 단위로 읽는다.

let answer = "";

/*
k a k 
o s i

k o 
a s 
k i

k a k o s i
*/

// 1 4 2 5 3 6
// 0 3 1 4 2 5

// 0열부터 시작하므로 R열 전까지
for (let i = 0; i < R; i++) {
  // 0행부터 시작하므로 C열 전까지
  for (let j = 0; j < C; j++) {
    // 현재 몇 행인지를 알기 위해서 이차원 배열의 열 만큼을 j에 곱해준다.
    // 1행 1열, 2행 1열, 3행 1열이 차례로 더해진다.
    answer += input[R * j + i];
  }
}

console.log(answer);