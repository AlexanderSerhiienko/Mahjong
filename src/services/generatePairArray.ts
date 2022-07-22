function shuffle(array: number[]): number[] {
  for (let i = array.length - 1; i > 0; i--) {
    let j: number = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const getPrimes = (min: number, max: number) => {
  const result = Array(max + 1)
    .fill(0)
    .map((_, i) => i)
  for (let i = 2; i <= Math.sqrt(max + 1); i++) {
    for (let j = i ** 2; j < max + 1; j += i) delete result[j]
  }
  return Object.values(result.slice(Math.max(min, 2)))
}

const getRandNum = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min)

const getRandPrime = (min: number, max: number) => {
  const primes = getPrimes(min, max)
  return primes[getRandNum(0, primes.length - 1)]
}

export const generatePairArray = () => {
  const pickedNumbers: number[] = []
  for (let i = 0; i < 15; ) {
    const randomNumber = getRandPrime(1, 50)
    if (!pickedNumbers.includes(randomNumber)) {
      i++
      pickedNumbers.push(randomNumber)
    }
  }

  return shuffle(pickedNumbers.concat(pickedNumbers))
}
