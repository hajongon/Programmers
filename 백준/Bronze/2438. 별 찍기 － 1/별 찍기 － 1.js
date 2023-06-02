const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();


for (let i = 1; i <= input; i++) {
    let star = ''
    for (let j = 1; j <= i; j++) {
        star += '*'
    }
    console.log(star)
}