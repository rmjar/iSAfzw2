describe('blackFridayAlert()', () => {
  it('should return information if all data was specified', () => {
    const result = blackFridayAlert({
      item: 'Laptop HP',
      off: 25,
      hour: 17
    })
    
    chai.expect(result).to.equal('Laptop HP taniej o 25% do godziny 17')
  })


  it('should use "10" as a default off value', () => {
    const result = blackFridayAlert({
      item: 'iPhone',
      hour: 17
    })
    
    chai.expect(result).to.equal('iPhone taniej o 10% do godziny 17')
  })

  it('should use "24" as a default hour', () => {
    const result = blackFridayAlert({
      item: 'Smart TV',
      off: 90
    })
    
    chai.expect(result).to.equal('Smart TV taniej o 90% do godziny 24')
  })
})

describe('getRanking()', () => {
  it('should return valid ranking', () => {
    chai
      .expect(getRanking(['Adam', 'Ola', 'Jan']))
      .to.equalIgnoreSpaces(`
        1: Adam
        2: Ola
        3: Jan
      `)
  })
})

describe('getFilmRating()', () => {
  it('should return valid ranking', () => {
    const film = {
      title: 'Obywatel Kane',
      rating: {
        cast: 4,
        music: 3,
        script: 5
      }
    }
    
    chai
      .expect(getFilmRating(film))
      .to.equalIgnoreSpaces(`
        Oceny dla filmu Obywatel Kane:
        Obsada: 4
        Muzyka: 3
        Scenariusz: 5
      `)
  })

  it('should replace empty values with "0"', () => {
    const film = {
      title: 'Ojciec chrzestny',
      rating: {
        cast: 5
      }
    }

    chai
      .expect(getFilmRating(film))
      .to.equalIgnoreSpaces(`
        Oceny dla filmu Ojciec chrzestny:
        Obsada: 5
        Muzyka: 0
        Scenariusz: 0
      `)
  })
})
