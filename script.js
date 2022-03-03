function computerPlay(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

function convertCPtoString(cM) {
  switch (cM) {
    case (0):
      return 'rock';
    case (1):
      return 'paper';
    case (2):
      return 'scissors';
  };
};

function doGame(playerMove, computerMove) {
  if (playerMove === 'rock') {
    switch (computerMove) {
      case 'rock':
      ++tieCount;
      return 'Tie!';
      case 'paper':
      ++computerScore;
      return 'You lose!';
      case 'scissors':
      ++playerScore;
      return 'You win!';
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
      ++computerScore;
      return 'You lose!';
      case 'paper':
      ++playerScore;
      return 'You win!';
      case 'scissors':
      ++tieCount;
      return 'Tie!';
    };
  };
};

let computerScore = 0;
let playerScore = 0;
let tieCount = 0;
let playerMove = '';

const buttons = document.querySelectorAll('button');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const computerScoreTotal = document.querySelector('#computerScoreTotal');
const playerScoreTotal = document.querySelector('#playerScoreTotal');
const scissors = document.querySelector('#scissors');

buttons.forEach((button) => {
  button.addEventListener('mouseover', () => {
    button.style.borderWidth = '4px'; 
  })
  button.addEventListener('mouseout', () => {
    button.style.borderWidth = '2px'; 
  })
});

rock.addEventListener('click', () => {
   playerMove = 'rock';
   computerMove = convertCPtoString(parseInt(computerPlay(0, 3)));
   if (computerMove === 'paper') {
     ++computerScore;
   }
   else if (computerMove === 'scissors') {
     ++playerScore;
   };
   computerScoreTotal.textContent = computerScore;
   playerScoreTotal.textContent = playerScore;
});

paper.addEventListener('click', () => {
  playerMove = 'paper';
  computerMove = convertCPtoString(parseInt(computerPlay(0, 3)));
  if (computerMove === 'rock') {
    ++playerScore;
  }
  else if (computerMove === 'scissors') {
    ++computerScore;
  };
  computerScoreTotal.textContent = computerScore;
  playerScoreTotal.textContent = playerScore;
});

scissors.addEventListener('click', () => {
  playerMove = 'scissors';
  computerMove = convertCPtoString(parseInt(computerPlay(0, 3)));
  if (computerMove === 'rock') {
    ++computerScore;
  }
  else if (computerMove === 'paper') {
    ++playerScore;
  };
  computerScoreTotal.textContent = computerScore;
  playerScoreTotal.textContent = playerScore;
});

/* for (var x = 0; x < 5; ++x) {
  let playerMove = getPlayerMove()
  let computerMove = convertCPtoString(parseInt(computerPlay(0, 3)))

  console.log(`You played ${playerMove}`)
  console.log(`Computer played ${computerMove}`)
  console.log(doGame(playerMove, computerMove))
  console.log(`The score is:\nPlayer: ${playerScore}\nComputer: ${computerScore}`)
}; */