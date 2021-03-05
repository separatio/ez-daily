//Offer the possibility to have some of the team members be selected first, or last in the standup

const array = ['Alex', 'Ben', 'Zuri', 'Mihnea', 'Rox', 'Hera', "Piutz"];
const priority = ['Rox', 'Ben'];

const setPriority = (array, priority) => {
  priority.reverse();

  for (let i = 0; i < priority.length; i++) {
    let member = priority[i];
    let indexOfMember = array.indexOf(member);
    array.splice(indexOfMember, 1);
    array.unshift(member);
  }

  return array;
}

const showQueue = () => {
  return(
    <div>
      {setPriority(array, priority)}
    </div>
  )
}

export default showQueue
