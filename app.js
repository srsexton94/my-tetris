'use strict'

const createGrid = grid => {
  let gridHtml = ''
  for (let i = 0; i < 210; i++) {
    if (i >= 200) {
      gridHtml += '<div class="taken"></div>'
    } else {
      gridHtml += '<div></div>'
    }
  }
  grid.innerHTML = gridHtml
}

const random = () => {
  return ['l', 'z', 't', 'o', 'i'][Math.floor(Math.random()*5)]
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  createGrid(grid)

  let cells = Array.from(document.querySelectorAll('.grid div'))
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

  // function newArr() {
  //   const rotation = 0
  //   return shapes[random()][0]
  // }

  let position = 4
  let current = shapes[random()][0]

  const draw = () => {
    current.forEach(i => {
      cells[position + i].classList.add('shape')
    })
  }

  const erase = () => {
    current.forEach(i => {
      cells[position + i].classList.remove('shape')
    })
  }

  const stop = () => {
    if (current.some(i => cells[position + i + base].classList.contains('taken'))) {
      current.forEach(i => cells[position + i].classList.add('taken'))
      current = shapes[random()][0]
      position = 4
      draw()
    }
  }

  timerId = setInterval(falling, 250)

  function falling() {
    erase()
    position += base
    draw()
    stop()
  }
})
