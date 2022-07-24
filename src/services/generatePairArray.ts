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

export const generatePairArray = () => {
  const primes = getPrimes(1, 50)
  return shuffle(primes.concat(primes))
}
