const width = window.innerWidth
const height = window.innerHeight

let barWidth = 2
let increment = height / (width / barWidth)
let barCount = Math.floor(width / barWidth)

/** @type {Array<{value: number, colour: p5.Color}>} */
let array
let mySelect
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
    '-Select a sort-',
    'Bubble Sort',
    'Heap Sort',
    'Quick Sort',
    'LSD Radix Sort',
    // 'Cocktail Shaker Sort',
    // 'Insertion Sort',
    // 'Odd-even Sort',
    // 'Selection Sort',
    'Shell Sort',
  ]

  selectOptions.forEach((option) => {
    mySelect.option(option)
  })

  createCanvas(windowWidth, windowHeight)

  array = makeArray(increment, barCount)
  array = shuffle(array)
}

function resetAnimation() {
  switch (selectedSort) {
    case 'Bubble Sort':
      barWidth = sortingConfig['Bubble Sort']
      updateAndCreateArray()
      bubbleSort(array)
      break
    case 'Quick Sort':
      barWidth = sortingConfig['Quick Sort']
      updateAndCreateArray()
      quickSort(array, 0, array.length - 1)
      break
    case 'Heap Sort':
      barWidth = sortingConfig['Heap Sort']
      updateAndCreateArray()
      heapSort(array)
      break
    case 'LSD Radix Sort':
      barWidth = sortingConfig['LSD Radix Sort']
      updateAndCreateArray()
      radixSort(array, 8)
      break
    case 'Shell Sort':
      barWidth = sortingConfig['Shell Sort']
      updateAndCreateArray()
      shellSort(array)
      break
    default:
      break
  }
}

function updateDependentVariables() {
  increment = height / (width / barWidth)
  barCount = Math.floor(width / barWidth)
}

function updateAndCreateArray() {
  updateDependentVariables()
  array = makeArray(increment, barCount)
  array = shuffle(array)
}

function draw() {
  background(20)
  drawLines(array)
}
