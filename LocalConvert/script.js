// CONVERSOR DE TEMPERATURA

//    Celsius para Fahrenheit e Kelvin   

function temperaturaConverterCF(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outCFahrenheit").innerHTML = (valNum * 9 / 5 + 32);
}

function temperaturaConverterCK(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outCKelvin").innerHTML = (valNum + 273.15);
}

//   Fahrenheit para Celsius e Kelvin

function temperaturaConverterFC(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outFCelsius").innerHTML = ((valNum - 32) * 5 / 9).toFixed(2);
}

function temperaturaConverterFK(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outFKelvin").innerHTML = ((valNum - 32) * 5 / 9 + 273.15).toFixed(2);
}

//    Kelvin para Celsius e Fahrenheit  

function temperaturaConverterKC(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outKCelsius").innerHTML = (valNum - 273.15).toFixed(2);
}

function temperaturaConverterKF(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outKFahrenheit").innerHTML = ((valNum - 273.15) * 9 / 5 + 32).toFixed(2);
};

// CONVERSOR DE TEXTO

var t = document.getElementById("texto")
var r = document.getElementById("resultado")

function MAIÚSCULO() {
  r.innerText = t.value.toUpperCase()
}

function minúscula() {
  r.innerText = t.value.toLowerCase()
}
// CONVERSOR DE VELOCIDADE

// milhas p km 

function velocidadeConverter(ValNum) {
  ValNum = parseFloat(ValNum);

  document.getElementById("outKPH").innerHTML = (ValNum * 1.609344).toFixed(2)
}

// km para milha

function velocidadeConverterK(ValNum) {
  ValNum = parseFloat(ValNum);

  document.getElementById("outMPH").innerHTML = (ValNum * 0.621371).toFixed(2)
}

// CONVERSOR DE DISTANCIA 

// milhas p km 

function DistanciaConverter(ValNum) {
  ValNum = parseFloat(ValNum);

  document.getElementById("outKm").innerHTML = (ValNum * 2.59).toFixed(2)
}

// km p milhas 

function DistanciaConverterK(ValNum) {
  ValNum = parseFloat(ValNum);

  document.getElementById("outMilhas").innerHTML = (ValNum / 2.59).toFixed(2)
}

function onOver(elemento) {
  elemento.style.backgroundColor = "rgb(0, 0, 205)"
  elemento.style.color = "rgb(176, 224, 230)"
}

function onOut(elemento) {
  elemento.style.backgroundColor = "rgb(65,105,225)"
  elemento.style.color = "rgb(176, 224, 230)"
}