function createGrid() {
    //need to create a for loop that creates 16 x 16 divs
    const containerDiv = document.getElementById("container");
    const newDiv = document.createElement("div");
    const test = document.createElement("p");
    test.innerHTML = "Test1"
    newDiv.innerHTML = "test2"
    containerDiv.appendChild(newDiv)
    containerDiv.appendChild(test)
}



createGrid();


