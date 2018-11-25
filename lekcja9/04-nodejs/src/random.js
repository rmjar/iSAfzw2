function randomArrayElement(arr) {
  const {length} = arr
  const rand = Math.floor(Math.random() * (length))

  return arr[rand]
}

module.exports = randomArrayElement
