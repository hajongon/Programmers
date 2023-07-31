function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

function longestIncreasingSubsequence(arr) {
  const n = arr.length;
  const lis = [];

  for (let i = 0; i < n; i++) {
    const pos = binarySearch(lis, arr[i]);

    if (pos === lis.length) {
      lis.push(arr[i]);
    } else {
      lis[pos] = arr[i];
    }
  }

  return lis.length;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const inputArr = input[1].split(" ").map(Number);

console.log(longestIncreasingSubsequence(inputArr));
