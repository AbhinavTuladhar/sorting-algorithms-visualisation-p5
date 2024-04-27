/**
 * Swaps the elements at indices i and j in the given array.
 *
 * @param {Array<{value: number, colour: string}>} array - The array in which to swap elements.
 * @param {number} i - The index of the first element to swap.
 * @param {number} j - The index of the second element to swap.
 * @param {number} [delay=1] - The delay in milliseconds before swapping the elements.
 * @return {Promise<void>} A Promise that resolves after the elements have been swapped.
 */
async function swap(array, i, j) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}
