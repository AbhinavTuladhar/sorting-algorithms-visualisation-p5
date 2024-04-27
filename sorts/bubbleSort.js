/**
 * Sorts an array using the bubble sort algorithm asynchronously.
 *
 * @param {Array<{value: number, colour: string}>} array - The array to be sorted.
 * @return {Promise<void>} A Promise that resolves after the array has been sorted.
 */
async function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j].value > array[j + 1].value) {
        await sleep()
        swap(array, j, j + 1)
      }
    }
  }
}
