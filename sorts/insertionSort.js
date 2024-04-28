/**
 * Sorts an array using the insertion sort algorithm asynchronously.
 *
 * @param {Array<{value: number, colour: string}>} array - The array to be sorted.
 * @return {Promise<void>} A Promise that resolves after the array has been sorted.
 */
async function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i - 1; j > -1; j--) {
      if (array[j].value > array[j + 1].value) {
        await sleep()
        swap(array, j, j + 1)
      }
    }
  }
}
