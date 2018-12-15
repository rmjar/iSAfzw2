let points = 0;
function simpleEvent() {
    const delay = {
        ms: 0,
    }
    const x = parseInt(Math.random() * (window.innerWidth - 100), 10);
    const y = parseInt(Math.random() * (window.innerHeight - 100), 10);

    const d = document.createElement('div');
    d.style.cssText = `position: absolute; left: ${x}px; top: ${y}px; width: 100px; height: 100px; background: yellow`;
    const innerInterval = setInterval(() => calcMs(delay) , 10);
    d.onclick = () => {
        d.remove();
        clearInterval(innerInterval);
        points += parseInt((3000 - delay.ms) / 10 , 10);
        const el = document.getElementById('points');
        el.innerText = `Points: ${points}`;
    }
    const timeout = setTimeout(() => {
        d.remove();
        clearInterval(innerInterval)
    }
        , 3000);
    document.body.appendChild(d);
}

function calcMs(delay) {
    delay.ms +=10;
}


const interval = setInterval(simpleEvent, 2000);