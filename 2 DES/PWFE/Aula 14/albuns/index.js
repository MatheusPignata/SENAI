const url = "https://jsonplaceholder.typicode.com/albums?userId=" + localStorage.getItem("id");
var albuns = document.querySelector(".albuns");
var username = document.querySelector("#username");
username.innerHTML = localStorage.getItem("name");

fetch(url).then(resp => {
    return resp.json();
}).then(data => {
    data.forEach(album => {
       generateHTML(album.id, album.title);
    })
}).catch(error => {
    console.log(error);
})

function generateHTML(id, title) {
    let album = document.querySelector(".album").cloneNode(true);
    album.classList.remove("model");
    album.querySelector("h4").innerHTML = title;
    album.addEventListener("click", () => {
        document.querySelector("body").style.overflow = "hidden";
        document.querySelector(".modal").classList.remove("model");
        getPhotos(id);
    });
    albuns.appendChild(album);
}

function getPhotos(id) {
    let urlPhoto = "https://jsonplaceholder.typicode.com/photos?albumId=" + id;

    fetch(urlPhoto).then(resp => {
        return resp.json()
    }).then(data => {
        let lista = document.querySelector(".lista");
        lista.innerHTML = "";
        data.forEach(foto => {
            let img = document.createElement("img");
            img.style.width = "20%";
            img.src = foto.url;
            lista.appendChild(img);
        })
    }).catch(error => {
        console.log(error);
    })
}

function closeModal() {
    document.querySelector("body").style.overflow = "visible";
    document.querySelector(".modal").classList.add("model");
}

function toAlbuns(){
    window.location.href = "/albuns";
}

function toPosts(){
    window.location.href = "/posts";
}

function toHome(){
    window.location.href = "/home";
}