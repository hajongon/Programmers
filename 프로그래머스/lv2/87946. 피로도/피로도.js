function solution(k, dungeons) {
    const roots = getPermutation(dungeons, dungeons.length)
    
    let rootsLength = factorial(dungeons.length)
    let completed = Array(rootsLength).fill(0)
        
    let hp = k
    
    // 루트 하나마다 몇개까지 탐험 가능한지 체크
    for (let i = 0; i < roots.length; i++) {
        // 하나의 루트 순회
        for (let j = 0; j < dungeons.length; j++) {
            // 최소 필요 피로도 체크
            // console.log(`현재 루트: ${roots[i]}, ${i}번째 던전 탐험 전 체력: ${hp}`)
            // 탐험 가능하면
            if (hp >= roots[i][j][0]) {
                // 소모 피로도만큼 hp를 깎고 complete[i]++ 한 뒤 continue
                hp = hp - roots[i][j][1]
                completed[i]++
            } else {
                hp = k
                break; 
            }
        }
    }
    return Math.max(...completed)
}

function factorial(n) {
    // Base case: n이 0이거나 1인 경우 1을 반환
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n!은 n * (n-1)!과 같으므로 재귀적으로 호출합니다.
    return n * factorial(n - 1);
}

function getPermutation (array, selectNumber) {
    
    if (selectNumber === 1) return array.map((element) => [element]);
    const result = [];
    
    array.forEach ((element, originalArrIndex, array) => {
        const fix = element;
        const rest = array.filter((_, restArrIndex) => restArrIndex !== originalArrIndex);
        const permutation0fRest = getPermutation (rest, selectNumber - 1) ;
        const combineFix = permutation0fRest.map((elementArr) => [fix, ... elementArr]);
        result.push (... combineFix);
    });
    
    return result;
}