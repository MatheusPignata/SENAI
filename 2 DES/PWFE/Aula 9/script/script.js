var num_turns = 0;
var turn = "X";
var winner = "*";
var btn_game = document.querySelectorAll(".btn_game")

function new_game() {
    num_turns = 0
    turn = "X";
    winner = "*";
    document.querySelector("h3").innerHTML = "Click to play";
    btn_game.forEach(btn => btn.innerHTML = "");
    btn_game.forEach(btn => btn.setAttribute("onclick", "once_clicked(this)"));
};

function is_winning(x1, x2, x3) {
    if (x1 == x2 && x1 == x3) {
        winner = x1;
    };
};

function has_won() {
    if (document.querySelector("#a1").innerHTML != "") {
        is_winning(document.querySelector("#a1").innerHTML, document.querySelector("#a2").innerHTML, document.querySelector("#a3").innerHTML);

        is_winning(document.querySelector("#a1").innerHTML, document.querySelector("#b1").innerHTML, document.querySelector("#c1").innerHTML);

        is_winning(document.querySelector("#a1").innerHTML, document.querySelector("#b2").innerHTML, document.querySelector("#c3").innerHTML);
    };
    if (document.querySelector("#a2").innerHTML != "") {
        is_winning(document.querySelector("#a2").innerHTML, document.querySelector("#b2").innerHTM, document.querySelector("#c2").innerHTML);
    };
    if (document.querySelector("#a3").innerHTML != "") {
        is_winning(document.querySelector("#a3").innerHTML, document.querySelector("#b3").innerHTML, document.querySelector("#c3").innerHTML);

        is_winning(document.querySelector("#a3").innerHTML, document.querySelector("#b2").innerHTML, document.querySelector("#c1").innerHTML);
    };
    if (document.querySelector("#b1").innerHTML != "") {
        is_winning(document.querySelector("#b1").innerHTML, document.querySelector("#b2").innerHTML, document.querySelector("#b3").innerHTML);
    };
    if (document.querySelector("#c1").innerHTML != "") {
        is_winning(document.querySelector("#c1").innerHTML, document.querySelector("#c2").innerHTML, document.querySelector("#c3").innerHTML);
    };

}

function once_clicked(e) {
    if (e.innerHTML === "") {
        e.innerHTML = turn;
        num_turns++;

        if (turn == "X") {
            turn = "O"
        } else {
            turn = "X"
        }
        document.querySelector("h3").innerHTML = turn + "'s turn"
        has_won();

        if (winner != "*") {
            document.querySelector("h3").innerHTML = winner + " has won the game!"
            game_over();
        } else if (num_turns == 9) {
            document.querySelector("h3").innerHTML = "It's a tie!"
        };


    };

};

function game_over() {
    btn_game.forEach(btn => btn.removeAttribute("onclick"));
}