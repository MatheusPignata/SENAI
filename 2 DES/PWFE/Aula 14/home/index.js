var username = document.querySelector("#username");
const url = "https://jsonplaceholder.typicode.com/todos?userId=" + localStorage.getItem("id");
const list = document.querySelector(".list");

username.innerHTML = localStorage.getItem("name");

fetch(url).then(resp => {
    return resp.json();
}).then(data => {
    data.forEach(todo =>{
        let item = document.querySelector(".item").cloneNode(true);
        item.classList.remove("model");
        item.querySelector("p").innerHTML = todo.title;
        if(todo.completed) item.querySelector("input").setAttribute("checked", true);
        list.appendChild(item);
    })
}).catch(error => {
    console.log(error);
})

function toAlbuns(){
    window.location.href = "/albuns";
}