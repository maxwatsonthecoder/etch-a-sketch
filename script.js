const containerDiv = document.getElementById("container");
const containerWidth = 600;
const btn16 = document.getElementById("btn16");
const btn32 = document.getElementById("btn32");
const btn64 = document.getElementById("btn64");
const blackRadio = document.getElementById("black");
const randomRadio = document.getElementById("random");

let columns;
let squareSize;
let countOfSquares;

document.addEventListener('DOMContentLoaded', btn16Click);
//loads 16x16 grid at startup

function btn16Click() {
    columns = 16;
    countOfSquares = columns * columns;
    squareSize = containerWidth / columns;
    createGrid();
}

function btn32Click() {
    columns = 32;
    countOfSquares = columns * columns;
    squareSize = containerWidth / columns;
    createGrid();
}

function btn64Click() {
    columns = 64;
    countOfSquares = columns * columns;
    squareSize = containerWidth / columns;
    createGrid();
}

function createGrid() {
    containerDiv.innerHTML = "";

    for (let i = 0; i < countOfSquares; i++) {
        let square = document.createElement("div");
        square.classList.add("gridSquare");
        containerDiv.appendChild(square);
        square.style.flexBasis = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseover", function() {
            if (blackRadio.checked) {
                square.style.backgroundColor = "black";
            } else if (randomRadio.checked) {
                square.style.backgroundColor = generateColor();
            }
        });

        function generateColor() {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            square.style.backgroundColor = "#" + randomColor;
        }  
       
    }
};


createGrid();

document.getElementById("btn16").addEventListener("click", btn16Click);
document.getElementById("btn32").addEventListener("click", btn32Click);
document.getElementById("btn64").addEventListener("click", btn64Click);




//Add scratch off fn. (or opacity setting)
// Style site! Show/hide gridlines fn.
