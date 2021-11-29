var table = document.querySelector("#data");

var task = document.querySelector("#input");

function btn_create() {
    let row = document.createElement("tr");

    for (let i = 0; i < 1; i++) {
        let col = document.createElement("td");
        let data = [task.value]

        col.innerHTML = data[i];

        row.appendChild(col);
    }

    task.value = "";

    let buttonAlert = document.createElement("button");
    buttonAlert.innerHTML = "<img src = 'img/alert.png'>";

    buttonAlert.addEventListener("click", () => {
        btn_alert(buttonAlert);
    });

    let colAlert = document.createElement("td");
    colAlert.appendChild(buttonAlert);

    row.appendChild(colAlert);


    let buttonTrash = document.createElement("button");
    buttonTrash.innerHTML = "<img src = 'img/trash.png'>";

    buttonTrash.addEventListener("click", () => {
        btn_trash(buttonTrash);
    });

    let colTrash = document.createElement("td");
    colTrash.appendChild(buttonTrash);

    row.appendChild(colTrash);

    table.appendChild(row);
}

function btn_alert(e) {
    e.parentNode.parentNode.setAttribute("bgcolor", "#FF7878")
}

function btn_trash(e) {
    e.parentNode.parentNode.remove();
}