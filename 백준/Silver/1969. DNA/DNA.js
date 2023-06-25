const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const dnaSet = input.filter((el, idx) => idx !== 0);
let map = new Map();
let dna = "";
let hammingDistance = 0;

for (let i = 0; i < dnaSet[0].length; i++) {
  for (let j = 0; j < dnaSet.length; j++) {
    if (map.get(dnaSet[j][i])) {
      const count = map.get(dnaSet[j][i]);
      map.set(dnaSet[j][i], count + 1);
    } else {
      map.set(dnaSet[j][i], 1);
    }
  }
  let arr = [...map.entries()];
    // [[알파벳, 개수], [알파벳, 개수]...]
  let dnaChar = arr.reduce((a, b) => {
    if (a[1] > b[1]) return a;
    else if (a[1] < b[1]) return b;
    else if (a[1] === b[1])
      return a[0].charCodeAt() < b[0].charCodeAt() ? a : b;
  })[0];
  dna += dnaChar;
  for (let k = 0; k < dnaSet.length; k++) {
    if (dnaSet[k][i] !== dnaChar) hammingDistance++;
  }
  map = new Map();
}

console.log(dna);
console.log(hammingDistance);
