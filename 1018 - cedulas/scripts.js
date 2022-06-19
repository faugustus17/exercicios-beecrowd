document.getElementById("btn").onclick = function () {
  var cedula = document.getElementById("cedula").value;

  var nota100;
  var nota50;
  var nota20;
  var nota10;
  var nota5;
  var nota2;
  var nota1;

  if (cedula >= 100) {
    nota100 = parseInt(cedula / 100);
    var resto100 = cedula % 100;
    cedula = resto100;
  } else {
    nota100 = 0;
  }
  if (cedula >= 50) {
    nota50 = parseInt(cedula / 50);
    var resto50 = cedula % 50;
    cedula = resto50;
  } else {
    nota50 = 0;
  }
  if (cedula >= 20) {
    nota20 = parseInt(cedula / 20);
    var resto20 = cedula % 20;
    cedula = resto20;
  } else {
    nota20 = 0;
  }
  if (cedula >= 10) {
    nota10 = parseInt(cedula / 10);
    var resto10 = cedula % 10;
    cedula = resto10;
  } else {
    nota10 = 0;
  }
  if (cedula >= 5) {
    nota5 = parseInt(cedula / 5);
    var resto5 = cedula % 5;
    cedula = resto5;
  } else {
    nota5 = 0;
  }
  if (cedula >= 2) {
    nota2 = parseInt(cedula / 2);
    var resto2 = cedula % 2;
    cedula = resto2;
  } else {
    nota2 = 0;
  }
  if (cedula >= 1) {
    nota1 = cedula;
  } else {
    nota1 = 0;
  }

  console.log(nota100 + " nota(s) de R$ 100,00");
  console.log(nota50 + " nota(s) de R$ 50,00");
  console.log(nota20 + " nota(s) de R$ 20,00");
  console.log(nota10 + " nota(s) de R$ 10,00");
  console.log(nota5 + " nota(s) de R$ 5,00");
  console.log(nota2 + " nota(s) de R$ 2,00");
  console.log(nota1 + " nota(s) de R$ 1,00");
};

document.getElementById("btnNum").onclick = function () {
  var num = document.getElementById("num").value;

  var lines = num.split(" ");

  var a = parseFloat(lines.shift()).toFixed(1);
  var b = parseFloat(lines.shift()).toFixed(1);
  var c = parseFloat(lines.shift()).toFixed(1);
  var areaTriangulo = (a * c) / 2;
  var areaCirculo = 3.14159 * (c * c);
  var soma = parseFloat(a) + parseFloat(b);
  var areaTrapezio = (soma * c) / 2;
  var areaQuadrado = b * b;
  var areaRetangulo = a * b;

  console.log("TRIANGULO: " + areaTriangulo.toFixed(3));
  console.log("CIRCULO: " + areaCirculo.toFixed(3));
  console.log("TRAPEZIO: " + areaTrapezio.toFixed(3));
  console.log("QUADRADO: " + areaQuadrado.toFixed(3));
  console.log("RETANGULO: " + areaRetangulo.toFixed(3));
};

document.getElementById("btnTempo").onclick = function () {
  var n = parseInt(document.getElementById("tempo").value);
  var h = 0;
  var m = 0;
  var s = 0;

  if (n >= 3600) {
    h = n / 3600;
    n = n % 3600;
  }
  if (n >= 60) {
    m = n / 60;
    n = n % 60;
  }
  if (n < 60) {
    s = n;
  }

  console.log(parseInt(h) + ":" + parseInt(m) + ":" + s);
};

document.getElementById("btnIdade").onclick = function () {
  var n = document.getElementById("idade").value;

  var a = 0;
  var m = 0;
  var d = 0;

  if (n >= 365) {
    a = n / 365;
    n = n % 365;
  }
  if (n >= 30) {
    m = n / 30;
    n = n % 30;
  }
  if (n < 30) {
    d = n;
  }

  console.log(parseInt(a) + " ano (s)");
  console.log(parseInt(m) + " mes (es)");
  console.log(d + " dia (s)");
};
