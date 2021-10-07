const url = "http://10.87.207.2:8080/api/livros";
const list = document.querySelector(".list");

fetch(url).then(resp => {
    return resp.json()
}).then(data => {
    data.forEach(livro => {
        let item = document.querySelector(".item").cloneNode(true);
        item.classList.remove("model");
        item.querySelector("img").src = livro.urlImagem;
        item.querySelector("p").innerHTML = livro.titulo;
        item.addEventListener("click", () => {toBook(livro.id)})
        list.appendChild(item);
    })
}).catch(err => {
    console.log(err)
})

function toBook(id) {
    window.location.href = "../livro/index.html?id="+id;
}