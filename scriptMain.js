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

function playRound(playerSelection) {
  let computerChoice = getComputerChoice()
  if (computerChoice === 'rock' && playerSelection === 'paper') {
    return 'You Won! Paper beats Rock'
  } else if (computerChoice === 'paper' && playerSelection === 'rock') {
    return 'You Lose! Paper beats Rock'
  }

  else if (computerChoice === 'scissors' && playerSelection === 'rock') {
    return 'You Won! Rock beats Scissors'
  } else if (computerChoice === 'rock' && playerSelection === 'scissors') {
    return 'You Lose! Rock beats Scissors'
  }

  else if (computerChoice === 'paper' && playerSelection === 'scissors') {
    return 'You Won! Scissors beats Paper'
  } else if (computerChoice === 'scissors' && playerSelection === 'paper') {
    return 'You Lose! Scissors beats Paper'
  }
  else if (computerChoice === playerSelection) {
    return 'It\'s a tie'
  }
}


const results = document.querySelector('.results')

let availableTurns = 5;


addEventListener('click', (e) => {
  if (availableTurns > 0) {
    let elemTarget = e.target;
    let playerChoice = elemTarget.id;
    let round = playRound(playerChoice)
    results.textContent = `${round} ${availableTurns} turns left`
    --availableTurns
  }
})