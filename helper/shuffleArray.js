/**
 * Shuffles the elements of an array in place using the Fisher-Yates algorithm.
 *
 * @param {Array<{value: number, colour: string}>} array - The array to be shuffled.
 * @return {Array<{value: number, colour: string}>} - The shuffled array.
 */
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
