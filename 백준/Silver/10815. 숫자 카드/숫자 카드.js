function binarySearch(target, arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = arr[mid];

    if (midValue === target) {
      return true;
    } else if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

function checkNumberCards(myCards, numbers) {
  const sortedMyCards = myCards.sort((a, b) => a - b);
  const result = [];

  for (let num of numbers) {
    const found = binarySearch(num, sortedMyCards);
    result.push(found ? 1 : 0);
  }

  return result;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);
const myCards = input[1].split(" ").map(Number);
const M = parseInt(input[2]);
const numbersToCheck = input[3].split(" ").map(Number);

const output = checkNumberCards(myCards, numbersToCheck);
console.log(output.join(" "));
