var gameBoard = [[],[],[],[],[],[],[],[],[]];
const content = document.querySelector(".content");
var bool = 0;
function checkWin() {
    for (let index = 0; index < gameBoard.length; index++) {
        document.getElementById(index).textContent = gameBoard[index];
      }  
  if (
    (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) ||
    (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) ||
    (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) ||
    (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) ||
    (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) ||
    (gameBoard[2] === gameBoard[1] && gameBoard[2] === gameBoard[8]) ||
    (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) ||
    (gameBoard[6] === gameBoard[4] && gameBoard[6] === gameBoard[2])
  ) {
    document.getElementById("popup").style.display = 'block'
    return true;
  } else {
    return false;
  }
}
function reset (){
    gameBoard = [[],[],[],[],[],[],[],[],[]];
    bool = 0
    document.getElementById("popup").style.display = 'none'
    checkWin()

}

function placeO(grid) {
  if (gameBoard[grid.id].length === 0) {
    gameBoard[grid.id] = "O";
    return true;
  } else return false;
}
function placeX(grid) {
  if (gameBoard[grid.id].length === 0) {
    gameBoard[grid.id] = "X";
    return true;
  } else return false;
}

function play(grid) {
  if (bool) {
    if (placeO(grid)) {
      bool = !bool;
    }
  } else {
    if (placeX(grid)) {
      bool = !bool;
    }
  }
  if (checkWin()) {
    console.log("winner");
  }
}

for (let index = 0; index < 9; index++) {
  const grid = document.createElement("div");
  grid.setAttribute("id", index);
  grid.classList.add("square");
  grid.onclick = function place() {
    play(grid);
  };
  content.append(grid);
}
