/**
 * Asynchronously sorts an array using the quick sort algorithm.
 *
 * @param {Array<{value: number, colour: string}>} arr - The array to be sorted.
 * @param {number} start - The starting index for sorting.
 * @param {number} end - The ending index for sorting.
 */
async function quickSort(arr, start, end) {
  if (start >= end) {
    sortFlag = true
    return
  }

  const index = await partition(arr, start, end)
  await Promise.all([
    quickSort(arr, start, index - 1),
    quickSort(arr, index, end),
  ])
}

/**
 * Asynchronously partitions an array around a pivot element, returning the index of the pivot element.
 *
 * @param {Array<{value: number, colour: string}>} arr - The array to partition.
 * @param {number} start - The starting index of the partition.
 * @param {number} end - The ending index of the partition.
 * @return {Promise<number>} The index of the pivot element.
 */
async function partition(arr, start, end) {
  let pivotIndex = Math.floor((start + end) / 2)
  let pivotValue = arr[pivotIndex].value
  let leftPointer = start
  let rightPointer = end

  while (leftPointer <= rightPointer) {
    while (arr[leftPointer].value < pivotValue) {
      leftPointer++
    }

    while (arr[rightPointer].value > pivotValue) {
      rightPointer--
    }

    if (leftPointer <= rightPointer) {
      await swap(arr, leftPointer, rightPointer)
      leftPointer++
      rightPointer--
    }
  }
  return leftPointer
}
