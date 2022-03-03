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

function checkGameOver(computerScore, playerScore, playCount) {
  if (playCount === 5) {
    if (computerScore > playerScore) {
      title.style.fontSize = '1em';
      title.innerHTML = 'Computer wins!';
    }
    else if (computerScore < playerScore) {
      title.style.fontSize = '1em';
      title.innerHTML = 'Player wins!';
    }
    else if (computerScore === playerScore) {
      title.style.fontSize = '1em';
      title.innerHTML = 'Tie!';
    }
    else {
      return;
    }
  }
}
const buttons = document.querySelectorAll('button');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const computerScoreTotal = document.querySelector('#computerScoreTotal');
const playerScoreTotal = document.querySelector('#playerScoreTotal');
const tieCount = document.querySelector('#tieCount');
const title = document.querySelector('h1');

let computerScore = 0;
let playerScore = 0;
let tieTotal = 0;
let playerMove = '';
let playCount = 0;

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
   else if (computerMove === 'rock') {
     ++tieTotal;
   }
   else if (computerMove === 'scissors') {
     ++playerScore;
   };
   
   computerScoreTotal.textContent = computerScore;
   playerScoreTotal.textContent = playerScore;
   tieCount.textContent = tieTotal;
   ++playCount;
   checkGameOver(computerScore, playerScore, playCount)
});

paper.addEventListener('click', () => {
  playerMove = 'paper';
  computerMove = convertCPtoString(parseInt(computerPlay(0, 3)));
  
  if (computerMove === 'rock') {
    ++playerScore;
  }
  else if (computerMove === 'paper') {
    ++tieTotal;
  }
  else if (computerMove === 'scissors') {
    ++computerScore;
  };
  
  computerScoreTotal.textContent = computerScore;
  playerScoreTotal.textContent = playerScore;
  tieCount.textContent = tieTotal;
  ++playCount;
  checkGameOver(computerScore, playerScore, playCount)
});

scissors.addEventListener('click', () => {
  playerMove = 'scissors';
  computerMove = convertCPtoString(parseInt(computerPlay(0, 3)));
  
  if (computerMove === 'rock') {
    ++computerScore;
  }
  else if (computerMove === 'scissors') {
    ++tieTotal;
  }
  else if (computerMove === 'paper') {
    ++playerScore;
  };
  
  computerScoreTotal.textContent = computerScore;
  playerScoreTotal.textContent = playerScore;
  tieCount.textContent = tieTotal;
  ++playCount;
  checkGameOver(computerScore, playerScore, playCount)
});
