var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split(" ");

const inicio = parseInt(lines.shift());
const fim = parseInt(lines.shift());

let duracao;
if (inicio >= fim) {
  duracao = 24 - inicio + (0 + fim);
} else {
  duracao = fim - inicio;
}

console.log("O JOGO DUROU " + duracao + " HORA(S)");
