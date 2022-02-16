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
    if (computerMove === 'rock') {
      return 'Tie!'
    }
    if (computerMove === 'paper') {
      return 'You lose!'
    }
    if (computerMove === 'scissors') {
      return 'You win!'
    }
  }
  else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      return 'You win!'
    }
    if (computerMove === 'paper') {
      return 'Tie!'
    }
    if (computerMove === 'scissors') {
      return 'You lose!'
    }
  }
  else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      return 'You lose!'
    }
    if (computerMove === 'paper') {
      return 'You win!'
    }
    if (computerMove === 'scissors') {
      return 'Tie!'
    }
  }
}

let playerMove = window.prompt("Please type \"rock\", \"paper\", or \"scissors.\"")
let computerMove = convertCPtoString(parseInt(computerPlay(0, 3)))

console.log(`Computer played ${computerMove}`)
console.log(doGame(playerMove, computerMove))
