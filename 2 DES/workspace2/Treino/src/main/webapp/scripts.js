/**
 * 
 */
var cod = document.querySelector("#cod");
var nome = document.querySelector("#nome");
var preco = document.querySelector("#preco");
var ctr = document.querySelector("#ctr");
var button = document.querySelector("#btn-submit")


function excluir(element){
	let columns = element.parentNode.parentNode.querySelectorAll("td");
	cod.value = columns[0].innerHTML;
	nome.value = columns[1].innerHTML;
	preco.value = columns[2].innerHTML;
	ctr.value = 1;
	button.innerHTML = "Excluir";
}

function editar(element){
	let columns = element.parentNode.parentNode.querySelectorAll("td");
	cod.value = columns[0].innerHTML;
	nome.value = columns[1].innerHTML;
	preco.value = columns[2].innerHTML;
	ctr.value = 2;
	button.innerHTML = "Editar";
}