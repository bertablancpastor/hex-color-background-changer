// Implementar solución aquí
// function changeHexColor() {

// }

function generarLetra() {
  let letras = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  let numero = Math.floor(Math.random() * 16);
  console.log(letras[numero]);
  return letras[numero];
}

function colorHEX() {
  //   console.log("Funciona?");
  let coolor = "";
  for (let i = 0; i < 6; i++) {
    coolor = coolor + generarLetra();
  }

  document.querySelector("body").style.backgroundColor = "#" + coolor;

  document.getElementById("hex-value").innerHTML = "#" + coolor;
}
