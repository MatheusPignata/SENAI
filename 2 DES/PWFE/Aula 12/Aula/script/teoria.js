//guardar uma informação
localStorage.setItem("name", "Fulano da Silva");

//recuperar uma informação
let nome = localStorage.getItem("name");

let data = {
    id: 53,
    nome: "Beltrano Perdido"
};

//de obj JSON para String
//console.log(JSON.stringify(data));

//de String para JSON
//console.log(JSON.parse(`{"nome": "nome do cidadao", "idade": 30}`));

localStorage.setItem("data", JSON.stringify(data));

let dataUser = JSON.parse(localStorage.getItem("data"));

console.log(dataUser);

//Zera as informações do localStorage
localStorage.clear();

//Remove um item especifico
localStorage.removeItem("data");

console.log(localStorage.getItem("teste"));

if (localStorage.getItem("data") === null) {
    //Não autorizado
}