/**
 * The code below will run a game of rock, paper, scissors
 */

function getComputerChoice() {
  let computerChoice = Math.ceil(Math.random() * 3)
  if (computerChoice === 1) {
    return("rock")
  } else {
    if (computerChoice === 2) {
      return("paper")
    } else {
      return("scissors")
    }
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Please type in (r)ock, (p)aper or (s)cissors")
  if (humanChoice === "r") {
    return("rock")
  } else {
  if (humanChoice === "p") {
    return("paper") 
  } else {
  if (humanChoice === "s") {
    return("scissors")
  } else {
  if (humanChoice === "rock" ||
      humanChoice === "paper" ||
      humanChoice === "scissors") {
    return(humanChoice)
  } else {
    return("Value not understood.")
  }
  }
  } 
  }
}

let humanScore = 0

let computerScore = 0 

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      return("It's a tie! You both chose rock.")
    } else if (computerChoice === "paper"){
      ++computerScore
      return("You lose! Paper beats rock.")
    } else {
      //Computer chooses scissors
      ++humanScore
      return("You win! Rock beats scissors.")
    }
  } else if (humanChoice ==="paper") {
    if (computerChoice === "rock") {
      ++humanScore
      return("You win! Paper beats rock.")
    } else if (computerChoice === "paper"){
      return("It's a tie! You both chose paper.")
    } else {
      //Computer chooses scissors
      ++computerScore
      return("You Lose! Scissors beats paper.")
    }
  } else {
    //human chooses scissors
    if (computerChoice === "rock") {
      ++computerScore
      return("You lose! Rock beats scissors.")
    } else if (computerChoice === "paper"){
      ++humanScore
      return("You win! Scissors beats paper.")
    } else {
      //Computer chooses scissors
      return("It's a tie! You both chose scissors.")
    }

  }

}

function playGame() {
  alert(playRound(getHumanChoice(),getComputerChoice()))
  alert(playRound(getHumanChoice(),getComputerChoice()))
  alert(playRound(getHumanChoice(),getComputerChoice()))
  alert(playRound(getHumanChoice(),getComputerChoice()))
  alert(playRound(getHumanChoice(),getComputerChoice()))
  alert("human score " + humanScore + ", computer score " + computerScore)
}

playGame()
