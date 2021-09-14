var meio = document.querySelector(".meio");

function loadData(e) {
    let file = e.files[0];

    let fr = new FileReader();

    fr.onload = () => {
        let data = JSON.parse(fr.result);

        generateHTML(data);
    };

    fr.readAsText(file);
}

function generateHTML(data) {

    for (let i = 0; i < data.length; i++) {
        let filme = document.createElement("div");
        filme.className = "filme"

        let filmeMeio = document.createElement("div");
        filmeMeio.className = "filmeMeio"

        let nome = document.createElement("h2");
        nome.innerHTML = data[i].nome;

        let genero = document.createElement("h4");
        genero.innerHTML = data[i].genero;

        let ano = document.createElement("h5");
        ano.innerHTML = data[i].ano;

        let img = document.createElement("img");
        img.src = data[i].foto

        filmeMeio.appendChild(nome);
        filmeMeio.appendChild(genero);
        filmeMeio.appendChild(ano);
        filme.appendChild(filmeMeio);
        filme.appendChild(img);
        meio.appendChild(filme)
    }

}

function buscar() {
    let val = document.querySelector("#busca").value.toLowerCase();

    let rows = document.querySelectorAll(".filmeMeio");

    for (let i = 0; i < rows.length; i++) {


        if (rows[i].innerHTML.toString().toLowerCase().includes(val)) {
            rows[i].parentNode.style.display = "flex";
        } else {
            rows[i].parentNode.style.display = "none";
        }

    }
}