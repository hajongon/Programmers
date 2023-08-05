function stackFunc(cmds) {
  for (let cmd of cmds) {
    switch (cmd[0]) {
      case "push":
        stack.push(+cmd[1]);
        break;
      case "pop":
        answer += stack.length ? `${stack.pop()}\n` : `-1\n`;
        break;
      case "size":
        answer += `${stack.length}\n`;
        break;
      case "empty":
        answer += stack.length ? `0\n` : `1\n`;
        break;
      case "top":
        answer += stack.length > 0 ? `${stack[stack.length - 1]}\n` : `-1\n`;
        break;
    }
  }
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const commands = input.filter((v, i) => i !== 0).map((el) => el.split(" "));
const stack = [];
let answer = "";

stackFunc(commands);
answer = answer.trim();
console.log(answer);
