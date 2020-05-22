'use strict'

const createGrid = () => {
  let gridHtml = ''
  for (let i = 0; i < 200; i++) {
    gridHtml += '<div class="square"></div>'
  }
  document.getElementById('grid').innerHTML = gridHtml
}

document.addEventListener('DOMContentLoaded', () => {
  createGrid()
})
