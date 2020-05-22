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
  const width = 10
})
