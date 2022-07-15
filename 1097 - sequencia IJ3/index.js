let x = 7;
for (let i = 1; i < 10; i = i + 2) {
  for (let j = x; j > x - 3; j--) {
    console.log("I=" + i + " J=" + j);
  }
  x = x + 2;
}
