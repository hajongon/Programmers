const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n');

const row = parseInt(inputData[0]);

for (i = 1; i < row + 1; i++) {
  let a = parseInt(inputData[i].split(" ")[0]);
  let b = parseInt(inputData[i].split(" ")[1]);
  console.log(`${a + b}`);
}
