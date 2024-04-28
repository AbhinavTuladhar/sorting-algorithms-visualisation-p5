/**
 * Sorts an array using the Shell sort algorithm asynchronously.
 *
 * @param {Array<{value: number, colour: string}>} array - The array to be sorted.
 * @return {Promise<void>} A Promise that resolves after the array has been sorted.
 */
async function shellSort(array) {
  console.log(array)
  let N = array.length

  // Start with a big gap, then reduce the gap
  for (let gap = Math.floor(N / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // Do a gapped insertion sort for this gap size.
    for (let i = gap; i < N; i++) {
      let temp = array[i].value
      let tempColour = array[i].colour
      let j
      for (j = i; j >= gap && array[j - gap].value > temp; j -= gap) {
        await sleep()
        array[j].value = array[j - gap].value
        array[j].colour = array[j - gap].colour
      }
      // await sleep(delay)
      array[j].value = temp
      array[j].colour = tempColour
    }
  }
}
