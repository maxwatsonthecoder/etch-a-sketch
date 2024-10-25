const containerDiv = document.getElementById("container");
const containerWidth = 600;
let columns = 10;
let squareSize = containerWidth / columns;


function createGrid() {
    //need to create a for loop that creates 16(256), 32(1024), 64x(4096) divs
    for (let i = 0; i < 100; i++) {
        let square = document.createElement("div");
        square.classList.add("gridSquare");
        containerDiv.appendChild(square);
        square.style.flexBasis = `${squareSize}px`;

        square.addEventListener("mouseover", function() {
            square.style.backgroundColor = "red";

        })


       
    }
}


createGrid();


