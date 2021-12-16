const refromJson = (item, id) => {
    item.id = id;
    return item;
}

const calc = (json) => {
    if (json.cidade == "Pedreira"){
        if(json.quantidade > 10){
            json.excedente = json.quantidade - 10;
            json.multa = json.excedente * 1000;
            json.status = "Irregular";
        }else{
            json.excedente = 0;
            json.multa = 0;
            json.status = "Regular"
        }
    }else if (json.cidade == "Campinas"){
        if(json.quantidade > 30){
            json.excedente = json.quantidade - 30;
            json.multa = json.excedente * 1000;
            json.status = "Irregular";
        }else{
            json.excedente = 0;
            json.multa = 0;
            json.status = "Regular"
        }
    }else if (json.cidade == "Santos"){
        if(json.quantidade > 100){
            json.excedente = json.quantidade - 100;
            json.multa = json.excedente * 1000;
            json.status = "Irregular";
        }else{
            json.excedente = 0;
            json.multa = 0;
            json.status = "Regular"
        }
    }else if(json.cidade == "Ubatuba"){
        if(json.quantidade > 150){
            json.excedente = json.quantidade - 150;
            json.multa = json.excedente * 1000;
            json.status = "Irregular";
        }else{
            json.excedente = 0;
            json.multa = 0;
            json.status = "Regular"
        }
    }
    return json;
}

module.exports = {
    refromJson, 
    calc
}