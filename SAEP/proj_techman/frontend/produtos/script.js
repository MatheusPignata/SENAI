listarEquipamentos()

function listarEquipamentos(){

    fetch("http://localhost:3000/equipamento")
    .then(res => res.json())
    .then(data => {
        data.forEach(e => {
            if(e.ativo == 1){
                let card = document.querySelector('.poduto').cloneNode(true);
                
            }

        })
    })
}