function rpsGame(yourChoice) {
  let userChoice, pcChoice;
  userChoice = yourChoice.id;
  pcChoice = numberToChoice(randomToIntiger());
  result = winner(userChoice, pcChoice);
  message = winnerMessage(result);
  console.log(message);
}

function randomToIntiger() {
  return (randomNumber = Math.floor(Math.random() * 3));
}

function numberToChoice(number) {
  return ['rock', 'paper', 'scissor'][number];
}

function winner(userChoice, pcChoice) {
  var gameData = {
    rock: {
      scissor: 1,
      rock: 0.5,
      paper: 0,
    },
    paper: {
      rock: 1,
      paper: 0.5,
      scissor: 0,
    },
    scissor: {
      paper: 1,
      scissor: 0.5,
      rock: 0,
    },
  };
  let userScore = gameData[userChoice][pcChoice];
  let pcScore = gameData[pcChoice][userChoice];
  return [userScore, pcScore];
}

function winnerMessage([userScore, pcScore]) {
  if (userScore > pcScore) {
    return { message: 'You Won', color: 'green' };
  } else if (userScore === pcScore) {
    return { message: 'Tie', color: 'grey' };
  } else {
    return { message: 'You Lost', color: 'red' };
  }
}
