const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const length = +input[0];
const d = Math.floor(length / 3);

const arr = input
  .filter((el, idx) => idx !== 0)
  .map((el) => el.split(" ").map((el) => +el));

const numberCount = [0, 0, 0];

const count = (array, r, c, d) => {
  if (d === 1) {
    numberCount[array[r][c] + 1]++;
    return;
  }

  const first = array[r][c];
  let isSame = true;
  for (let i = r; i < r + d; i++) {
    for (let j = c; j < c + d; j++) {
      if (array[i][j] !== first) {
        isSame = false;
        break;
      }
    }
    if (!isSame) {
      break;
    }
  }

  if (isSame) {
    numberCount[first + 1]++;
  } else {
    const newD = Math.floor(d / 3);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        count(array, r + i * newD, c + j * newD, newD);
      }
    }
  }
};

count(arr, 0, 0, length);

for (let el of numberCount) {
  console.log(el);
}
