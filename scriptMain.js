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

const answerValidator = (valueToCheck, validValuesArray) => {
  return validValuesArray.includes(valueToCheck)};

function playerSelection(round) {
  let playerSelection = prompt(`${round} turn left. Type your selection: rock, paper, scissors`).toLowerCase();
  while (!answerValidator(playerSelection, GAME_OPTIONS)) {
    playerSelection = prompt(`Wrong typing, your options are: rock, paper, scissors`).toLowerCase();
}
  return playerSelection
};

function playRound(computerChoice, playerSelection) {
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

function composeFuntion(playerSelect, compSelect, singleRound) {
  return (roundNum) => singleRound(compSelect(),playerSelect(roundNum))
}

const gameRound = composeFuntion(playerSelection, getComputerChoice, playRound)

function game() {
  let userPoints = 0;
  let roundResult;

  for (let i = 5; 0 < i; --i) {
    roundResult = gameRound(i);
    if (roundResult.slice(0, 7) === 'You Won') {
      console.log(roundResult)
      ++userPoints
    } else if (roundResult.slice(-3) === 'tie') {
      ++i;
      console.log(`You have another chance ${roundResult}`)
    } else {
      console.log(roundResult)
    }
  }

  (userPoints >= 3) ?
                  console.log(`You're a WINNER.!! you won ${userPoints} of ${i} rounds`)
                : console.log('This time machine beats you :(');
  
}

game()