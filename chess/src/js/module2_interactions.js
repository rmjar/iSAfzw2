function setEventListeners() {
    const figures = document.querySelectorAll(".figure");

    for (let item of figures) {
        item.addEventListener("click", showPossibleMoves);
    }

    document.addEventListener("click", function (event) {
        if (event.target.closest(".possible_move")) {
            moveFigure(event.target.closest(".possible_move"));
        } else {
            hideAllPossibleMoves();
        }
    });
}

function moveFigure(moveToField) {
    const fromCol = moveToField.dataset.fromCol;
    const fromRow = moveToField.dataset.fromRow;

    const figure = findField(fromCol, fromRow).querySelector(".figure");
    moveToField.firstChild.appendChild(figure);
    hideAllPossibleMoves();
}

function hideAllPossibleMoves() {
    const items = document.querySelectorAll(".possible_move");
    for (let item of items) {
        item.classList.remove("possible_move");
    }
}

function showPossibleMoves(event) {
    event.stopPropagation();
    hideAllPossibleMoves();

    const clickedFigure = event.target;
    const col = +clickedFigure.closest(".field").getAttribute("col");
    const row = +clickedFigure.closest(".row").getAttribute("row");

    const newRow = clickedFigure.classList.contains("wolf") ? row - 1 : row + 1;
    const colLeft = col - 1;
    const colRight = col + 1;

    if (newRow < 1 || newRow > 8) {
        return;
    }

    if (colLeft > 0 && colLeft < 9) {
        if (isFieldEmpty(colLeft, newRow)) {
            const field = findField(colLeft, newRow);
            field.classList.add("possible_move");
            field.dataset.fromCol = col;
            field.dataset.fromRow = row;
        }
    }

    if (colRight > 0 && colRight < 9) {
        if (isFieldEmpty(colRight, newRow)) {
            const field = findField(colRight, newRow)
            field.classList.add("possible_move");
            field.dataset.fromCol = col;
            field.dataset.fromRow = row;
        }
    }
}

function isFieldOccupied(col, row) {
    return findField(col, row).querySelector(".figure");
}

function isFieldEmpty(col, row) {
    return !isFieldOccupied(col, row);
}

