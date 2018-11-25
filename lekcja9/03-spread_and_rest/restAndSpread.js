function findMaxAndMin(arr) {
  return {
    max: Math.max(...arr),
    min: Math.min(...arr)
  }
}

function printRanking([first, second, third, ...rest]) {
  return `
    I miejsce: ${first}
    II miejsce: ${second}
    III miejsce: ${third}
    pozostali: ${rest.join(` `)}
  `
}
