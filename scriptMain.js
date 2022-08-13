function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;

  switch (randomNum) {
    case 1:
      return 'paper'
    case 2:
      return 'scissors'
    case 3:
      return 'rock'
  }
}

console.log(getComputerChoice())