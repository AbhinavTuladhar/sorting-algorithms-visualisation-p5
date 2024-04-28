/**
 * Sorts an array using the selection sort algorithm asynchronously.
 *
 * @param {Array<{value: number, colour: string}>} array - The array to be sorted.
 * @return {Promise<void>} A Promise that resolves after the array has been sorted.
 */
async function selectionSort(array) {
  let min
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      min = i
      if (array[j].value < array[min].value) {
        min = j
      }
      if (min !== i) {
        await sleep()
        swap(array, i, min)
      }
    }
  }
}
