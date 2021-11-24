
function converterCelsiusParaFahrenheit() {
    var valorElemento = document.getElementById("valor");
    var valor = parseFloat(valorElemento.value);  
    var valorEmCFahrenheit = ((valor * 1.8) + 32).toFixed(2)
    console.log(valorEmCFahrenheit)
    var resultado = document.getElementById("resultado")
    var resultadoFinal = "O resultado é " + valorEmCFahrenheit + "°F"
    resultado.innerHTML = resultadoFinal 
}

function converterCelsiusParaKelvin() {
    var valorElemento = document.getElementById("valor");
    var valor = parseFloat(valorElemento.value);  
    var valorEmCKelvin = (valor + 273.15).toFixed(2)
    console.log(valorEmCKelvin)
    var resultado = document.getElementById("resultado")
    var resultadoFinal = "O resultado é " + valorEmCKelvin + "K"
    resultado.innerHTML = resultadoFinal
}

function converterFahrenheitParaCelsius() {
    var valorElemento = document.getElementById("valor");
    var valor = parseFloat(valorElemento.value);  
    var valorEmFCelsius = ((valor - 32) / 1.8).toFixed(2)
    console.log(valorEmFCelsius)
    var resultado = document.getElementById("resultado")
    var resultadoFinal = "O resultado é " + valorEmFCelsius + "°C"
    resultado.innerHTML = resultadoFinal 
}

function converterFahrenheitParaKelvin() {
    var valorElemento = document.getElementById("valor");
    var valor = parseFloat(valorElemento.value);  
    var valorEmFKelvin = ((valor - 32) * (5 / 9) + 273.15).toFixed(2) 
    console.log(valorEmFKelvin)
    var resultado = document.getElementById("resultado")
    var resultadoFinal = "O resultado é " + valorEmFKelvin + "K"
    resultado.innerHTML = resultadoFinal 
}

function converterKelvinParaCelsius() {
    var valorElemento = document.getElementById("valor");
    var valor = parseFloat(valorElemento.value);  
    var valorEmKCelsius = (valor - 273.15).toFixed(2)
    console.log(valorEmKCelsius)
    var resultado = document.getElementById("resultado")
    var resultadoFinal = "O resultado é " + valorEmKCelsius + "°C"
    resultado.innerHTML = resultadoFinal 
}

function converterKelvinParaFahrenheit() {
    var valorElemento = document.getElementById("valor");
    var valor = parseFloat(valorElemento.value);  
    var valorEmKFahrenheit = (1.8 * (valor - 273.15) + 32).toFixed(2)
    console.log(valorEmKFahrenheit)
    var resultado = document.getElementById("resultado")
    var resultadoFinal = "O resultado é " + valorEmKFahrenheit + "°F"
    resultado.innerHTML = resultadoFinal 
}
