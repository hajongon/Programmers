function solution(answers) {
    
    const stu = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    const score = [0, 0, 0]
    
    for (let i = 0; i < stu.length; i++) {
        for (let j = 0; j < answers.length; j++) {
            const answer = answers[j]
            let temp = j
            temp %= stu[i].length
            if (answer === stu[i][temp]) score[i]++   
        }
    }
    
    const highestScore = Math.max(...score)
    const bestStu = []
    
    for (k = 0; k < score.length; k++) {
        if (score[k] === highestScore) bestStu.push(k + 1) 
    }
    
    return bestStu
}