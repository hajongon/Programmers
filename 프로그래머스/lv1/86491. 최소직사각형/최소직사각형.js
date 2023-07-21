function solution(sizes) {
  let max_width = 0;
  let max_height = 0;

  for (let i = 0; i < sizes.length; i++) {
    const [w, h] = sizes[i];

    // 가로로 눕혔을 때와 세로로 세웠을 때의 면적 계산
    const width_laid = Math.max(w, h);
    const height_standing = Math.min(w, h);

    // 최대 가로 길이와 최대 세로 길이 갱신
    max_width = Math.max(max_width, width_laid);
    max_height = Math.max(max_height, height_standing);
  }

  // 최종 지갑의 크기 계산 및 반환
  return max_width * max_height;
}