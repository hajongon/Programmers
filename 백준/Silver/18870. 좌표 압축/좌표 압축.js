function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // 찾지 못한 경우
}

function coordinateCompression(arr) {
  // 중복 제거 및 오름차순 정렬
  const sortedArr = Array.from(new Set(arr)).sort((a, b) => a - b);

  // 좌표 압축 결과를 담을 배열 초기화
  const compressedArr = new Array(arr.length);

  // 각 원소에 대해 좌표 압축 적용
  for (let i = 0; i < arr.length; i++) {
    const index = binarySearch(sortedArr, arr[i]);
    compressedArr[i] = index;
  }

  return compressedArr;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const inputArr = input[1].split(" ").map(Number);

const answer = coordinateCompression(inputArr);
console.log(answer.join(" "));
