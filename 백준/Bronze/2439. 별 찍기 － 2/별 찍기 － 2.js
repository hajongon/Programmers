const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim();
let line = 1

for (let i = 1; i <= input; i++) {
    let star = ''
    for (let j = input; j >= 1; j--) {
        if (j > line) {
            star += ' '
        } else {
            star += '*'    
        }
    }
    console.log(star)
    line++
}