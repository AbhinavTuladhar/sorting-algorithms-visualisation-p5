/**
 * Sorts an array using the Odd-Even Sort algorithm asynchronously.
 *
 * @param {Array<{value: number, colour: string}>} array - The array to be sorted.
 * @return {Promise<void>} A Promise that resolves after the array has been sorted.
 */
async function oddEvenSort(array) {
  let N = array.length
  let sorted = false
  while (!sorted) {
    sorted = true
    let temp = 0

    // Perform bubble sort on odd indexed element
    for (let i = 1; i <= N - 2; i += 2) {
      if (array[i].value > array[i + 1].value) {
        await sleep()
        swap(array, i, i + 1)
        sorted = false
      }
    }

    // Perform bubble sort on odd indexed element
    for (let i = 0; i <= N - 2; i += 2) {
      if (array[i].value > array[i + 1].value) {
        await sleep()
        swap(array, i, i + 1)
        sorted = false
      }
    }
  }
}
