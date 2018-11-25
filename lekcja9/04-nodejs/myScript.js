const dataset = require('./dataset');
const cowsay = require('cowsay');

const rnd = () => Math.floor(Math.random() * 3);

console.log(`${dataset[0][rnd()]} ${dataset[1][rnd()]} ${dataset[2][rnd()]} ${dataset[3][rnd()]}`);

console.log( cowsay.say(
    {
        text: "Hello",
        e: "oO",
        T: "U"
    }

));