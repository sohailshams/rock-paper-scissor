function rpsGame(yourChoice) {
  let userChoice, pcChoice;
  userChoice = yourChoice.id;
  pcChoice = numberToChoice(randomToIntiger());
}

function randomToIntiger() {
  return (randomNumber = Math.floor(Math.random() * 3));
}

function numberToChoice(number) {
  return ['rock', 'paper', 'scissor'][number];
}
