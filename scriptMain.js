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

function playerSelection() {
  let playerSelection = prompt(`Type your selection: rock, paper, scissors`);
  playerSelection = playerSelection.toLowerCase()
  if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
    return 0
  };
  return playerSelection
};

function playRound(computer, player) {
  let computerChoice = computer();
  let playerSelection = player();

  /* In case the player input a wrong answer lose this round*/
  if (playerSelection === 0) {
    return 'What\'s that? you lose a round'
  }

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

function game() {
  let finalResult = 0;
  let roundresult;

  for (let i = 0; i < rounds; i++) {
    roundresult = playRound(getComputerChoice, playerSelection);
    if (roundresult.slice(0, 8) === 'You Won') {
      console.log(roundresult)
      ++finalResult
    } else if (roundresult.slice(-3) === 'tie') {
      ++rounds;
      console.log(`You have another chance ${roundresult}`)
    } else {
      console.log(roundresult)
    }
  }

  if (finalResult >= 3) {
    console.log('You\'re a fucking WINNER.!!')
  } else {
    console.log('This time the machine beats you :(')
  }
}

  let rounds = 5;

game()