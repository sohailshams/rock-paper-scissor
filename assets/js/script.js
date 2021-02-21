function rpsGame(yourChoice) {
  let userChoice, pcChoice;
  userChoice = yourChoice.id;
  pcChoice = numberToChoice(randomToIntiger());
  result = winner(userChoice, pcChoice);
  message = winnerMessage(result);
  imageMessage(userChoice, pcChoice, message);
  refreshButton();
  fontResize();
}

function randomToIntiger() {
  return (randomNumber = Math.floor(Math.random() * 3));
}

function numberToChoice(number) {
  return ['rock', 'paper', 'scissor'][number];
}

function winner(userChoice, pcChoice) {
  let gameData = {
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
    return { message: 'Draw', color: 'blue' };
  } else {
    return { message: 'You Lost', color: 'red' };
  }
}

function imageMessage(yourChoice, pcChoice, message) {
  let imageData = {
    rock: document.getElementById('rock').src,
    paper: document.getElementById('paper').src,
    scissor: document.getElementById('scissor').src,
  };

  // remove images on click
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissor').remove();

  let userDiv = document.createElement('div');
  let pcDiv = document.createElement('div');
  let messageDiv = document.createElement('div');

  userDiv.innerHTML =
    "<img src='" +
    imageData[yourChoice] +
    "' height=160 style='box-shadow:0px 10px 50px rgba(86 22 189 / 87%); margin-right: 10px'>";
  messageDiv.innerHTML =
    "<h1 style='color: " +
    message['color'] +
    "; font-size: 50px; font-family: Akaya Telivigala; text-align:center'>" +
    message['message'] +
    '</h1>';
  pcDiv.innerHTML =
    "<img src='" +
    imageData[pcChoice] +
    "' height=160 style='box-shadow:0px 10px 50px rgba(236 33 33 / 87%); '>";

  document.getElementById('final-image1').appendChild(userDiv);
  document.getElementById('final-message').appendChild(messageDiv);
  document.getElementById('final-image2').appendChild(pcDiv);
}

function refreshButton() {
  let reloadButton = document.createElement('input');
  reloadButton.setAttribute('type', 'button');
  reloadButton.setAttribute('name', 'name');
  reloadButton.setAttribute('value', "Let's play Again");
  reloadButton.setAttribute('class', 'btn-refresh');
  reloadButton.onclick = function () {
    document.location.reload();
  };
  document.getElementById('final-message').appendChild(reloadButton);
}

function fontResize() {
  let resizeFont = document.getElementById('rock-img');
  resizeFont.classList.remove('img-rock');
}
