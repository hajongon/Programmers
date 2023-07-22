// function solution(brown, yellow) {
    
//     const sum = brown + yellow;
//     const divisors = [];
//     const answer = [];
    
//     for(let i = 1; i <= sum; i++){
//         if(sum % i === 0) {
//             divisors.push(i)
//         }
//     }
//     if (divisors.length % 2 !== 0) {
//         answer.push(Math.sqrt(sum));
//         answer.push(Math.sqrt(sum));
//     } else {
//         answer.push(divisors[divisors.length / 2]);
//         answer.push(divisors[divisors.length / 2 - 1]);
//     }
//     return answer;
// }

function solution(brown, yellow) {
    const totalTiles = brown + yellow;

    for (let width = 3; width <= totalTiles / 3; width++) {
        if (totalTiles % width === 0) {
            const height = totalTiles / width;

            // yellow 격자의 개수가 정확히 나누어 떨어지고, 가로 길이가 세로 길이보다 크거나 같은 경우
            if ((width - 2) * (height - 2) === yellow) {
                return [Math.max(width, height), Math.min(width, height)];
            }
        }
    }
}