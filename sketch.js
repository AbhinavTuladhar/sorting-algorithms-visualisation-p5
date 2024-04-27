const width = window.innerWidth
const height = window.innerHeight
const barWidth = 1
const increment = height / (width / barWidth)
const barCount = Math.floor(width / barWidth)

let mySelect
/** @type {Array<{value: number, colour: p5.Color}>} */
let array

let selectedSort

function setup() {
  mySelect = createSelect()

  mySelect.position(windowWidth / 2 - 100, 10)
  mySelect.addClass('selector')

  mySelect.changed(() => {
    selectedSort = mySelect.value()
    resetAnimation()
  })

  const selectOptions = [
    'Cocktail Shaker Sort',
    'Bubble sort',
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

  createCanvas(windowWidth, windowHeight)

  array = makeArray(increment, barCount)
  array = shuffle(array)
}

function resetAnimation() {
  array = makeArray(increment, barCount)
  array = shuffle(array)
  switch (selectedSort) {
    case 'Bubble sort':
      bubbleSort(array)
      break
    case 'Quick Sort':
      quickSort(array, 0, array.length - 1)
      break
    default:
      break
  }
}

function draw() {
  background(20)
  drawLines(array)
}
