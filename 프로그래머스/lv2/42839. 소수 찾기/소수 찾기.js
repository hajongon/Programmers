function solution(numbers) {
    const primeNumbers = [];
    let answer = 0;
    const visited = Array(numbers.length).fill(false); // 방문 여부를 저장하는 배열

    function backtrack(currentNumber) {
        // 현재 숫자가 1 이상인 경우에만 소수 판별을 하고, 중복 방지를 위해 Set에 추가합니다.
        if (currentNumber.length > 0 && !primeNumbers.includes(Number(currentNumber))) {
            primeNumbers.push(Number(currentNumber));
            if (isPrime(Number(currentNumber))) {
                answer++;
            }
        }

        for (let i = 0; i < numbers.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                backtrack(currentNumber + numbers[i]);
                visited[i] = false; // 백트래킹을 위해 방문 여부를 다시 false로 변경
            }
        }
    }

    backtrack('');

    return answer;
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
