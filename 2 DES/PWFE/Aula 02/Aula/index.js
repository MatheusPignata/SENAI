/*var body = document.querySelector("body");
var title = document.querySelector("h1");
var box = document.querySelector(".box");
var caixa = document.querySelector("#caixa");

body.style.backgroundColor = "red";

title.innerHTML = "Titulo JavaScript";

box.innerHTML = "Minha div";

caixa.innerHTML = "Teste caixa";*/

var titile = document.getElementsById("title");
title.innerHTML = "Titulo";
console.log(titile);

var box = document.getElementsByClassName("box");
box[0].innerHTML = "teste";

var body = document.getElementsByTagName("body");
console.log(body);