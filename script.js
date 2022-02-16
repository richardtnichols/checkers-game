function computerPlay(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function convertCPtoString(cM) {
  if (cM === 0) {
    return 'rock'
  }
  else if (cM === 1) {
    return 'paper'
  }
  else if (cM === 2) {
    return 'scissors'
  }
}

function doGame(playerMove, computerMove) {
  if (playerMove === 'rock') {
    switch (computerMove) {
      case 'rock':
        return 'Tie!'
      case 'paper':
        return 'You lose!'
      case 'scissors':
        return 'You win!'
    }
  }
  if (playerMove === 'paper') {
    switch (computerMove) {
      case 'rock':
        return 'You win!'
      case 'paper':
        return 'Tie!'
      case 'scissors':
        return 'You lose!'
    }
  }
  if (playerMove === 'scissors') {
    switch (computerMove) {
      case 'rock':
        return 'You lose!'
      case 'paper':
        return 'You win!'
      case 'scissors':
        return 'Tie!'
    }
  }
}

let playerMove = window.prompt("Please type \"rock\", \"paper\", or \"scissors.\"")
let computerMove = convertCPtoString(parseInt(computerPlay(0, 3)))

console.log(`Computer played ${computerMove}`)
console.log(doGame(playerMove, computerMove))
