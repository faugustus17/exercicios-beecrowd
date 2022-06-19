var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split(" ");

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());

a % b === 0 || b % a === 0
  ? console.log("Sao Multiplos")
  : console.log("Nao sao Multiplos");
