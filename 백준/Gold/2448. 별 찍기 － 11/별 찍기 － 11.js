const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim();

// vscode에 옮겨놓고 저장하니까 자동 문법 교정때문에 옆으로 붙어갖고 규칙 알게됨 ㅋ

/*
 *                  (input - 1) 칸의 공백 + 별
 * *                (1, 1) 공백
 *****
 *     *            0, 6, 12, 19
 * *   * *
 ***** *****
 *           *
 * *         * *
 *****       *****
 *     *     *     *
 * *   * *   * *   * *
 ***** ***** ***** *****
 *                       *
 * *                     * *
 *****                   *****
 *     *                 *     *
 * *   * *               * *   * *
 ***** *****             ***** *****
 *           *           *           *
 * *         * *         * *         * *
 *****       *****       *****       *****
 *     *     *     *     *     *     *     *      c % 3 === 0 일 때, r % 6 === 0 일 때 별 찍기
 * *   * *   * *   * *   * *   * *   * *   * *    c % 3 === 1 일 때, r % 6 === 0 or 2 이면 별 찍기
 ***** ***** ***** ***** ***** ***** ***** *****  c % 3 === 2 일 때, r % 6 === 5 이면 공백
 */
// let str = "";
// for (let c = 0; c < input; c++) {
//   // for (let b = 0; b < input - c - 1; b++) {
//   //   str += " ";
//   // }
//   for (let r = 0; r < 2 * c + 1; r++) {
//     if (c % 3 === 0) {
//       if (r % 6 === 0 || r === 0) str += "*";
//       else str += " ";
//     }
//     if (c % 3 === 1) {
//       if (r % 6 === 0 || r % 6 === 2 || r === 0) str += "*";
//       else str += " ";
//     }
//     // r === 10
//     if (c % 3 === 2) {
//       if (r !== 0 && r % 6 === 5) str += " ";
//       else str += "*";
//     }
//   }
//   str += "\n";
// }
// console.log(str.trim());

const DB = ["  *  ", " * * ", "*****"];
const MAP = [];

// n: 현재 별의 크기
// y, x: 좌표
function solve(n, y, x) {
  // 최소 삼각형 크기에 도달했을 때, DB를 똑같이 옮겨와 그린다.
  // 3행 5열
  if (n === 1) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 5; j++) {
        MAP[y + i][x + j] = DB[i][j];
      }
    }
    return;
  }

  // 세로축을 반으로 줄여서 재귀 호출할 것

  // 위 가운데 작은 삼각형을 그리기 위한 호출
  solve(n / 2, y, x + (3 * n) / 2);
  // 아래 왼쪽 작은 삼각형을 그리기 위한 호출
  solve(n / 2, y + (3 * n) / 2, x);
  // 아래 오른쪽 작은 삼각형을 그리기 위한 호출
  solve(n / 2, y + (3 * n) / 2, x + 3 * n);
}

// n은 전체 별의 크기
function printMap(n) {
  for (let i = 0; i < n; i++) {
    // 한 줄 씩 만들어서
    // let row = "";
    // for (let j = 0; j < 2 * n - 1; j++) {
    //   row += MAP[i][j] === "*" ? "*" : " ";
    // }
    // // 출력
    console.log(MAP[i].reduce((a, b) => a + b));
  }
}

function main() {
  const n = input;
  // 최소 삼각형을 a라고 했을 때,
  // 전체 삼각형의 한 변의 길이는 a가 (3 / n)개 있는 것
  const size = n / 3;
  // n * (2n - 1) 크기의 이차원 배열 정의
  // 모든 요소는 빈 문자열
  for (let i = 0; i < n; i++) {
    MAP[i] = new Array(2 * n - 1).fill(" ");
  }
  solve(size, 0, 0);
  printMap(n);
}

main();
