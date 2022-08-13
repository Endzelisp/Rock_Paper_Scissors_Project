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

const GAME_OPTIONS = 'rock paper scissors'

function playerSelection() {
  let playerSelection = prompt(`Type your selection: rock, paper, scissors`).toLowerCase();
  if (!GAME_OPTIONS.includes(playerSelection)) {
    return 0
  };
  return playerSelection
};

function playRound(computer, player) {
  let computerChoice = computer();
  let playerSelection = player();

  /* In case the player inputs a wrong answer lose that round*/
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
  let roundResult;
  let rounds = 5;

  for (let i = 0; i < rounds; i++) {
    roundResult = playRound(getComputerChoice, playerSelection);
    if (roundResult.slice(0, 7) === 'You Won') {
      console.log(roundResult)
      ++finalResult
    } else if (roundResult.slice(-3) === 'tie') {
      ++rounds;
      console.log(`You have another chance ${roundResult}`)
    } else {
      console.log(roundresult)
    }
  }

  console.log('The final result is:' + finalResult)
  if (finalResult >= 3) {
    console.log('You\'re a WINNER.!!')
  } else {
    console.log('This time the machine beats you :(')
  }
}

game()