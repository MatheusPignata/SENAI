var tablebody = document.querySelector("#tablebody");

var data = [
    ["Peugeot 206", "2006", "R$ 5.000,00"],
    ["Jetta", "2012", "R$ 80.000,00"],
    ["Veloster", "2018", "R$ 45.000,00"]
];

/*data.forEach(item => {
    let modelo = item[0];
    let ano = item[1];
    let preco = item[2];

    let colModelo = document.createElement("td"); //<td> Peugeot 206</td>
    colModelo.innerHTML = modelo;

    let colAno = document.createElement("td");
    colAno.innerHTML = ano;

    let colPreco = document.createElement("td");
    colPreco.innerHTML = preco;

    let row = document.createElement("tr");

    row.appendChild(colModelo);
    row.appendChild(colAno);
    row.appendChild(colPreco);

    tablebody.appendChild(row);
});*/

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