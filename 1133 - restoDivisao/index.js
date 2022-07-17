var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

let x = parseInt(lines.shift());
let y = parseInt(lines.shift());

/*if (x > y) {
  for (let i = y + 1; i < x; i++) {
    if (i % 5 == 2 || i % 5 == 3) {
      console.log(i);
    }
  }
} else if (x < y) {
  for (let i = x + 1; i < y; i++) {
    if (i % 5 == 2 || i % 5 == 3) {
      console.log(i);
    }
  }
}*/

if (y < x) {
  let aux = x;
  x = y;
  y = aux;
}

for (let i = x; i < y; i++) {
  if (i % 5 === 2 || i % 5 === 3) {
    console.log(i);
  }
}

/*while (x < y) {
  if (x % 5 === 2 || x % 5 === 3) {
    console.log(x);
  }
  x++;
}

do {
  if (x % 5 === 2 || x % 5 === 3) {
    console.log(x);
  }
  x++;
} while (x < y);if (x % 5 === 2 || x % 5 === 3) {
    console.log(x);
  }
  x++;*/
