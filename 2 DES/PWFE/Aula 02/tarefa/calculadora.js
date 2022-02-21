var v1 = document.getElementById("valor1");
var v2 = document.getElementById("valor2");

function soma() {
    var resultado = Number(v1.value) + Number(v2.value);

    document.querySelector("#resultado").innerHTML = "Resultado: " + resultado;
};

function subtracao() {
    var resultado = Number(v1.value) - Number(v2.value);

    document.querySelector("#resultado").innerHTML = "Resultado: " + resultado;
};

function multiplicacao() {
    var resultado = Number(v1.value) * Number(v2.value);

    document.querySelector("#resultado").innerHTML = "Resultado: " + resultado;
};

function divisao() {
    var resultado = Number(v1.value) / Number(v2.value);

    document.querySelector("#resultado").innerHTML = "Resultado: " + resultado;
};

function porcentagem() {
    var resultado = (Number(v1.value) / 100) * Number(v2.value);

    document.querySelector("#resultado").innerHTML = "Resultado: " + resultado;
};

function potencia() {
    var resultado = Math.pow(Number(v1.value), Number(v2.value));

    document.querySelector("#resultado").innerHTML = "Resultado: " + resultado;
};

function clean() {
    document.querySelector("#resultado").innerHTML = "";
    document.querySelector("#valor1").value = "";
    document.querySelector("#valor2").value = "";
}