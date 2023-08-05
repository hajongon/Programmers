function stackFunc(cmds) {
  for (let cmd of cmds) {
    switch (cmd[0]) {
      case "push":
        queue.push(+cmd[1]);
        break;
      case "pop":
        answer += queue.length ? `${queue.shift()}\n` : `-1\n`;
        break;
      case "size":
        answer += `${queue.length}\n`;
        break;
      case "empty":
        answer += queue.length ? `0\n` : `1\n`;
        break;
      case "front":
        answer += queue.length > 0 ? `${queue[0]}\n` : `-1\n`;
        break;
      case "back":
        answer += queue.length > 0 ? `${queue[queue.length - 1]}\n` : `-1\n`;
        break;
    }
  }
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const commands = input.filter((v, i) => i !== 0).map((el) => el.split(" "));
const queue = [];
let answer = "";

stackFunc(commands);
answer = answer.trim();
console.log(answer);
