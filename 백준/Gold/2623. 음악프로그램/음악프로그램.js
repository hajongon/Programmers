const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numOfArtists = +input[0].split(" ")[0];
const orders = input
  .filter((v, i) => i !== 0)
  .map((el) => el.split(" ").map(Number));

function topologicalSort(numArtists, orders) {
  const graph = Array.from({ length: numArtists + 1 }, () => []);
  const inDegree = Array(numArtists + 1).fill(0);
  // 그래프 생성 및 진입 차수 계산
  for (const order of orders) {
    const numOrder = order[0];
    for (let i = 1; i < numOrder; i++) {
      const from = order[i];
      const to = order[i + 1];
      // 1 다음에 4가 온다 => graph[1] = [4]
      // inDegree = [0, 0, 0, 0, 1, ...]

      // 4 다음에 3이 온다 => graph[4] = [3]
      // inDegree = [0, 0, 0, 1, 1, ...]
      graph[from].push(to);
      inDegree[to]++;
    }
  }

  const queue = [];
  const result = [];

  // 진입 차수가 0인 가수들을 큐에 추가
  for (let i = 1; i <= numArtists; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const artist = queue.shift();
    result.push(artist);

    for (const nextArtist of graph[artist]) {
      inDegree[nextArtist]--;

      if (inDegree[nextArtist] === 0) {
        queue.push(nextArtist);
      }
    }
  }

  // 결과 출력
  if (result.length !== numArtists) {
    console.log(0);
  } else {
    for (const artist of result) {
      console.log(artist);
    }
  }
}
const sortedOrder = topologicalSort(numOfArtists, orders);
