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

function removeGrid(){
    for(row = 0; row < gridSize; row++){
        const rowDiv = document.querySelector(".row");
        for(column = 0; column < gridSize; column++){
            const columnDiv = document.querySelector(".square");
            rowDiv.removeChild(columnDiv);
        }
        container.removeChild(rowDiv);
    }
}

createGrid();


const btn = document.querySelector("button");
let newGridSize;

btn.addEventListener("click", () => {
    newGridSize = prompt("Enter the grid size: ");
    while(newGridSize > 64){
        newGridSize = prompt("Size too large. Please enter a grid size less than 64: ");
    }
    removeGrid();
    gridSize = newGridSize;
    createGrid();    
    }
);

