//- random - using Durstenfeld shuffle algorithm

const RandomSort = (array: any) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  console.log(array)
  return array
}

export default RandomSort
