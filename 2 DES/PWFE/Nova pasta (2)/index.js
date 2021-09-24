var tablebody = document.querySelector("#tablebody")

var data = [
    ["Pegeout 206", "2006", "R$ 5.000,00"],
    ["Jetta", "2012", "R$ 80.000,00"],
    ["Veloster", "2018", "R$ 45.000,00"]
];

data.forEach(item =>{
    let row = document.createElement("tr")
    item.forEach(dataCol => {
        let col = document.createElement("td")
        col.innerHTML = dataCol;
        row.appendChild(col);
       
    })
    tablebody.appendChild(row)
})

function buscar(){
    let val = document.querySelector("#busca").value.toLowerCase();
    let rows = document.querySelectorAll("tr");

    for(let i = 1; i<rows.length; i++){
        if(rows[i].innerHTML.toString().toLowerCase().includes(val)){
           rows[i].style.display = "table-row"
        }else{
            rows[i].style.display = "none";
        }
    }

}

function adicionar(){
    let inputs = document.querySelectorAll("input");
    let item = [inputs[1].value, inputs[2].value, "R$ " + inputs[3].value];   
    let validacao = 0;

    if(inputs[1].value == "" || inputs[2].value == ""){
        alert("Termine de digitar os campos!");
    }else{  
        for(let i = 0; i < data.length; i++){
            if (inputs[1].value == data[i][0]){
                validacao += 1;
                break;
            }
        }
        if(validacao != 0){
            alert("chatao");
        }else{
            let row = document.createElement("tr")
            item.forEach(datacol => {
                let col = document.createElement("td")
                col.innerHTML = datacol;
                row.appendChild(col);
            });
            tablebody.appendChild(row);
            data.push(item);
            limparCampos();
        }
    }
}

function limparCampos(){
    let inputs = document.querySelectorAll("input");
    for(let i = 1; i < inputs.length; i++){
        inputs[i].value = "";
    }
}
