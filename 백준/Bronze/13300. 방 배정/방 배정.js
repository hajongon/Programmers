const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

/*

1,1
1,2
1,3
1,4
1,5
1,6

0,1
0,2
0,3
0,4
0,5
0,6

*/

const roomLimit = +input[0].split(" ")[1];
const students = input
  .filter((el, idx) => idx !== 0)
  .map((el) => el.split(" ").map((el) => +el));

// 이렇게 하면 두 배열은 같은 주소를 참조하게 됨
// const rooms = Array(2).fill(Array(6).fill(0));

const rooms = Array.from({ length: 2 }, () => Array(6).fill(0));

for (let stu of students) {
  rooms[stu[0]][stu[1] - 1]++;
}

const guests = [...rooms[0], ...rooms[1]];
let count = 0;
for (let guest of guests) {
  if (guest === 0) continue;
  if (guest <= roomLimit) count++;
  if (guest > roomLimit) count += Math.ceil(guest / roomLimit);
}

console.log(count);