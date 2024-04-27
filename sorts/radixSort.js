const logBase = (n, base) => Math.log(n) / Math.log(base)

/**
 * Returns the digit at a specified position in a number's radix representation.
 *
 * @param {number} number - The number to extract the digit from.
 * @param {number} digit - The position of the digit to extract.
 * @param {number} radix - The value of the radix to be used for the sort.
 * @return {number} The digit at the specified position.
 */
function getDigit(number, digit, radix) {
  return Math.floor(Math.abs(number) / Math.pow(radix, digit)) % radix
}

/**
 * Calculates the number of digits in a given number.
 *
 * @param {number} number - The number to count digits for.
 * @param {number} radix - The value of the radix to be used for the sort.
 * @return {number} The count of digits in the given number.
 */
function digitCount(number, radix) {
  if (number === 0) return 1
  return Math.floor(logBase(Math.abs(number), radix)) + 1
}

/**
 * Calculates the maximum number of digits in a given array of numbers.
 *
 * @param {number[]} nums - The array of numbers to calculate the maximum number of digits from.
 * @param {number} radix - The value of the radix to be used for the sort.
 * @return {number} The maximum number of digits in the given array of numbers.
 */
function mostDigits(nums, radix) {
  let maxDigits = 0
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i], radix))
  }
  return maxDigits
}

/**
 * Sorts an array of objects asynchronously using the radix sort algorithm.
 *
 * @param {Array<{value: number, color: p5.color}>} array - The array to be sorted.
 * @param {number} radix - The value of the radix to be used for the sort.
 * @return {Promise<void>} A Promise that resolves after the array has been sorted.
 */
async function radixSort(array, radix) {
  const maxCount = mostDigits(
    array.map((obj) => obj.value),
    radix
  )

  for (let k = 0; k < maxCount; k++) {
    let buckets = Array.from({ length: radix }, () => [])

    for (let i = 0; i < array.length; i++) {
      let digit = getDigit(array[i].value, k, radix)
      buckets[digit].push(array[i])
    }

    let index = 0
    for (let i = 0; i < buckets.length; i++) {
      while (buckets[i].length > 0) {
        array[index++] = buckets[i].shift()
        await sleep()
      }
    }
  }
}
