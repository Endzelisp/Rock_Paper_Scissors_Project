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
  let playerSelection = prompt('Type your selection: rock, paper, scissors');
  playerSelection = playerSelection.toLowerCase()
  if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
    console.log('Wrong Imput');
    return
  };
  return playerSelection
};

console.log(getComputerChoice())

console.log(playerSelection())