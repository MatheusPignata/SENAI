function newBook() {
    let id = document.querySelector("#id").value;
    let titulo = document.querySelector("#titulo").value;
    let autor = document.querySelector("#autor").value;
    let editora = document.querySelector("#editora").value;
    let idioma = document.querySelector("#idioma").value;
    let img = document.querySelector("#img").value;
    let lancamento = document.querySelector("#lancamento").value;
    
    let data = lancamento.split("-");
    let dataFormatada = (data[2] + "-" + data[1] + "-" + data[0]);

    let paginas = document.querySelector("#paginas").value;
    let estoque = document.querySelector("#estoque").value;
    let preco = document.querySelector("#preco").value;

    let url = "http://10.87.207.2:8080/api/livro";

    let obj = {
        "id": Number(id),
        "titulo": titulo,
        "autor": autor,
        "editora": editora,
        "idioma": idioma,
        "urlImagem": img,
        "lancamento": dataFormatada,
        "numeroPaginas": Number(paginas),
        "estoque": Number(estoque),
        "preco": Number(preco)
    }

    fetch(url, { method: "POST", body: JSON.stringify(obj) })
    .then(res => {return res.json()})
    .then(data => { console.log(data); })
    .catch(err => { console.log(err); });
}

function toCadastro() {
    window.location.href = "../cadastro";
}

function toLista() {
    window.location.href = "../livros";
}

