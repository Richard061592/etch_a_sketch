const grid = document.getElementById("grid");

const evenNum = document.getElementById("input-field")

function makeRows(rows, cols) {
    let rows = evenNum;
    let cols = evenNum;
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++)
    {
        let cell = document.createElement('div');
        cell.innerText = (c + 1);
        grid.appendChild(cell).className = "grid-item";
    };
};

function reset() {

};

makeRows();

reset();