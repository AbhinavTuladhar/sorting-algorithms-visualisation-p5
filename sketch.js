const width = window.innerWidth
const height = window.innerHeight

let barWidth = 2
let increment = height / (width / barWidth)
let barCount = Math.floor(width / barWidth)

/** @type {Array<{value: number, colour: p5.Color}>} */
let array

// All the select tags
let mySelect
let barsSelect
let radixSelect

// 'state' variables
/** * @type {'Regular' | 'Pyramid'} */
let drawingType = 'Regular'
/**  @type {string} */
let selectedSort
/**  @type {string} */
let selectedRadix

// alert('Use landscape mode for best results!')

function setup() {
  mySelect = createSelect()
  barsSelect = createSelect()
  radixSelect = createSelect()

  mySelect.position(windowWidth / 2 - 75, 10)
  barsSelect.position(windowWidth / 2 + 75, 10)
  radixSelect.position(-100, -100)
  mySelect.addClass('selector')

  mySelect.changed(() => {
    selectedSort = mySelect.value()
    resetAnimation()
  })

  barsSelect.changed(() => {
    drawingType = barsSelect.value()
    resetAnimation()
  })

  radixSelect.changed(() => {
    selectedRadix = radixSelect.value()
    resetAnimation()
  })

  const radixSelectOptions = [2, 3, 4, 5, 6, 7, 8, 9, 10, 16]

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

  radixSelectOptions.forEach((option) => {
    radixSelect.option(option.toString())
  })

  createCanvas(windowWidth, windowHeight)

  array = makeArray(increment, barCount)
  array = shuffle(array)
}

function resetAnimation() {
  switch (selectedSort) {
    case 'Bubble Sort':
      barWidth = sortingConfig['Bubble Sort']
      radixSelect.position(-100, -100)
      updateAndCreateArray()
      bubbleSort(array)
      break
    case 'Quick Sort':
      barWidth = sortingConfig['Quick Sort']
      radixSelect.position(-100, -100)
      updateAndCreateArray()
      quickSort(array, 0, array.length - 1)
      break
    case 'Heap Sort':
      barWidth = sortingConfig['Heap Sort']
      radixSelect.position(-100, -100)
      updateAndCreateArray()
      heapSort(array)
      break
    case 'LSD Radix Sort':
      barWidth = sortingConfig['LSD Radix Sort']
      updateAndCreateArray()
      radixSelect.position(windowWidth / 2, 30)
      radixSort(array, +selectedRadix)
      break
    case 'Shell Sort':
      barWidth = sortingConfig['Shell Sort']
      radixSelect.position(-100, -100)
      updateAndCreateArray()
      shellSort(array)
      break
    case 'Selection Sort':
      barWidth = sortingConfig['Selection Sort']
      radixSelect.position(-100, -100)
      updateAndCreateArray()
      selectionSort(array)
      break
    case 'Insertion Sort':
      barWidth = sortingConfig['Insertion Sort']
      radixSelect.position(-100, -100)
      updateAndCreateArray()
      insertionSort(array)
      break
    case 'Cocktail Shaker Sort':
      barWidth = sortingConfig['Cocktail Shaker Sort']
      radixSelect.position(-100, -100)
      updateAndCreateArray()
      cocktailSort(array)
      break
    case 'Odd-even Sort':
      barWidth = sortingConfig['Odd-even Sort']
      radixSelect.position(-100, -100)
      updateAndCreateArray()
      oddEvenSort(array)
      break
    case 'Merge Sort':
      barWidth = sortingConfig['Merge Sort']
      radixSelect.position(-100, -100)
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
