for (let i = 0; i <= 2; i += 0.2) {
  for (let j = 1; j <= 3; j++) {
    if (i == 0 || i == 1 || i > 1.8) {
      console.log("I=" + i.toFixed(0) + " J=" + (j + i).toFixed(0));
    } else {
      console.log("I=" + i.toFixed(1) + " J=" + (j + i).toFixed(1));
    }
  }
}
