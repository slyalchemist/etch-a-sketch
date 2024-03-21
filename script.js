const container = document.querySelector(".container");
let row;
let column;
let gridSize = 16;

function createGrid(){
    for(row = 0; row < gridSize; row++){
        const rowDiv = document.createElement("div");
        container.appendChild(rowDiv);
        rowDiv.classList.add("row");
        for(column = 0; column < gridSize; column++){
            const columnDiv = document.createElement("div");
            rowDiv.appendChild(columnDiv);
            columnDiv.classList.add("square");
            console.log("Made a square!");
            columnDiv.addEventListener("mousemove", () => {
                columnDiv.classList.toggle("colored");
            })
        }
    }
}

createGrid();


const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    gridSize = prompt("Enter the grid size: ");
    createGrid();    
    }
);