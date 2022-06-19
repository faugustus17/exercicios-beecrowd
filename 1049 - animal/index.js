var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

let palavra1 = lines.shift().replace("\r", "");
let palavra2 = lines.shift().replace("\r", "");
let palavra3 = lines.shift();
let resposta;

if (palavra1 == "vertebrado") {
  if (palavra2 == "ave") {
    if (palavra3 == "carnivoro") {
      resposta = "aguia";
    } else {
      resposta = "pomba";
    }
  } else {
    if (palavra3 == "onivoro") {
      resposta = "homem";
    } else {
      resposta = "vaca";
    }
  }
} else {
  if (palavra2 == "inseto") {
    if (palavra3 == "hematofago") {
      resposta = "pulga";
    } else {
      resposta = "lagarta";
    }
  } else {
    if (palavra3 == "hematofago") {
      resposta = "sanguessuga";
    } else {
      resposta = "minhoca";
    }
  }
}

console.log(resposta);
