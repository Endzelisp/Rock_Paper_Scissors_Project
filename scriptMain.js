function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;

  switch (randomNum) {
    case 1:
      return 'rock'
    case 2:
      return 'paper'
    case 3:
      return 'scissors'
  };
}

/* gameRules describe the 3 posible wining options */

const gameRules = [['paper', 'rock'], ['scissors', 'paper'], ['rock', 'scissors']];

function playRound(playerSelection) {
  let playerWin = false;
  let computerChoice = getComputerChoice();
  if (playerSelection === computerChoice) return {message : `It's a tie`, validRound : 0,};
  for (let i = 0; i < 3; ++i) {
    if (playerSelection === gameRules[i][0] && computerChoice === gameRules[i][1]) {
      playerWin = true
      break
    }
  }
  if (playerWin) {
    return {
      message : `You won this round ${playerSelection} beats ${computerChoice}`,
      validRound : 1,
      winner : 'player',
    };
  };
  return {
    message : `You lose this round ${computerChoice} beats ${playerSelection}`,
    validRound : 1,
    winner : 'computer',
  };
};

const results = document.querySelector('.results');

let availableTurns = 5;

let playerPoints = 0;
let computerPoints = 0

const validOptions = ['rock', 'paper', 'scissors']

addEventListener('click', (e) => {
  if (availableTurns > 0) {
    let elemTarget = e.target;
    let playerChoice = elemTarget.id;

    // validOptions avoid eventListener function to be completed
    // if the user click outside option icons

    if (!validOptions.includes(playerChoice)) return
    let roundResult = playRound(playerChoice)
    if (roundResult.winner === 'player') {
      ++playerPoints
    } else if (roundResult.winner === 'computer') {
      ++computerPoints
    }
    availableTurns -= roundResult.validRound;
    results.textContent = `${roundResult.message} ${availableTurns} left`
  };
  if (availableTurns === 0) {
    (playerPoints > computerPoints) ?
      results.textContent = `Player Won with ${playerPoints} points`:
      results.textContent = `Computer Won with ${computerPoints} points`
  }
});


function intro () {
  setTimeout(() => {
    const introTextEl = document.querySelector('.container p');
    introTextEl.remove()
  }, 3000)

  setTimeout(() => {
    document.querySelector('.results').classList.remove('intro-effect')
    document.querySelector('.game-buttons').classList.remove('intro-effect')
  }, 3800)
}

intro()