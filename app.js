'use strict'

const createGrid = grid => {
  let gridHtml = ''
  for (let i = 0; i < 200; i++) {
    gridHtml += '<div></div>'
  }
  grid.innerHTML = gridHtml
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  createGrid(grid)
  let squares = Array.from(document.querySelectorAll('.grid div'))
  const score = document.querySelector('#score')
  const base = 10

  const shapes = {
    l: [
      [1, base+1, base*2+1, 2],
      [base, base+1, base+2, base*2+2],
      [1, base+1, base*2+1, base*2],
      [base, base*2, base*2+1, base*2+2]
    ],
    z: [
      [0,base,base+1,base*2+1],
      [base+1, base+2,base*2,base*2+1],
      [0,base,base+1,base*2+1],
      [base+1, base+2,base*2,base*2+1]
    ],
    t: [
      [1,base,base+1,base+2],
      [1,base+1,base+2,base*2+1],
      [base,base+1,base+2,base*2+1],
      [1,base,base+1,base*2+1]
    ],
    o: [
      [0,1,base,base+1],
      [0,1,base,base+1],
      [0,1,base,base+1],
      [0,1,base,base+1]
    ],
    i: [
      [1,base+1,base*2+1,base*3+1],
      [base,base+1,base+2,base+3],
      [1,base+1,base*2+1,base*3+1],
      [base,base+1,base+2,base+3]
    ]
  }

  let place = 4
  let letter = ['l', 'z', 't', 'o', 'i'][Math.floor(Math.random()*5)]
  let current = shapes[letter][0]

  function draw() {
    current.forEach(i => {
      squares[place + i].classList.add('shape')
    })
  }

  draw()
})
