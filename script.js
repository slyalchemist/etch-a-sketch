const container = document.querySelector(".container");
let row;
let column;

function createGrid(){
    for(row = 0; row < 16; row++){
        const rowDiv = document.createElement("div");
        container.appendChild(rowDiv);
        rowDiv.classList.add("row");
        for(column = 0; column < 16; column++){
            const columnDiv = document.createElement("div");
            rowDiv.appendChild(columnDiv);
            columnDiv.classList.add("square");
            console.log("Made a square!");

        }
    }
}

createGrid();