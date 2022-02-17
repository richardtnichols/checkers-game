function computerPlay(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function convertCPtoString(cM) {
  switch (cM) {
    case (0):
      return 'rock'
    case (1):
      return 'paper'
    case (2):
      return 'scissors'
  }
}

function doGame(playerMove, computerMove) {
  if (playerMove === 'rock') {
    switch (computerMove) {
      case 'rock':
      ++tieCount  
      return 'Tie!'
      case 'paper':
      ++computerScore  
      return 'You lose!'
      case 'scissors':
      ++playerScore  
      return 'You win!'
    }
  }
  if (playerMove === 'paper') {
    switch (computerMove) {
      case 'rock':
      ++playerScore  
      return 'You win!'
      case 'paper':
      ++tieCount  
      return 'Tie!'
      case 'scissors':
      ++computerScore  
      return 'You lose!'
    }
  }
  if (playerMove === 'scissors') {
    switch (computerMove) {
      case 'rock':
      ++computerScore  
      return 'You lose!'
      case 'paper':
      ++playerScore  
      return 'You win!'
      case 'scissors':
      ++tieCount  
      return 'Tie!'
    }
  }
}

function getPlayerMove() {
  return window.prompt("Please type \"rock\", \"paper\", or \"scissors.\"").toLowerCase()
}

let computerScore = 0
let playerScore = 0
let tieCount = 0

for (var x = 0; x < 5; ++x) {
  let playerMove = getPlayerMove()
  let computerMove = convertCPtoString(parseInt(computerPlay(0, 3)))

  console.log(`You played ${playerMove}`)
  console.log(`Computer played ${computerMove}`)
  console.log(doGame(playerMove, computerMove))
  console.log(`The score is:\nPlayer: ${playerScore}\nComputer: ${computerScore}`)
}