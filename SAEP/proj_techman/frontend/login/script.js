function login(){
    let pw = document.querySelector("#pw").value;

    let data = {
        senha: pw
    }

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        if(data.length > 0) {
            localStorage.setItem("userdata", JSON.stringify(data[0]));
            window.location.href = "../produtos/index.html";
        }else {
            alert("ERRO: Senha incorreta.");
        }
    })
}