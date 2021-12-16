const refromJson = (item, matricula) => {
    item.matricula = matricula;
    return item;
}

const calcIRRF = (json) => {
    if(json.ultimo_salario <= 1980.90){
        json.aliquota = 0;
        json.irrf = 0;

    }else if( 1980.90 < json.ultimo_salario <= 2940.85){
        json.aliquota = 7.5;
        json.irrf = Number((json.ultimo_salario * (json.aliquota/100)).toFixed(2));

    }else if( 2940.85 < json.ultimo_salario <= 3902.59){
        json.aliquota = 15;
        json.irrf = Number((json.ultimo_salario * (json.aliquota/100)).toFixed(2));

    }else if( 3902.59 < json.ultimo_salario <= 4853.13){
        json.aliquota = 22.5;
        json.irrf = Number((json.ultimo_salario * (json.aliquota/100)).toFixed(2));

    }else if( json.ultimo_salario > 4853.13 ){
        json.aliquota = 27.5;
        json.irrf = Number((json.ultimo_salario * (json.aliquota/100)).toFixed(2));
    }
    return json;
}

module.exports = {
    refromJson,
    calcIRRF
}