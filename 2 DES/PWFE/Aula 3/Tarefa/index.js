var tablebody = document.querySelector("#tablebody");

var data = [
    ["The Witcher 3", "PS4", "R$ 120,00"],
    ["Gears Of War 5", "Xbox One", "R$ 80,00"],
    ["DarkSouls 3", "PS4", "R$ 100,00"]
];

data.forEach(item => {
    let row = document.createElement("tr");

    item.forEach(datacol => {
        let col = document.createElement("td");
        col.innerHTML = datacol;

        row.appendChild(col);
    })
    tablebody.appendChild(row);
});

function buscar() {
    let val = document.querySelector("#busca").value.toLowerCase();

    let rows = document.querySelectorAll("tr");

    for (let i = 1; i < rows.length; i++) {
        if (rows[i].innerHTML.toString().toLowerCase().includes(val)) {
            rows[i].style.display = "table-row";
        } else {
            rows[i].style.display = "none";
        }
    }
}

function cadastrar() {
    let inputs = document.querySelectorAll("input");
    let item = [inputs[1].value, inputs[2].value, "R$ " + inputs[3].value];

    let row = document.createElement("tr")
    item.forEach(datacol => {
        let col = document.createElement("td")
        col.innerHTML = datacol;
        row.appendChild(col);
    });
    tablebody.appendChild(row);
    for (let i = 1; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}