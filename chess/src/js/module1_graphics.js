const rowOrColumnLength = 8;

function creatField(color, colNumber) {
    const field = document.createElement("div");
    field.classList.add("field", color);
    field.setAttribute("col", colNumber);

    const fieldInside = document.createElement("div");
    fieldInside.classList.add("field-inside");
    field.appendChild(fieldInside);
    return field;
}

function createRow(rowNumber) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.setAttribute("row", rowNumber);

    for (let i = 1; i <= rowOrColumnLength; i++) {
        const color = (i + rowNumber) % 2 ? "white" : "black";
        const field = creatField(color, i);
        row.appendChild(field);
    }
    return row;
}


function drawChessBoard() {
    const board = document.getElementById("board");

    for (let i = rowOrColumnLength; i > 0; i--) {
        const row = createRow(i);
        board.appendChild(row);
    }
}


function createFigure(animalName) {
    const figure = document.createElement("div");
    figure.classList.add("figure", animalName);
    return figure;
}


function findField(col, row) {
    const field = document.querySelector(`[row="${row}"] [col="${col}"]`);
    return field;
}


function placeFigure(figureName, col, row) {
    const field = findField(col, row);
    const figure = createFigure(figureName);
    field.firstChild.appendChild(figure);
}