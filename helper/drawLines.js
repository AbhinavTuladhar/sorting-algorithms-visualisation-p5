/**
 * Draws lines based on the given array of objects.
 *
 * @param {Array<{value: number, colour: string}>} array - The array of objects containing 'value' and 'colour' properties.
 */
const drawLines = (array) => {
  noStroke()
  array.forEach((obj, index) => {
    const { value, colour } = obj
    fill(colour)
    rect(index * barWidth, height - value, barWidth, value)
  })
}
