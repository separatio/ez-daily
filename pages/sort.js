//Offer multiple ways of selecting standup candidates:
//- in the order provided
//- alphabetically
//- reverse alphabetically

const array = [1, 2, 3, 4, 5];

//- random - using Durstenfeld shuffle algorithm

const randomSort = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const showSort = () => {
  return(
    <div>{randomSort(array)}</div>
  )
}

export default showSort
