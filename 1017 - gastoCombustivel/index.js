var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

var tempoGasto = lines.shift();
var velocidadeMedia = lines.shift();
var x = lines.shift();

x = x * 2;

var distancia = velocidadeMedia * tempoGasto;

var gastoCombustivel = distancia / 12;

console.log(gastoCombustivel.toFixed(3));

console.log(parseInt(x) + " minutos");
