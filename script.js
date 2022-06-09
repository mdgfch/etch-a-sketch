let input = 16;
for (let j = 0; j < input; j++) {
    for (let i = 0; i < input; i++) {
        const div = document.createElement("div");
        div.setAttribute('id', 'cell');
        div.style.border = "px solid black";
        div.style.backgroundColor = "white";
    
        document.getElementById("container").appendChild(div);
    }    
};

function setDimensions() {
    input = prompt("How many squares would you like per side?")
}

const cells = document.querySelectorAll('#cell');

cells.forEach(cell => {
    cell.addEventListener("mouseover", function() {
    cell.style.backgroundColor = "black";
    });
})


