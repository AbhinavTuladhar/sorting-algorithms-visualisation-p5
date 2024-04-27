/**
 * Convert an array into heap
 * @param {Array<{ value: number, color: p5.color}> } array An array of objects with two keys - the value itself and the corresponding colour
 * @param {Number}                                N      The length of the array
 * @param {Number}                                i      The index of the parent element.
 */
async function heapify(array, N, i) {
  // Assume that the root node is the larger one
  let largest = i
  let left = 2 * i + 1
  let right = left + 1

  if (left < N && array[left].value > array[largest].value) {
    largest = left
  }

  if (right < N && array[right].value > array[largest].value) {
    largest = right
  }

  // if largest is not the root
  if (largest !== i) {
    swap(array, i, largest)
    await heapify(array, N, largest)
  }
}

/**
 * Builds a max heap from the given array asynchronously.
 *
 * @param {Array<{ value: number, color: p5.color}>} array - An array of objects with value and color properties.
 * @return {Promise<void>} A Promise that resolves after the max heap is built.
 */
async function buildMaxHeap(array) {
  const N = array.length

  for (let i = Math.floor(N / 2) - 1; i >= 0; i--) {
    await sleep()
    await heapify(array, N, i)
  }
}

/**
 * Sorts an array using the heap sort algorithm asynchronously.
 *
 * @param {Array<{ value: number, color: p5.color }>} array - The array to be sorted.
 * @return {Promise<void>} A Promise that resolves after the array has been sorted.
 */
async function heapSort(array) {
  // Heapify the array
  await buildMaxHeap(array)

  // Perform the sort
  for (let i = array.length - 1; i > 0; i--) {
    await sleep()
    swap(array, 0, i)
    await heapify(array, i, 0)
  }
}
