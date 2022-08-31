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

let gameRules = [['paper', 'rock'], ['scissors', 'paper'], ['rock', 'scissors']];

function playRound(playerSelection) {
  let playerWin = false;
  let computerChoice = getComputerChoice();
  console.log(`player: ${playerSelection} | computer: ${computerChoice}`);

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

addEventListener('click', (e) => {
  if (availableTurns > 0) {
    let elemTarget = e.target;
    let playerChoice = elemTarget.id;
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