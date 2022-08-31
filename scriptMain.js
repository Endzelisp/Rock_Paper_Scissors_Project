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

let gameRules = [['paper', 'rock'], ['scissors', 'paper'], ['rock', 'scissors']]


function playRound(playerSelection) {
  let playerWin = false;
  let computerChoice = getComputerChoice();
  console.log(`player: ${playerSelection} | computer: ${computerChoice}`);
  
  if (playerSelection === computerChoice) return `It's a tie`;

  for (let i = 0; i < 3; ++i) {
    if (playerSelection === gameRules[i][0] && computerChoice === gameRules[i][1]) {
      playerWin = true
      break
    }
  }

  if (playerWin) {
    return `You won this round ${playerSelection} beats ${computerChoice}`
  }
  return `You lose this round ${computerChoice} beats ${playerSelection}` 
}


const results = document.querySelector('.results')

//let availableTurns = 5;


addEventListener('click', (e) => {
//  if (availableTurns > 0) {
    let elemTarget = e.target;
    let playerChoice = elemTarget.id;
    let roundResult = playRound(playerChoice)
    results.textContent = `${roundResult}`
   // --availableTurns
 // }
})