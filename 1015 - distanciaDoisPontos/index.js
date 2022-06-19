var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

var linha1 = lines.shift().split(" ");
var linha2 = lines.shift().split(" ");

var x1 = parseFloat(linha1.shift());
var y1 = parseFloat(linha1.shift());
var x2 = parseFloat(linha2.shift());
var y2 = parseFloat(linha2.shift());

var distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

console.log(distancia.toFixed(4));
