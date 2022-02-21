// var n1 = document.querySelector("#nota1");
// var n2 = document.querySelector("#nota2");
// var media = document.querySelector("#media");

// function calcularMedia() {
//     let calc = (Number(n1.value) + Number(n2.value)) / 2;
//     media.innerHTML = "A media é: " + calc;
// }

var notas = document.querySelectorAll("input");

function calcularMedia() {
    let nota = 0;
    let div = notas.length;
    notas.forEach(item => {
        if (item.value == "") div--;
        nota = nota + Number(item.value);
    });
    let media = nota / notas.length;

    document.querySelector("#media").innerHTML = "Resultado: " + media;
}