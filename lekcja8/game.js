class Game {
    constructor() {
        this.gameContainer = document.getElementById('game');

        this.cross = new Cross();

        this.gameContainer.addEventListener('mousemove',
            (event) => {
                this.cross.update(event.offsetX, event.offsetY);
            });

        this.gameContainer.addEventListener('click',
            (event) => {
                this.cross.update(event.offsetX, event.offsetY);
                console.log('click ' + this.cross.x, this.cross.y);
            });

        this.enemies = []
        this.enemies.push(new Enemy());
        this.enemies.push(new Enemy());
        this.enemies.forEach(enemy =>
            this.gameContainer.appendChild(enemy.enemyElement));
    }
}


class Cross {
    constructor(x = 100, y = 100) {
        this.x = x;
        this.y = y;
        this.crossElement = document.getElementById('cross');
    }

    update(x, y) {
        this.x = x;
        this.y = y;
        this.crossElement.style.top = y + 'px';
        this.crossElement.style.left = x + 'px';
    }
}

class Enemy {
    constructor() {
        this.x = Math.floor(Math.random() * 399);
        this.y = Math.floor(Math.random() * 399);

        const element = document.createElement("div");
        element.classList.add('enemy');
        element.style.top = this.y + 'px';
        element.style.left = this.x + 'px';
        this.enemyElement = element;
    }
}

const game = new Game();