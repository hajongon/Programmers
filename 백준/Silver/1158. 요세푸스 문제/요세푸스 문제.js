const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const headCount = +input.split(" ")[0];
const period = +input.split(" ")[1];

const peopleArr = [];
const answerArr = [];

for (let i = 1; i <= headCount; i++) {
  peopleArr.push(i);
}

let index = -1;
let count = 0;
while (peopleArr.length !== 0) {
  index++;
  count++;
  if (index >= peopleArr.length) index = 0;
  if (count % period === 0) {
    const [popped] = peopleArr.splice(index, 1);
    answerArr.push(popped);
    index--;
  }
}

console.log(`<${answerArr.join(", ")}>`);