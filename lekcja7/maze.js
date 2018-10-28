const board = [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 2]
]

const playerInitPosition = {
    x: 0,
    y: 0,
}


function Game() {
    this.board = board;
    this.playerPosition = playerInitPosition;
    this.init();
}


//jeśli można dodajemy funkcję do prototypu, bo wtedy dziedziczące obiekty jej nie duplikują
Game.prototype.init = function () {
    this.render();
    document.addEventListener('keydown', (event) => {
        const newPlayerPosition = {};
        switch (event.code) {
            case 'ArrowUp':
                newPlayerPosition.x = this.playerPosition.x;
                newPlayerPosition.y = this.playerPosition.y - 1;
                break;
            case 'ArrowDown':
                newPlayerPosition.x = this.playerPosition.x;
                newPlayerPosition.y = this.playerPosition.y + 1;
                break;
            case 'ArrowLeft':
                newPlayerPosition.x = this.playerPosition.x - 1;
                newPlayerPosition.y = this.playerPosition.y;
                break;
            case 'ArrowRight':
                newPlayerPosition.x = this.playerPosition.x + 1;
                newPlayerPosition.y = this.playerPosition.y;
                break
            default:
                return;
        }

        changePlayerPosition.call(this, newPlayerPosition);
    });
}



function changePlayerPosition(newPlayerPosition) {
    if (newPlayerPosition.x >= 0 &&
        newPlayerPosition.y >= 0 &&
        newPlayerPosition.x < board[0].length &&
        newPlayerPosition.y < board.length) {
        if (this.board[newPlayerPosition.y][newPlayerPosition.x] === 1) {
            newPlayerPosition.x = 0;
            newPlayerPosition.y = 0;
        } else if (this.board[newPlayerPosition.y][newPlayerPosition.x] === 2) {
            alert ('Sukces!!!');

        }
        this.playerPosition = newPlayerPosition;
        this.render();
    }
}

function createBoard(values) {
    const game = document.getElementById("game");
    game.innerHTML = "";
    values.forEach((v, i) => {
        const row = createRow.call(this, v, i);
        game.appendChild(row);
    });
}

function createRow(values, i) {
    const row = document.createElement("tr");
    values.forEach((v, j) => {
        const field = createField.call(this, v, i, j);
        row.appendChild(field);
    });
    return row;
}

function createField(value, i, j) {
    const field = document.createElement("td");
    let nVal = value
    if (i === this.playerPosition.y && j === this.playerPosition.x) {
        nVal = 3;
    }
    field.innerText = nVal;
    let fieldClass;
    switch (nVal) {
        case 0:
            fieldClass = "empty";
            break;
        case 1:
            fieldClass = "wall";
            break;
        case 2:
            fieldClass = "exit";
            break;
        case 3:
            fieldClass = "hero";
            break;
        default:
    }
    field.classList.add(fieldClass);
    return field;
}

Game.prototype.render = function () {
    createBoard.call(this, board);
}




new Game();