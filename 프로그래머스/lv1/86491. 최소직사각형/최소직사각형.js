function solution(sizes) {
  let max_width = 0;
  let max_height = 0;

  for (let i = 0; i < sizes.length; i++) {
    const [w, h] = sizes[i];

    const width = Math.max(w, h); // 가로 길이에 둘 중 더 긴 것을 할당
    const height = Math.min(w, h); // 세로 길이에 둘 중 더 짧은 것을 할당

    // 최대 가로 길이와 최대 세로 길이 갱신
    max_width = Math.max(max_width, width);
    max_height = Math.max(max_height, height);
  }

  // 최종 지갑의 크기 계산 및 반환
  return max_width * max_height;
}