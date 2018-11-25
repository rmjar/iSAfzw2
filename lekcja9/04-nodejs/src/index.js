// Speech generator
// https://www.wykop.pl/cdn/c3201142/comment_ppN63JDKHNlZV9AR9U3SrIErCXkPTBJL.jpg

const cow = require('cowsay')
const dataset = require('./dataset')
const randomElement = require('./random')

const speech = dataset
  .map(randomElement)
  .join(' ')

console.log('\x1Bc') // Clear terminal

console.log(
  cow.say({
    text: speech,
    r: true, // Get random cow
    W: 50 // Wrap words after 50th column
  })
)
