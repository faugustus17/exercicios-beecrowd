var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

let peca1 = lines.shift().split(" ");
let codPeca1 = peca1.shift();
let qtPeca1 = parseInt(peca1.shift());
let valorPeca1 = parseFloat(peca1.shift());
let peca2 = lines.shift().split(" ");
let codPeca2 = peca2.shift();
let qtPeca2 = parseInt(peca2.shift());
let valorPeca2 = parseFloat(peca2.shift());

let valorTotal = qtPeca1 * valorPeca1 + qtPeca2 * valorPeca2;

console.log("VALOR A PAGAR: R$ " + valorTotal.toFixed(2));
