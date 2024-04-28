/**
 * Sorts an array using the Cocktail Shaker Sort algorithm asynchronously.
 *
 * @param {Array<{value: number, colour: string}>} array - The array to be sorted.
 * @return {Promise<void>} A Promise that resolves after the array has been sorted.
 */
async function cocktailSort(array) {
  let i
  let swapped = true
  while (swapped) {
    swapped = false
    for (let i = 0; i < array.length - 2; i++) {
      if (array[i].value > array[i + 1].value) {
        await sleep()
        swap(array, i, i + 1)
        swapped = true
      }
    }
    if (!swapped) {
      break
    }
    swapped = false
    for (let i = array.length - 2; i > 0; i--) {
      if (array[i].value > array[i + 1].value) {
        await sleep()
        swap(array, i, i + 1)
        swapped = true
      }
    }
  }
}
