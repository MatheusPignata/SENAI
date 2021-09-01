//não estava conseguindo fazer com o esquema de checkbox então fiz com um select pra poder entregar e ta obviamente bem incompleto 

var data = {
    "aeroportos": [
        "São Paulo Cumbica/GRU",
        "Brasília/BSB",
        "Congonhas/CGH",
        "Rio de Janeiro Santos Dumont/SDU",
        "Recife/REC",
        "Belo Horizonte Confins/CNF",
    ]
}

var body = document.querySelector("body");
var selectOrigem = document.createElement("select");

selectOrigem.setAttribute("id", "origem")

var optionOrigem = document.createElement("option");
optionOrigem.value = "";
optionOrigem.innerHTML = "Origem";
optionOrigem.setAttribute("disabled", "disabled");
optionOrigem.setAttribute("selected", "selected");
selectOrigem.appendChild(optionOrigem);

data.aeroportos.forEach(item => {
    let optionOrigem = document.createElement("option");
    optionOrigem.innerHTML = item;
    optionOrigem.value = item;
    selectOrigem.appendChild(optionOrigem);
});

var selectDestino = document.createElement("select");

selectDestino.setAttribute("id", "destino")

var optionDestino = document.createElement("option");
optionDestino.value = "";
optionDestino.innerHTML = "Destino";
optionDestino.setAttribute("disabled", "disabled");
optionDestino.setAttribute("selected", "selected");
selectDestino.appendChild(optionDestino);

data.aeroportos.forEach(item => {
    let optionDestino = document.createElement("option");
    optionDestino.innerHTML = item;
    optionDestino.value = item;
    selectDestino.appendChild(optionDestino);
});

var selectAssento = document.createElement("select");

selectAssento.setAttribute("id", "assento")

var optionAssento = document.createElement("option");
optionAssento.value = "";
optionAssento.innerHTML = "Assento";
optionAssento.setAttribute("disabled", "disabled");
optionAssento.setAttribute("selected", "selected");
selectAssento.appendChild(optionAssento);

for (var assento = 1; assento < 21; assento++) {
    var optionAssento = document.createElement("option");
    optionAssento.value = assento;
    optionAssento.innerHTML = "luxo - " + assento;
    selectAssento.appendChild(optionAssento);
}
for (var assento = 21; assento < 61; assento++) {
    var optionAssento = document.createElement("option");
    optionAssento.value = assento;
    optionAssento.innerHTML = "regular - " + assento;
    selectAssento.appendChild(optionAssento);
}

var button = document.createElement("button");
button.innerHTML = "Cadastrar";

button.addEventListener("click", () => {
    cadastrarButton(button);
});

body.appendChild(selectOrigem);
body.appendChild(selectDestino);
body.appendChild(selectAssento);
body.appendChild(button);

function cadastrarButton() {
    let nome = document.querySelector("#nome");
    let doc = document.querySelector("#doc");
    let origem = document.querySelector("#origem");
    let destino = document.querySelector("#destino");
    let assento = document.querySelector("#assento");

    if (assento.value <= 20) {
        assento = "R$ 400,00"
    } else {
        assento = "R$ 150,00"
    }

    console.log(nome.value, doc.value, origem.value, destino.value, assento);
}