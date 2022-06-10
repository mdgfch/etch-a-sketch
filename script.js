let input = 16;
let length = 50;
color = "black";

function setGrid() {
    for (let j = 0; j < input; j++) {
        for (let i = 0; i < input; i++) {
            const div = document.createElement("div");
            div.setAttribute('id', 'cell');
            div.style.border = "px solid black";
            div.style.backgroundColor = "white";
        
            document.getElementById("canvas").appendChild(div);
        }    
    };
}

function setDimensions() {
    do {
        input = prompt("Enter a value between 1 and 100");
    } while (input < 1 || input > 100);
    length = 800 / input;
    document.getElementById('canvas').style.gridTemplateColumns = `repeat(${input}, ${length}px)`;
    document.getElementById('canvas').style.gridAutoRows = `${length}px`;
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
        cell.style.backgroundColor = color;
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

const redbtn = document.getElementById("redbtn");
redbtn.style.backgroundColor = "red";
redbtn.style.color = "white";
redbtn.addEventListener("click", function() {
    color = "red";
})
const bluebtn = document.getElementById("bluebtn");
bluebtn.style.backgroundColor = "blue";
bluebtn.style.color = "white";
bluebtn.addEventListener("click", function() {
    color = "blue";
})
const greenbtn = document.getElementById("greenbtn");
greenbtn.style.backgroundColor = "green";
greenbtn.style.color = "white";
greenbtn.addEventListener("click", function() {
    color = "green";
})
const blackbtn = document.getElementById("blackbtn");
blackbtn.style.backgroundColor = "black";
blackbtn.style.color = "white";
blackbtn.addEventListener("click", function() {
    color = "black";
})



