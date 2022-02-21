//Definido um vetor com o nome de todas as imagens repeditas duas vezes
const verso = "background-image: url(../img/ponto.png)"

//Um vetor de estilos css com as imagens duplicadas
var styles = [
    "background-image: url(../img/html.png);",
    "background-image: url(../img/html.png);",
    "background-image: url(../img/css.png);",
    "background-image: url(../img/css.png);",
    "background-image: url(../img/js.png);",
    "background-image: url(../img/js.png);",
    "background-image: url(../img/python.jpg);",
    "background-image: url(../img/python.jpg);"
]

//Define um objeto para todas as frentes das cartas
var cards = {
    "btn1": [document.getElementById("btn1"),styles[0], false],
    "btn2": [document.getElementById("btn2"),styles[1], false],
    "btn3": [document.getElementById("btn3"),styles[2], false],
    "btn4": [document.getElementById("btn4"),styles[3], false],
    "btn5": [document.getElementById("btn5"),styles[4], false],
    "btn6": [document.getElementById("btn6"),styles[5], false],
    "btn7": [document.getElementById("btn7"),styles[6], false],
    "btn8": [document.getElementById("btn8"),styles[7], false]
}

var lastCard = ""

var tries = 0

//Vira a carta ao clicar nela
function flipCard(e) {
    if (cards[e.id][2]) {
        e.setAttribute("style", verso)
        cards[e.id][2] = false
    } else {
        e.setAttribute("style", cards[e.id][1])
        cards[e.id][2] = true
    }
}

function showAll(){
    for(i = 1; i <= 8; i++){
        cards["btn"+i][0].setAttribute("style", cards["btn"+i][1])
        cards["btn"+i][2] = true
    }
}
function hideAll(){
    for(i = 1; i <= 8; i++){
        cards["btn"+i][0].setAttribute("style", verso)
        cards["btn"+i][2] = false
    }
}

//Embaralha as cartas
function shuffle(){
    styles = shuffleArray(styles)
    cards = {
        "btn1": [document.getElementById("btn1"),styles[0], false],
        "btn2": [document.getElementById("btn2"),styles[1], false],
        "btn3": [document.getElementById("btn3"),styles[2], false],
        "btn4": [document.getElementById("btn4"),styles[3], false],
        "btn5": [document.getElementById("btn5"),styles[4], false],
        "btn6": [document.getElementById("btn6"),styles[5], false],
        "btn7": [document.getElementById("btn7"),styles[6], false],
        "btn8": [document.getElementById("btn8"),styles[7], false]
    }
}

//Função útil que Embaralha um vetor
function shuffleArray(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    // Retornando array com aleatoriedade
    return arr
}

function play(e){
    if(lastCard === ""){
        flipCard(e)
        e.removeAttribute("onclick")
        lastCard = e.id
    }else{
        flipCard(e)
        if(cards[e.id][1] == cards[lastCard][1]){
            e.removeAttribute("onclick")
            lastCard = ""
            console.log("acertou")
        }else{
            console.log("errou")
            count()
            wait()
            setTimeout(() => {
                flipCard(e)
                flipCard(cards[lastCard][0])
                lastCard = ""
                backGame()
            }, 1000)    
            cards[lastCard][0].setAttribute("onclick", "play(this)")        
        }
        
    }
    
}

function wait(){
    for (i = 1; i <= 8; i++)
        cards["btn" + i][0].removeAttribute("onclick")
}

function backGame(){
    for (i = 1; i <= 8; i++)
        if(!cards["btn" + i][2])
        cards["btn" + i][0].setAttribute("onclick", "play(this)")
}

function count(){
    tries ++
    document.querySelector("h3").innerHTML = "Tries: " + tries
}
