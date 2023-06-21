function getComputerChoice() {
  let rps = ["rock", "paper", "scissors"];
  const selection = rps[Math.floor(Math.random() * rps.length)];
  return selection;
}

function playRound(playerSelection) {
  computerSelection = getComputerChoice();

  if (playerSelection == computerSelection) {
    return 0;
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return 1;
  } else {
    return -1;
  }
}
function game(playerSelection) {
  if ((playerScore == 5) || (computerScore ==5)) {
    if (playerScore == computerScore) {
      alert("TIE");
    } else if (playerScore > computerScore) {
      alert("WINNER");
    } else {
      alert("LOSER");
    }
    playerScore = 0;
    computerScore = 0;
  } else {
    var round = playRound(playerSelection);
    if (round == 1) {
      playerScore++;
    }
    if (round == -1) {
      computerScore++;
    }
  }
  document.querySelector(".player").textContent = playerScore;
  document.querySelector(".computer").textContent = computerScore;
}

var playerScore = 0;
var computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    game(button.id);
  });
});
