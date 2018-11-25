describe('findMaxAndMin()', () => {
  it('should return object with min and max keys', () => {
    const keys = Object.keys(findMaxAndMin([])).sort()

    chai.expect(keys).to.deep.equal(['max', 'min'])
  })
  
  it('should return valid min and max values', () => {
    const result = findMaxAndMin([4, 6, 2, 8, 100, -100])

    chai.expect(result.min).to.equal(-100)
    chai.expect(result.max).to.equal(100)
  })
})


describe('printRanking()', () => {
  it('should return object with min and max keys', () => {
    chai
      .expect(printRanking(['Ola', 'Jan', 'Adam', 'Kasia', 'Paweł']))
      .to.equalIgnoreSpaces(`
        I miejsce: Ola
        II miejsce: Jan
        III miejsce: Adam
        pozostali: Kasia Paweł
      `)
  })
})
