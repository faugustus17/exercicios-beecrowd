var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

let n1 = 0.0;
let n2 = 0.0;
let media;
let opt = 1;

while (opt == 1) {
  while (opt == 1) {
    n1 = parseFloat(lines.shift());
    if (n1 < 0 || n1 > 10) {
      console.log("nota invalida");
    } else {
      break;
    }
  }
  while (opt == 1) {
    n2 = parseFloat(lines.shift());
    if (n2 < 0 || n2 > 10) {
      console.log("nota invalida");
    } else {
      break;
    }
  }

  media = (n1 + n2) / 2;
  console.log("media = " + media.toFixed(2));

  do {
    console.log("novo calculo (1-sim 2-nao)");
    opt = parseInt(lines.shift());
  } while (opt != 1 && opt != 2);
}
