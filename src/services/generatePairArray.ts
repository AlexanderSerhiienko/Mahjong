const amount = 30 // There is amount of numbers, that should be generated. There is a limit of 100 cards due to limitations of task.

function shuffle(array: number[]): number[] {
  for (let i = array.length - 1; i > 0; i--) {
    let j: number = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export const generatePairArray = () => {
  const pickedNumbers: number[] = []
  for (let i = 0; i < amount / 2; ) {
    const randomNumber = Math.floor(Math.random() * 50) + 1
    if (!pickedNumbers.includes(randomNumber)) {
      i++
      pickedNumbers.push(randomNumber)
    }
  }

  return shuffle(pickedNumbers.concat(pickedNumbers))
}
