const width = window.innerWidth
const height = window.innerHeight
const barWidth = 1
const increment = height / (width / barWidth)
const barCount = Math.floor(width / barWidth)

let mySelect
let array

function setup() {
  mySelect = createSelect()

  mySelect.position(windowWidth / 2 - 100, 10)
  mySelect.addClass('selector')

  const selectOptions = [
    'Bubble sort',
    'Cocktail Shaker Sort',
    'Heap Sort',
    'Insertion Sort',
    'Odd-even Sort',
    'Quick Sort',
    'LSD Radix Sort',
    'Selection Sort',
    'Shell sort',
  ]

  selectOptions.forEach((option) => {
    mySelect.option(option)
  })

  createCanvas(windowWidth - 10, windowHeight)

  array = makeArray(increment, barCount)
  array = shuffle(array)
}

function draw() {
  background(20)
  stroke(255)
  drawLines(array)
}
