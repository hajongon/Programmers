function solution(n) {
    n = n - 1;
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) return i;
    }
}

// n = x * Q + 1 이 되어야 함. 이 때의 x를 리턴할 것인데, x 중에 가장 작은 것!
// x = (n - 1) / Q
// (n - 1)의 약수 중 1을 제외하고 가장 작은 수