/**
 * Draws lines based on the given array of objects.
 *
 * @param {Array<{value: number, colour: string}>} array - The array of objects containing 'value' and 'colour' properties.
 * @param {string} drawingType - The type of drawing to use. Can be 'regular' or 'pyramid'.
 */
const drawLines = (array, drawingType) => {
  noStroke()
  array.forEach((obj, index) => {
    const { value, colour } = obj
    fill(colour)
    if (drawingType === 'Pyramid') {
      push()
      translate(0, windowHeight / 2 - value / 2)
      rect(index * barWidth, 0, barWidth, value)
      pop()
    } else {
      rect(index * barWidth, height - value, barWidth, value)
    }
  })
}
