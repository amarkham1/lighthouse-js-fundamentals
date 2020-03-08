const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  const coord = [0, 0];
  for (let move of moves) {
    if (move === 'north') {
      coord[1]++;
    } else if (move === 'south') {
      coord[1]--;
    } else if (move === 'east') {
      coord[0]++;
    } else if (move === 'west') {
      coord[0]--;
    } else {
      console.log("not a valid move");
    }
  }
  return coord;
}

console.log(finalPosition(moves));