/**
 * Asynchronously sleeps for a given number of milliseconds.
 *
 * @param {number} ms - The number of milliseconds to sleep. Default is 10.
 * @return {Promise<void>} A Promise that resolves after the specified number of milliseconds.
 */
async function sleep(ms = 2) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
