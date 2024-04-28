/**
 * Sorts an array using the merge sort algorithm asynchronously.
 *
 * @param {Array<{value: number, colour: string}>} arr - The array to partition.
 */
async function mergeSort(array) {
  await recursiveMergeSort(array, 0, array.length - 1)
}

/**
 *
 * @param {Array<{value: number, colour: string}>} arr - The array to partition.
 * @param {number} left The index of the left part of the array
 * @param {number} right The index of the right part of the array
 */
async function recursiveMergeSort(array, left, right) {
  if (left < right) {
    let middle = int((left + right) / 2)
    // await Promise.all([
    //   recursiveMergeSort(array, left, middle),
    //   recursiveMergeSort(array, middle + 1, right),
    // ])
    // await merge(array, left, middle, right)
    await recursiveMergeSort(array, left, middle)
    await recursiveMergeSort(array, middle + 1, right)
    await merge(array, left, middle, right)
  }
}

/**
 * Merge two sorted subarrays into one sorted array.
 *
 * @param {Array<{value: number, colour: string}>} array - The array to partition.
 * @param {number} left - The starting index of the left subarray.
 * @param {number} middle - The ending index of the left subarray and the starting index of the right subarray.
 * @param {number} right - The ending index of the right subarray.
 * @return {Promise<void>} A Promise that resolves after the merge operation is completed.
 */
async function merge(array, left, middle, right) {
  let l = left
  let r = middle + 1

  let sorted = []
  while (l <= middle && r <= right) {
    await sleep()

    if (array[l].value < array[r].value) {
      sorted.push(array[l++])
    } else {
      sorted.push(array[r++])
    }
  }

  if (l > middle) {
    while (r <= right) {
      sorted.push(array[r++])
    }
  } else {
    while (l <= middle) {
      sorted.push(array[l++])
    }
  }

  let index = 0
  for (let i = left; i <= right; i++) {
    array[i] = sorted[index++]
    await sleep()
  }
}
