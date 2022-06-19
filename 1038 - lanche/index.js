var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split(" ");

let item = parseInt(lines.shift());
let qtItem = parseInt(lines.shift());

const preco = [4.0, 4.5, 5.0, 2.0, 1.5];

for (let i = 0; i < preco.length; i++) {
  if (i + 1 == item) {
    console.log("Total: R$ " + (preco[i] * qtItem).toFixed(2));
  }
}
