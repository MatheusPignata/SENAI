var nome = document.querySelector("#nome");
var endereco = document.querySelector("#endereco");
var lanche = document.querySelector("#lanche");

//Selecionando as divs producao e entrega do HTML
var producao = document.querySelector(".producao");
var entrega = document.querySelector(".entrega");

function adicionar(){
    //criando a div pedido
    if(nome.value == "" || endereco.value == "" || lanche.value == ""){
        alert("Preencha todos os campos para fazer o pedido!");
    }else{
        let divPedido = document.createElement("div")
        divPedido.setAttribute("class", "pedido")
        
        //criando a div cliente
        let divCliente = document.createElement("div");
        divCliente.setAttribute("class", "cliente");

        //passando para a div cliente, o nome do cliente
        let nomeClientePedido = document.createElement("p");
        nomeClientePedido.innerHTML = nome.value;
        nomeClientePedido.setAttribute("class", "nome");
        divCliente.appendChild(nomeClientePedido);

        //passando para a div cliente, o endereco do cliente
        let enderecoCliente = document.createElement("p");
        enderecoCliente.innerHTML = endereco.value;
        enderecoCliente.setAttribute("class", "endereco");
        divCliente.appendChild(enderecoCliente);

        //passando para a div cliente, a hora que foi realizado o pedido;
        let hora = document.createElement("p");
        hora.innerHTML = dataAtual();
        hora.setAttribute("class", "hora");
        divCliente.appendChild(hora);

        //criando o lanche do cliente
        let lancheCliente = document.createElement("p")
        lancheCliente.innerHTML = lanche.value;
        lancheCliente.setAttribute("class", "lanche");
        
        //criando o botao do motoboy
        let botaoEntrega = document.createElement("button");
        botaoEntrega.setAttribute("class", "btn");
        botaoEntrega.addEventListener("click", () => {
            passarPraLa(botaoEntrega)
        })

        //criando a imagem pra colocar dentro do botao
        let imagem = document.createElement("img");
        imagem.setAttribute("class", "img");
        imagem.src = "img/motoboy.png";
        botaoEntrega.appendChild(imagem);

        //appends para o visual
        divPedido.appendChild(divCliente);
        divPedido.appendChild(lancheCliente);
        divPedido.appendChild(botaoEntrega);
        producao.appendChild(divPedido);

        limparCampos();
    }
}

function passarPraLa(element){
    //Selecionando a div pedido inteira
    let linha = element.parentNode;

    //Criando a div pedido dentro da div entrega
    let divEntrega = document.createElement("div");
    divEntrega.setAttribute("class", "pedido");

    //criando o texto do lanche
    let textoLanche = document.createElement("p");
    textoLanche.setAttribute("class", "lanche");
    textoLanche.innerHTML = linha.querySelector(".lanche").innerHTML

    //Criando a div cliente dentro da div pedido
    let divCliente = document.createElement("div");
    divCliente.setAttribute("class", "cliente");

    //criando o texto nome do fulano
    let nomeCliente = document.createElement("p");
    nomeCliente.setAttribute("class", "nome");
    nomeCliente.innerHTML = linha.querySelector(".nome").innerHTML;
    divCliente.appendChild(nomeCliente);

    //criando o texto endereco do fulano
    let enderecoCliente = document.createElement("p");
    enderecoCliente.setAttribute("class", "endereco");
    enderecoCliente.innerHTML = linha.querySelector(".endereco").innerHTML;
    divCliente.appendChild(enderecoCliente);

    //criando a hora atual
    let horaAtual = document.createElement("p");
    horaAtual.innerHTML = dataAtual();
    horaAtual.setAttribute("class", "hora");
    divCliente.appendChild(horaAtual);

    //criando o botao
    let botaoConcluido = document.createElement("button");
    botaoConcluido.setAttribute("class", "btn");
    botaoConcluido.addEventListener("click", () => {
        apagar(botaoConcluido);
    });
    

    let imagemConcluido = document.createElement("img");
    imagemConcluido.setAttribute("class", "img");
    imagemConcluido.src = "img/checkmark.png";
    botaoConcluido.appendChild(imagemConcluido);


    divEntrega.appendChild(divCliente);
    divEntrega.appendChild(textoLanche);
    divEntrega.appendChild(botaoConcluido);
    entrega.appendChild(divEntrega);

    element.parentNode.remove();
}

function gerarDados(){
    let nomes = ["Carlos", "Pignata", "Leo"]
    let sobrenomes = ["Oliveira", "Belarmino", "Imenes"]
    nome.value = nomes[Math.floor(Math.random() * nomes.length)] + " " + sobrenomes[Math.floor(Math.random() * sobrenomes.length)]
    
    let rua = ["Para", "Amazonas", "Dona Zenaide"]
    endereco.value = "Rua " + rua[Math.floor(Math.random() * rua.length)] + ", " + Math.floor(Math.random() * (50-1));

    let vetor = document.querySelectorAll("option")
    lanche.value = vetor[Math.floor(Math.random() * vetor.length)+1].value;
    console.log(dataAtual())
}

function apagar(element){
    element.parentNode.remove();
}

function limparCampos(){
    nome.value = ''
    endereco.value = ''
    lanche.value = '';
}

function dataAtual(){
    let today = new Date();
    let h = addZero(today.getHours());
    let m = addZero(today.getMinutes());
    return h + ":" + m;
}

function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}