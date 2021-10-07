var url = window.location.href;
var params = url.substring(url.indexOf("?"), url.length);
//var data = new URLSearchParams(params);
//var id = data.get("id");

const urll = "http://10.87.207.2:8080/api/livro" + params;

console.log(urll);