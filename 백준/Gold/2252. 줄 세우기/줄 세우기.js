const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const numOfStudents = +input[0].split(" ")[0];
const comparisons = input
  .filter((el, i) => i !== 0)
  .map((el) => el.split(" ").map(Number));

function topologicalSort(numStudents, comparisons) {
  // 그래프 초기화
  const graph = Array.from({ length: numStudents + 1 }, () => []);
  const inDegree = Array(numStudents + 1).fill(0);

  // 그래프 구성 및 진입 차수 계산
  for (const [a, b] of comparisons) {
    graph[a].push(b);
    inDegree[b]++;
  }

  // 위상 정렬 실행
  const queue = [];
  const result = [];

  for (let i = 1; i <= numStudents; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node);
    for (const adjacentNode of graph[node]) {
      inDegree[adjacentNode]--;

      if (inDegree[adjacentNode] === 0) {
        queue.push(adjacentNode);
      }
    }
  }

  return result;
}

const sortedOrder = topologicalSort(numOfStudents, comparisons);

console.log(sortedOrder.join(" "));
