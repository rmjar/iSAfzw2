export const sumArray = arr => (
  arr.reduce((sum, n) => sum + n, 0)
)

export function countElements(arr) {
  return arr.reduce((acc, el) => {
    if (acc[el]) acc[el]++
    else acc[el] = 1

    return acc
  }, {})
}

function square(arr) {
  return arr.map(n => n * n)
}

export {square}
