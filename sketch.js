const width = window.innerWidth
const height = window.innerHeight

let barWidth = 2
let increment = height / (width / barWidth)
let barCount = Math.floor(width / barWidth)

/** @type {Array<{value: number, colour: p5.Color}>} */
let array
let mySelect
let barsSelect
let selectedSort
let drawingType = 'Regular'

// alert('Use landscape mode for best results!')

function setup() {
  mySelect = createSelect()
  barsSelect = createSelect()

  mySelect.position(windowWidth / 2 - 75, 10)
  barsSelect.position(windowWidth / 2 + 75, 10)
  mySelect.addClass('selector')

  mySelect.changed(() => {
    selectedSort = mySelect.value()
    resetAnimation()
  })

  barsSelect.changed(() => {
    drawingType = barsSelect.value()
    resetAnimation()
  })

  const selectOptions = [
    '-Select a sort-',
    'Bubble Sort',
    'Cocktail Shaker Sort',
    'Heap Sort',
    'Insertion Sort',
    'LSD Radix Sort',
    'Merge Sort',
    'Odd-even Sort',
    'Quick Sort',
    'Selection Sort',
    'Shell Sort',
  ]

  selectOptions.forEach((option) => {
    mySelect.option(option)
  })

  barsSelect.option('Regular')
  barsSelect.option('Pyramid')

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
    case 'Selection Sort':
      barWidth = sortingConfig['Selection Sort']
      updateAndCreateArray()
      selectionSort(array)
      break
    case 'Insertion Sort':
      barWidth = sortingConfig['Insertion Sort']
      updateAndCreateArray()
      insertionSort(array)
      break
    case 'Cocktail Shaker Sort':
      barWidth = sortingConfig['Cocktail Shaker Sort']
      updateAndCreateArray()
      cocktailSort(array)
      break
    case 'Odd-even Sort':
      barWidth = sortingConfig['Odd-even Sort']
      updateAndCreateArray()
      oddEvenSort(array)
      break
    case 'Merge Sort':
      barWidth = 5
      updateAndCreateArray()
      mergeSort(array)
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
  drawLines(array, drawingType)
}
