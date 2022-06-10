let input = 16;
let length = 50;

function setGrid() {
    for (let j = 0; j < input; j++) {
        for (let i = 0; i < input; i++) {
            const div = document.createElement("div");
            div.setAttribute('id', 'cell');
            div.style.border = "px solid black";
            div.style.backgroundColor = "white";
        
            document.getElementById("container").appendChild(div);
        }    
    };
}

function setDimensions() {
    do {
        input = prompt("Enter a value between 1 and 100");
    } while (input < 1 || input > 100);
    length = 800 / input;
    document.getElementById('container').style.gridTemplateColumns = `repeat(${input}, ${length}px)`;
    document.getElementById('container').style.gridAutoRows = `${length}px`;
}

function replaceGrid() {
    const cells = document.querySelectorAll('#cell');
    cells.forEach(cell => {
        cell.remove();
    });
}


function paintCells() {
    const cells = document.querySelectorAll('#cell');
    cells.forEach(cell => {
        cell.addEventListener("mouseover", function() {
        cell.style.backgroundColor = "black";
        });
    })
};

setGrid();
paintCells();

const size = document.getElementById("sizebtn");
size.style.margin = "12px";
size.addEventListener("click", function(){
    setDimensions();
    replaceGrid();
    setGrid();
    paintCells();
});


