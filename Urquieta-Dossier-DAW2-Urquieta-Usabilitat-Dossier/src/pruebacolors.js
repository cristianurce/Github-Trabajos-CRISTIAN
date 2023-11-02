const botonWhite = document.getElementById("white");
const botonYellow = document.getElementById("yellow");
const botonGreen = document.getElementById("green");
const botonGrey = document.getElementById("grey");

botonWhite.addEventListener("click", function() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
});

botonYellow.addEventListener("click", function() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "yellow";
});

botonGreen.addEventListener("click", function() {
  document.body.style.backgroundColor = "black";
      document.body.style.color = "green";
});

botonGrey.addEventListener("click", function() {
  document.body.style.backgroundColor = "rgb(32, 32, 32)";
  document.body.style.color = "white";
});


const botonPequeño = document.getElementById("pequeno");
const botonNormal = document.getElementById("normal");
const botonGrande = document.getElementById("grande");

botonPequeño.addEventListener("click", function() {
  document.querySelector("html").style.fontSize = "10px";
});

botonNormal.addEventListener("click", function() {
  document.querySelector("html").style.fontSize = "16px";
});

botonGrande.addEventListener("click", function() {
  document.querySelector("html").style.fontSize = "20px";
});