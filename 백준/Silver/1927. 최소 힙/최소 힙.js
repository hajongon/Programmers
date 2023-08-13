// https://chamdom.blog/heap-using-js/

// 최소값 힙 클래스 정의
class AbsMinHeap {
  constructor() {
    this.heap = []; // 힙을 배열로 구현
  }

  // 힙에 값을 추가하는 메서드
  push(value) {
    this.heap.push(value); // 값을 배열에 추가
    this.heapifyUp(this.heap.length - 1); // 추가한 값의 위치를 조정하기 위해 heapifyUp 호출
  }

  // 가장 작은 값을 가진 값을 힙에서 꺼내는 메서드
  pop() {
    if (this.heap.length === 0) {
      return 0; // 힙이 비어있을 경우 0 반환
    }

    if (this.heap.length === 1) {
      return this.heap.pop(); // 힙에 하나만 남아있을 경우 해당 값을 반환하고 힙 비우기
    }

    const minValue = this.heap[0]; // 최소값을 저장
    this.heap[0] = this.heap.pop(); // 마지막 원소를 맨 앞으로 가져오고 마지막 원소 제거
    this.heapifyDown(0); // 변경된 위치를 조정하기 위해 heapifyDown 호출
    return minValue; // 최소값 반환
  }

  // 힙의 원소를 위로 올려서 위치 조정
  heapifyUp(index) {
    while (index > 0) {
      // 자식 인덱스를 2로 나눈 값의 정수 부분이 부모 인덱스
      const parentIndex = Math.floor((index - 1) / 2); // 부모 인덱스 계산
      // 값이 더 작은 경우 위치 교환
      if (this.heap[index] < this.heap[parentIndex]) {
        [this.heap[index], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[index],
        ]; // 위치 교환
        index = parentIndex; // 인덱스 갱신하여 다음 단계 진행
      } else {
        break; // 조건을 만족하지 않을 경우 루프 종료
      }
    }
  }

  // 힙의 원소를 아래로 내려서 위치 조정
  heapifyDown(index) {
    const leftChildIndex = index * 2 + 1; // 왼쪽 자식 인덱스
    const rightChildIndex = index * 2 + 2; // 오른쪽 자식 인덱스
    let smallestIndex = index; // 최소값을 가진 원소의 인덱스

    // 왼쪽 자식이 현재 원소보다 작을 경우 위치 갱신
    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = leftChildIndex;
    }

    // 오른쪽 자식이 현재 원소보다 작을 경우 위치 갱신
    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = rightChildIndex;
    }

    // 최소값의 위치가 변경되었을 경우 위치 교환하고 다음 단계 진행
    if (smallestIndex !== index) {
      [this.heap[index], this.heap[smallestIndex]] = [
        this.heap[smallestIndex],
        this.heap[index],
      ];
      this.heapifyDown(smallestIndex);
    }
  }
}

// 문제 해결을 위한 함수
function solve(input) {
  const lines = input.split("\n"); // 입력을 줄 단위로 분리
  const n = parseInt(lines[0]); // 연산 개수
  const heap = new AbsMinHeap(); // 최소값 힙 인스턴스 생성
  let output = ""; // 결과 문자열 초기화

  // 입력에 따라 연산 수행
  for (let i = 1; i <= n; i++) {
    const x = parseInt(lines[i]);
    if (x !== 0) {
      heap.push(x); // x가 0이 아닌 경우 힙에 값 추가
    } else {
      output += heap.pop() + "\n"; // x가 0인 경우 힙에서 값 꺼내기
    }
  }

  return output; // 결과 반환
}
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const result = solve(input); // 문제 해결 함수 호출
console.log(result); // 결과 출력
