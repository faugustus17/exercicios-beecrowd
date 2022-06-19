var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

let diaInicio = parseInt(lines.shift().replace("Dia ", ""));
let horarioInicio = lines.shift().replace(" : ", "").replace(" : ", "");
let horaInicio = parseInt(horarioInicio.substr(0, 2));
let minutoInicio = parseInt(horarioInicio.substr(2, 2));
let segundoInicio = parseInt(horarioInicio.substr(4, 2));
let diaFim = parseInt(lines.shift().replace("Dia ", ""));
let horarioFim = lines.shift().replace(" : ", "").replace(" : ", "");
let horaFim = parseInt(horarioFim.substr(0, 2));
let minutoFim = parseInt(horarioFim.substr(2, 2));
let segundoFim = parseInt(horarioFim.substr(4, 2));

let totalInicio =
  diaInicio * 86400 + horaInicio * 3600 + minutoInicio * 60 + segundoInicio;
let totalFim = diaFim * 86400 + horaFim * 3600 + minutoFim * 60 + segundoFim;

let duracao = totalFim - totalInicio;

let duracaoDia = parseInt(duracao / 86400);
let duracaoHoras = parseInt((duracao % 86400) / 3600);
let duracaoMinutos = parseInt(((duracao % 86400) % 3600) / 60);
let duracaoSegundos = parseInt(((duracao % 86400) % 3600) % 60);

console.log(duracaoDia + " dia(s)");
console.log(duracaoHoras + " hora(s)");
console.log(duracaoMinutos + " minuto(s)");
console.log(duracaoSegundos + " segundo(s)");
