/**
 * Generates an array of objects containing values and colors based on the specified increment.
 *
 * @param {number} increment - The step value to increment by.
 * @param {number} barCount - The number of bars to generate.
 * @return An array of objects with 'value' and 'colour' properties.
 */
const makeArray = (increment, barCount) => {
  const arr = []

  const colourList = [
    color(255, 0, 0),
    color(255, 127, 0),
    color(255, 255, 0),
    color(0, 255, 0),
    color(0, 0, 255),
    color(255, 0, 255),
  ]

  let step = increment

  for (let i = 0; i < barCount; i++) {
    step += increment

    const fromColourIndex = floor(i / (barCount / (colourList.length - 1)))
    const toColourIndex = ceil(i / (barCount / (colourList.length - 1)))
    const pct =
      (i % (barCount / (colourList.length - 1))) /
      (barCount / (colourList.length - 1))
    const interColour = lerpColor(
      colourList[fromColourIndex],
      colourList[toColourIndex],
      pct
    )

    arr.push({
      value: step,
      colour: interColour,
    })
  }

  return arr
}
