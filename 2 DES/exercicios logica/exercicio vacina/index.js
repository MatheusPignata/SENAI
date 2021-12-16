
var D2 = 0; //segunda dose em dia
var D1 = 0; //primeira dose 2 
var D2A = 0; //seguda dose com atraso 1 
var D1A = 0; // esperando a segunda dose com atraso

var vacina=[13731,
    24665,
    27541,
    29234,
    18244,
    23801,
    30602];


vacina.forEach(mes => {
    
    let n = mes

    if(D1A > 0){
        if(n > D1A){
            D2A = D2A + D1A
            D2 = D2 + D1A 
            n = n - D1A
            D1A = 0
            console.log(9)
            if(n >= D1 && D1 > 0){
                D2 = D2 + D1
                D1 = 0
                console.log(8)
            }else if(n >= D1){
                D1 = n
                console.log(7)
            }else if(n < D1 && D1 > 0){
                D2 = D2 + n
                D1A = D1 - n 
                D1 = 0
                console.log(6)
            }else{
                D1 = n
                console.log(5)
            }
        }else{
            D2A = D2A + n
            D2 = D2 + n
            D1A = D1A - n
            console.log(4)
        }
    }else{
        if(D1 > 0){
            if(n >= D1){
                D2 = D2 + D1
                D1 = n - D1
                console.log(3)
            }else{
                D2 = D2 + n
                D1A = D1A + (D1 - n)
                D1 = 0
                console.log(2)
            }
        }else{
            D1 = n
            console.log(1)
        }
    }

    /*if(D1A > 0){
        if(n > D1A){
            D2A = D2A + D1A
            D2 = D2 + D2A
            n = n - D1A
            
            if(n > D1){
                D2 = D2 + D1
                
            }else{
                D2 = D2 + (D1 - n)
                D1A = D1 - n
                
            }
        }else{
            D2A = D2 + (D1A - n)
            D2 = D2 + D2A
        }
    }else{
        if(n >= D1){
            D1 = n
            D2 = D2 + D1
            
        }else{
            D2 = D2 + (D1 - n)
            D1A = D1A + (D1 - n)
           
        }
    }*/
});

if(D1 == 0){
    console.log("D2: " + D2)
    console.log("D1: " + D1A)
    console.log("D2A: " + D2A)
    console.log("D1A: " + D1A)
}else{
    console.log("D2: " + D2)
    console.log("D1: " + D1)
    console.log("D2A: " + D2A)
    console.log("D1A: " + D1A)
}

