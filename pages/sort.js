//Offer multiple ways of selecting standup candidates:
//- in the order provided
//- reverse alphabetically

const array1 = ['Alex', 'Ben', 'Zuri', 'Mihnea', 'Rox', 'Hera', "Piutz"];
const array2 = ['Alex', 'Ben', 'Zuri', 'Mihnea', 'Rox', 'Hera', "Piutz"];
const array3 = ['Alex', 'Ben', 'Zuri', 'Mihnea', 'Rox', 'Hera', "Piutz"];
const array4 = ['Alex', 'Ben', 'Zuri', 'Mihnea', 'Rox', 'Hera', "Piutz"];

//- random - using Durstenfeld shuffle algorithm

const randomSort = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//- alphabetically

const alphabeticallySort = (array) => {
  return array.sort();
}

const showSort = () => {
  return(
    <div>
    {randomSort(array1)}
    <br />
    {alphabeticallySort(array2)}
    </div>
  )
}

export default showSort
