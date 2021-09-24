function login(){
    let email = document.querySelector("#email").value;
    let url = "https://jsonplaceholder.typicode.com/users?email=" + email;

    fetch(url).then(resp => {
        return resp.json();
    }).then(data => {
        localStorage.setItem("id", data[0].id);
        localStorage.setItem("name", data[0].name);
        window.location.href = "/home";
    }).catch(error => {
        console.log(error);
    });
}