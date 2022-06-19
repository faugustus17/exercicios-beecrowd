var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split(" ");

let horaInicio = parseInt(lines.shift());
let minutoInicio = parseInt(lines.shift());
let horaFim = parseInt(lines.shift());
let minutoFim = parseInt(lines.shift());

let minutagemInicio = horaInicio * 60 + minutoInicio;
let minutagemFim = horaFim * 60 + minutoFim;
let duracao;

if (horaInicio == 0 || horaFim == 0) {
  horaInicio = 24;
}
if (horaInicio > horaFim) {
  minutagemInicio = 24 * 60 - minutagemInicio;
  duracao = minutagemInicio + minutagemFim;
} else {
  duracao = minutagemFim - minutagemInicio;
}

let horaDuracao = parseInt(duracao / 60);
let minutoDuracao = parseInt(duracao % 60);

if (minutagemInicio == minutagemFim) {
  console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
} else {
  console.log(
    "O JOGO DUROU " + horaDuracao + " HORA(S) E " + minutoDuracao + " MINUTO(S)"
  );
}
