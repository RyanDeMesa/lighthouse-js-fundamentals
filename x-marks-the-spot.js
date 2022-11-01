const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition(moves) {
  var start = [0,0]
  var end = []

  let x = start[0]
  let y = start[1]

  for ( const move of moves) {
    if (move === 'north'){
      y = y + 1
    } else if (move === 'west') {
      x = x - 1
    } else if (move === 'east') {
      x = x + 1
    } else if (move === 'south') {
      y = y - 1
    }
  }
  end.push(x,y)
  return end
}

finalPosition(moves);
console.log(finalPosition(moves))

