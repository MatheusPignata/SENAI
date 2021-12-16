function entregar(){
    let select1 = document.querySelector("#select1").value;
    let select2 = document.querySelector("#select2").value;
    let body = document.querySelector("body");

    let data = new Date();
    let date = data.getDate()
    let mes = data.getMonth()
    let ano = data.getYear()
    let hora = data.getHours()
    let min = data.getMinutes()
    var seg = data.getSeconds()

    let card = document.createElement("div");
    let tipo = document.createElement("p");
    let nome = document.createElement("p");
    let dia = document.createElement("p");
    let hr = document.createElement("p");
    
    card.className = "card";

    tipo.innerHTML = select1;
    nome.innerHTML = select2;
    dia.innerHTML = date + '/' + (mes+1) + '/' + ano;
    hr.innerHTML = hora + ':' + min + ':' + seg;

    card.appendChild(tipo);
    card.appendChild(nome);
    card.appendChild(dia);
    card.appendChild(hr);
    body.appendChild(card);

    
}