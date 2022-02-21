var table = document.querySelector("#data");

function cadastrar() {
    let cadastrado = false;

    let nome = document.querySelector("#nome").value;
    let cpf = document.querySelector("#cpf").value;
    let turma = document.querySelector("#turma").value;

    let data = [nome, cpf, turma];

    let rows = document.querySelectorAll("tr");

    for (let i = 0; i < rows.length; i++) {
        let cols = rows[i].querySelectorAll("td")[0];
        if (cols !== undefined) {
            if (cols.innerHTML === nome) {
                alert("Aluno já cadastrado");
                cadastrado = true;
                break;
            }
        }
    }

    if (!cadastrado) {
        let row = document.createElement("tr");

        for (let i = 0; i < 3; i++) {
            let col = document.createElement("td");

            col.innerHTML = data[i];

            row.appendChild(col);
        }

        let button = document.createElement("button");
        button.innerHTML = "Apagar";
        button.setAttribute("id", "suamaegorda");

        button.addEventListener("click", () => {
            apagarButton(button);
        });

        let colButton = document.createElement("td");
        colButton.appendChild(button);

        row.appendChild(colButton);

        table.appendChild(row);
    }

    limparCampos();
}

function apagarButton(element) {
    console.log(element);
    element.parentNode.parentNode.remove();
}

function buscar() {
    let val = document.querySelector("#busca").value.toLowerCase();
    let rows = document.querySelectorAll("tr");

    for (let i = 0; i < rows.length; i++) {
        if (rows[i].innerHTML.toString().toLowerCase().replace("<td>", "").includes(val)) {
            rows[i].style.display = "table-row";
        } else {
            rows[i].style.display = "none";
        }
    }
}


function limparCampos() {
    let nome = document.querySelector("#nome");
    let cpf = document.querySelector("#cpf");
    let turma = document.querySelector("#turma");

    nome.value = "";
    cpf.value = "";
    turma.value = "";
}