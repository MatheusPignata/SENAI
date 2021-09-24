const url = "https://jsonplaceholder.typicode.com/albums?userId=" + localStorage.getItem("id");
var username = document.querySelector("#username");
username.innerHTML = localStorage.getItem("name");

fetch(url).then(resp => {
    return resp.json();
}).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
})